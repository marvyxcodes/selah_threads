// #! /usr/bin/env node

// THIS PAGE WILL BE USED TO UPLOAD DATA TO POPULATE THE DATABASE ONCE STRUCTURE IS ESTABLISHED.

let async = require("async");
let userArgs = process.argv.slice(2);
let mongoDB = userArgs[0];
let uniqid = require("uniqid");
const mongoose = require("mongoose");
const { title } = require("process");
const { type } = require("os");

if (!userArgs[0].startsWith("mongodb")) {
  console.log(
    "ERROR: You need to specify a valid mongodb URL as the first argument"
  );
  return;
}

// TESTING AREA ///////////

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  type: { type: String, required: true },
  pathName: { type: String, required: true },
  animeName: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String },
  imgUrl: { type: String },
  price: { type: Number, required: true },
  size: {
    type: Object,
    default: {
      small: "small",
      medium: "medium",
      large: "large",
    },
  },
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
function productCreate(
  category,
  type,
  pathName,
  animeName,
  title,
  desc,
  imgUrl,
  price,
  cb
) {
  productDetail = {
    category: category,
    type: type,
    pathName: pathName,
    animeName: animeName,
    title: title,
    desc: desc,
    imgUrl: imgUrl,
    price: price,
  };

  // FOR INVENTORY WE NEED TO MAKE A NEW SCHEMA TO LINK IT TO THIS ONE OF PRODUCTS
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
      // Upcoming Merch //
      /////////////////////

      function (callback) {
        productCreate(
          "art",
          "art",
          "naruto",
          "Naruto",
          "Nine Tailed Beast Sculpture",
          "",
          "https://nikifilini.com/wp-content/uploads/2022/07/IMG_9830-scaled.jpg",
          25.0,
          callback
        );
      },
      function (callback) {
        productCreate(
          "art",
          "art",
          "naruto",
          "Naruto",
          "Pain Acra Poster",
          "",
          "https://nikifilini.com/wp-content/uploads/2022/05/ACRA-PAIN-scaled-1080x1438.jpg",
          25.0,
          callback
        );
      },
      function (callback) {
        productCreate(
          "art",
          "art",
          "naruto",
          "Naruto",
          "Multiverse Jaraiya Poster",
          "",
          "https://nikifilini.com/wp-content/uploads/2022/05/HAREM-MULTIVERSE-scaled-1080x1438.jpg",
          25.0,
          callback
        );
      },
      function (callback) {
        productCreate(
          "art",
          "art",
          "naruto",
          "Naruto",
          "Sunken Poster",
          "",
          "https://nikifilini.com/wp-content/uploads/2021/09/THE-LOSS-scaled-1080x1438.jpg",
          25.0,
          callback
        );
      },
      function (callback) {
        productCreate(
          "art",
          "art",
          "naruto",
          "Naruto",
          "6 Paths Poster",
          "",
          "https://nikifilini.com/wp-content/uploads/2022/03/ART-PAIN-RIKUDO-1080x1438.jpg",
          25.0,
          callback
        );
      },
      function (callback) {
        productCreate(
          "art",
          "art",
          "naruto",
          "Naruto",
          "Kaguya Poster",
          "",
          "https://nikifilini.com/wp-content/uploads/2021/09/KAGUYA-scaled-1080x1438.jpg",
          25.0,
          callback
        );
      },
      function (callback) {
        productCreate(
          "art",
          "art",
          "naruto",
          "Naruto",
          "Tobi Poster",
          "",
          "https://nikifilini.com/wp-content/uploads/2021/07/TOBI-MASK-1080x1438.jpeg",
          25.0,
          callback
        );
      },
      function (callback) {
        productCreate(
          "art",
          "art",
          "naruto",
          "Naruto",
          "Sasuke Poster",
          "",
          "https://nikifilini.com/wp-content/uploads/2021/07/REVENGE-1-1080x1438.jpg",
          25.0,
          callback
        );
      },

      function (callback) {
        productCreate(
          "art",
          "art",
          "naruto",
          "Naruto",
          "Sasuke Poster",
          "",
          "https://nikifilini.com/wp-content/uploads/2022/03/DEMONSLAYER-scaled-1080x1438.jpg",
          25.0,
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
