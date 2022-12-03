// #! /usr/bin/env node

// THIS PAGE WILL BE USED TO UPLOAD DATA TO POPULATE THE DATABASE ONCE STRUCTURE IS ESTABLISHED.

let async = require("async");
let userArgs = process.argv.slice(2);
let mongoDB = userArgs[0];
let uniqid = require("uniqid");
const mongoose = require("mongoose");
const { title } = require("process");

if (!userArgs[0].startsWith("mongodb")) {
  console.log(
    "ERROR: You need to specify a valid mongodb URL as the first argument"
  );
  return;
}

// TESTING AREA ///////////

const upcomingProduct = new mongoose.Schema({
  pathName: { type: String, required: true },
  animeName: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String },
  url: { type: String },
  price: { type: Number, required: true },
});

const Product = mongoose.model("upcomingProduct", upcomingProduct);

////////////////////////

// INIT CONNECTION TO DB //
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

let products = [];

// FUNCTION FACTORY - CREATION //
function productCreate(pathName, animeName, title, desc, url, price, cb) {
  productDetail = {
    pathName: pathName,
    animeName: animeName,
    title: title,
    desc: desc,
    url: url,
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
          "naruto",
          "Naruto",
          "UT Naruto Short Sleeve Tee",
          "",
          "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/458716/item/usgoods_03_458716.jpg?width=750",
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
