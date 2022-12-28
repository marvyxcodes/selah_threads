import { NextApiRequest, NextApiResponse } from "next";
import main from "../../mongoDB/connect";
import Product from "../../mongoDB/Models/product";
const dollarsToCents = require("dollars-to-cents");

const stripe = require("stripe")(process.env.NEXT_PRIVATE_STRIPE_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  main().catch((err) => {
    console.log(err);
  });

  let cartItems = req.body.cartItems.map((item) => {
    return item._id;
  });

  let cartDBPull = await Product.find({
    _id: { $in: [...cartItems] },
  });

  let result = await JSON.parse(JSON.stringify(cartDBPull));

  // console.log(cartItems);
  // console.log(result);
  // console.log(req.body.cartItems);

  // Client POSTS cart items, API handles pull from DB to get server information, that client can't mess with.
  // Map over items retrieved from DB to apply stripe pricing/data

  // need to compare validate prices using the db listed prices.

  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: req.body.cartItems.map((item) => {
          // let databaseItem = result.filter((product) => {
          //   return item._id === product._id;
          // });
          // console.log(databaseItem);
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: dollarsToCents(item.price),
            },
            quantity: item.quantity,
          };
        }),
        mode: "payment",
        success_url: `http:localhost:3000/success`,
        cancel_url: `http:localhost:3000/cancel`,
      });
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
