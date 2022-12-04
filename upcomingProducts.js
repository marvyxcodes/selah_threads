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

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  pathName: { type: String, required: true },
  animeName: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String },
  url: { type: String },
  price: { type: Number, required: true },
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
  pathName,
  animeName,
  title,
  desc,
  url,
  price,
  cb
) {
  productDetail = {
    category: category,
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
          "Shirts",
          "one-piece",
          "One Piece",
          "UT Straw Hats Tee",
          "",
          "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/459206/item/usgoods_00_459206.jpg?width=750",
          25.0,
          callback
        );
      },

      function (callback) {
        productCreate(
          "Shirts",
          "naruto",
          "Naruto",
          "UT Naruto Short Sleeve Tee",
          "",
          "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/458716/item/usgoods_03_458716.jpg?width=750",
          25.0,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Shirts",
          "one-piece",
          "One Piece",
          "UT Monkey D. Luffy Tee",
          "",
          "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/459209/item/usgoods_00_459209.jpg?width=750",
          25.0,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Shirts",
          "naruto",
          "Naruto",
          "UT Akatsuki Tee",
          "",
          "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/459205/item/usgoods_09_459205.jpg?width=750",
          25.0,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Shirts",
          "one-piece",
          "One Piece",
          "UT Doctor Chopper Tee",
          "",
          "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/458715/item/usgoods_03_458715.jpg?width=750",
          25.0,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Shirts",
          "naruto",
          "Naruto",
          "UT Naruto / Sasuke Tee",
          "",
          "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/459204/item/usgoods_00_459204.jpg?width=750",
          25.0,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Shirts",
          "one-piece",
          "One Piece",
          "UT Luffy Wrap Tee",
          "",
          "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/459208/item/usgoods_00_459208.jpg?width=750",
          25.0,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Collectibles",
          "demon-slayer",
          "Demon Slayer",
          "Kimetsu no Yaiba Tengen Daki",
          "",
          "https://m.media-amazon.com/images/I/51ukem7sJkL._AC_SX679_.jpg",
          60,
          callback
        );
      },

      /////
      function (callback) {
        productCreate(
          "Shirts",
          "one-punch-man",
          "One Punch Man",
          "Saitama Ok Tee",
          "",
          "https://m.media-amazon.com/images/I/715t63Sd+RL._AC_UX679_.jpg",
          25.0,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Hoodies",
          "jujutsu-kaisen",
          "Jujutsu Kaisen",
          "Satoru Gojo Hoodie",
          "",
          "https://m.media-amazon.com/images/I/61DgcH+p2QL._AC_UX679_.jpg",
          25.0,
          callback
        );
      },
      // function (callback) {
      //   productCreate(
      //     "demon-slayer",
      //     "Demon Slayer",
      //     "Kimetsu no Yaiba Nezuko Perching Figure",
      //     "",
      //     "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif",
      //     25.0,
      //     callback
      //   );
      // },
      // function (callback) {
      //   productCreate(
      //     "demon-slayer",
      //     "Demon Slayer",
      //     "Kimetsu no Yaiba Nezuko Perching Figure",
      //     "",
      //     "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif",
      //     25.0,
      //     callback
      //   );
      // },
      // function (callback) {
      //   productCreate(
      //     "demon-slayer",
      //     "Demon Slayer",
      //     "Kimetsu no Yaiba Nezuko Perching Figure",
      //     "",
      //     "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif",
      //     25.0,
      //     callback
      //   );
      // },
      // function (callback) {
      //   productCreate(
      //     "demon-slayer",
      //     "Demon Slayer",
      //     "Kimetsu no Yaiba Nezuko Perching Figure",
      //     "",
      //     "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif",
      //     25.0,
      //     callback
      //   );
      // },
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
