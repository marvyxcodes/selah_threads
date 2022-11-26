// #! /usr/bin/env node

// THIS PAGE WILL BE USED TO UPLOAD DATA TO POPULATE THE DATABASE ONCE STRUCTURE IS ESTABLISHED.

let async = require("async");
let userArgs = process.argv.slice(2);
let mongoDB = userArgs[0];
const mongoose = require("mongoose");

if (!userArgs[0].startsWith("mongodb")) {
  console.log(
    "ERROR: You need to specify a valid mongodb URL as the first argument"
  );
  return;
}

// TESTING AREA ///////////

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  anime: { type: String, required: true },
  name: { type: String, required: true },
  desc: { type: String },
  url: { type: String },
  price: { type: Number, required: true },
  inventory: { type: Number, required: true },
});

const Product = mongoose.model("productModel", productSchema);

////////////////////////

// INIT CONNECTION TO DB //
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

let products = [];

// FUNCTION FACTORY - CREATION //
function productCreate(category, anime, name, desc, url, price, inventory, cb) {
  // if (discounts === false || discounts === null) discounts = 0;
  productDetail = {
    category: category,
    anime: anime,
    name: name,
    desc: desc,
    url: url,
    price: price,
    inventory: inventory,
  };

  let product = new Product(productDetail);

  // save product to mongoDB
  product.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    // this is giving me error.

    // console.log("New Product: " + product);
    products.push(product);
    cb(null, product);
  });
}

function createProducts(cb) {
  async.parallel(
    [
      function (callback) {
        productCreate(
          "Shirts",
          "one-piece",
          "Luffy Nika Shirt",
          "Luffy Nika T-shirt",
          "https://ih1.redbubble.net/image.3908212064.4596/ssrco,slim_fit_t_shirt,flatlay,e5d6c5:f62bbf65ee,front,wide_portrait,750x1000-bg,f8f8f8.jpg",
          25.0,
          8,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Hoodies",
          "naruto",
          "Naruto Sage Hoodie",
          "Naruto Sage Hoodie",
          "https://nikifilini.com/wp-content/uploads/2022/11/hoodie-SENNIN-1-1080x1438.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Hoodies",
          "one-piece",
          "Tony Tony Chopper Xmas Hoodie",
          "Chopper Hoodie",
          "https://onepiece.store/wp-content/uploads/2022/11/product-image-1874994975_720x.webp",
          40,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Sweatshirts",
          "one-piece",
          "Robin Sweatshirt",
          "Robin Panels Sweatshirt",
          "https://cdn.shopify.com/s/files/1/0014/2648/9388/products/ripple-junction-hoodies-outerwear-one-piece-robin-panels-crew-sweatshirt-crunchyroll-exclusive-28911694676012_900x900.jpg?v=1634146797",
          40,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Hoodies",
          "one-piece",
          "Trafalgar Law Hoodie",
          "Trafalgar Hoodie",
          "https://m.media-amazon.com/images/I/61ySNw2dkxL._AC_UX679_.jpg",
          40,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Pants",
          "one-piece",
          "Zoro Pants",
          "Zoro Loungewear pants",
          "https://m.media-amazon.com/images/I/41Ww3iYaxHL._AC_UY741_.jpg",
          40,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Hoodies",
          "one-piece",
          "Zoro Hoodie Pink",
          "Pink Zoro Hoodie",
          "https://m.media-amazon.com/images/I/61rfty5xhdL._AC_UX679_.jpg",
          40,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Hoodies",
          "one-piece",
          "Straw Hats Hoodie",
          "Beige Hoodie",
          "https://m.media-amazon.com/images/I/610zqTOvbAL._AC_UX679_.jpg",
          40,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "T Shirt",
          "one-piece",
          "Brook World Tour",
          "Brook T shirt",
          "https://m.media-amazon.com/images/I/51MMHs1FcAS._AC_UX679_.jpg",
          40,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Beanie",
          "one-piece",
          "Zoro Green Beanie",
          "Green Beanie",
          "https://m.media-amazon.com/images/I/81wki+lHZOL._AC_UX679_.jpg",
          40,
          10,
          callback
        );
      },
    ],
    function cb(err, results) {
      if (err) {
        console.log("Error: ", err);
      } else {
        console.log("products: ", results);
      }
    }
  );
}

async.series(
  [createProducts],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("Prouducts: " + results);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
