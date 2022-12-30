import { NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";
import main from "../../mongoDB/connect";
import Product from "../../mongoDB/Models/product";
const dollarsToCents = require("dollars-to-cents");
import type { CartItem } from "../../context/ShoppingCartContext";

const stripe = require("stripe")(process.env.NEXT_PRIVATE_STRIPE_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  main().catch((err) => {
    console.log(err);
  });

  // Gather items from request body and map item id's into array
  let cartItems = req.body.cartItems.map((item: CartItem) => {
    return item._id;
  });

  // Pull in items from database with accurate information using spread operator
  // where ids are used.
  let cartDBPull = await Product.find({
    _id: { $in: [...cartItems] },
  });
  // cartDBPull returns array of queried items.

  // result is parsed into readable _id value,
  // otherwise it would be unusable object
  let result = await JSON.parse(JSON.stringify(cartDBPull));
  // readable array of items.

  let mappedItems = new Map();

  result.map((item: CartItem) => {
    mappedItems.set(item._id, {
      price: item.price,
      name: item.title,
    });
  });

  // console.log(mappedItems);

  // Client POSTS cart items, API handles pull from DB to get server information, that client can't mess with.
  // Map over items retrieved from DB to apply stripe pricing/data

  // need to compare validate prices using the db listed prices.

  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: req.body.cartItems.map((item: CartItem) => {
          let mappedItem = mappedItems.get(item._id);
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: mappedItem.name,
              },
              unit_amount: dollarsToCents(mappedItem.price),
            },
            quantity: item.quantity,
          };
        }),
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.json({ url: session.url });
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
