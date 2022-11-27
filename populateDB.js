// #! /usr/bin/env node

// THIS PAGE WILL BE USED TO UPLOAD DATA TO POPULATE THE DATABASE ONCE STRUCTURE IS ESTABLISHED.

let async = require("async");
let userArgs = process.argv.slice(2);
let mongoDB = userArgs[0];
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
    pathName: pathName,
    animeName: animeName,
    title: title,
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
      //  ONE PIECE MERCH //
      /////////////////////
      function (callback) {
        productCreate(
          "Shirts",
          "one-piece",
          "One Piece",
          "Luffy Nika Shirt",
          "",
          "https://ih1.redbubble.net/image.3908212064.4596/ssrco,slim_fit_t_shirt,flatlay,e5d6c5:f62bbf65ee,front,wide_portrait,750x1000-bg,f8f8f8.jpg",
          25.0,
          8,
          callback
        );
      },

      function (callback) {
        productCreate(
          "Hoodies",
          "one-piece",
          "One Piece",
          "Tony Tony Chopper Xmas Hoodie",
          "",
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
          "One Piece",
          "Robin Sweatshirt",
          "",
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
          "One Piece",
          "Trafalgar Law Hoodie",
          "",
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
          "One Piece",
          "Zoro Pants",
          "",
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
          "One Piece",
          "Zoro Hoodie Pink",
          "",
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
          "One Piece",
          "Straw Hats Hoodie",
          "",
          "https://m.media-amazon.com/images/I/610zqTOvbAL._AC_UX679_.jpg",
          40,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Shirts",
          "one-piece",
          "One Piece",
          "Brook World Tour",
          "",
          "https://m.media-amazon.com/images/I/51MMHs1FcAS._AC_UX679_.jpg",
          40,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Beanies",
          "one-piece",
          "One Piece",
          "Zoro Green Beanie",
          "",
          "https://m.media-amazon.com/images/I/81wki+lHZOL._AC_UX679_.jpg",
          40,
          10,
          callback
        );
      },

      //  NARUTO MERCHANDISE //
      ////////////////////////
      function (callback) {
        productCreate(
          "Hoodies",
          "naruto",
          "Naruto",
          "Naruto Sage Hoodie",
          "",
          "https://nikifilini.com/wp-content/uploads/2022/11/hoodie-SENNIN-1-1080x1438.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Hoodies",
          "naruto",
          "Naruto",
          "Dark Sasuke",
          "",
          "https://nikifilini.com/wp-content/uploads/2022/05/IMG_3482-1-scaled-320x424.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Sweatshirts",
          "naruto",
          "Naruto",
          "Kaguya Sweatshirt",
          "",
          "https://nikifilini.com/wp-content/uploads/2022/01/svitshot-ICE-KAGUYA-1-scaled.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Pants",
          "naruto",
          "Naruto",
          "Pain pants",
          "",
          "https://nikifilini.com/wp-content/uploads/2021/07/shtany5-scaled.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Hoodies",
          "naruto",
          "Naruto",
          "Minato T-shirt",
          "",
          "https://nikifilini.com/wp-content/uploads/2022/10/T-SHIRT-MINATO-NAMIKAZE-scaled.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Shirts",
          "naruto",
          "Naruto",
          "Sasuke x Itachi T-shirt",
          "",
          "https://nikifilini.com/wp-content/uploads/2022/06/T_SHIRT-138-scaled.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Beanies",
          "naruto",
          "Naruto",
          "Akatsuki Beanie",
          "",
          "https://cdn.media.amplience.net/s/hottopic/18678853_hi?$productMainDesktopRetina$",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Shirts",
          "naruto",
          "Naruto",
          "Rock Lee Tee",
          "",
          "https://i.etsystatic.com/37031797/r/il/4c2371/4413693449/il_1588xN.4413693449_ceem.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Sweatshirts",
          "naruto",
          "Naruto",
          "Akatsuki Sweathshirt",
          "",
          "https://cdn.media.amplience.net/s/hottopic/18321762_hi?$productMainDesktopRetina$",
          120,
          10,
          callback
        );
      },

      // DEMON SLAYER MERCH //
      ///////////////////////
      function (callback) {
        productCreate(
          "Hoodies",
          "demon-slayer",
          "Demon Slayer",
          "Demon Slayer Trio",
          "",
          "https://cdn.shopify.com/s/files/1/0508/1713/8872/products/product-image-1756378946_1024x1024@2x.jpg?v=1621139071",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Beanies",
          "demon-slayer",
          "Demon Slayer",
          "Tanjiro Beanie",
          "",
          "https://cdn.media.amplience.net/s/hottopic/19246178_hi?$productMainDesktopRetina$",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Hoodies",
          "demon-slayer",
          "Demon Slayer",
          "Inosuke Denim Jacket Hoodie",
          "",
          "https://litb-cgis.rightinthebox.com/images/640x640/202108/bps/product/inc/obtwga1629362271114.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Hoodies",
          "demon-slayer",
          "Demon Slayer",
          "Nezuko Hoodie",
          "",
          "https://litb-cgis.rightinthebox.com/images/640x640/202203/bps/product/inc/uxnlcy1646892460778.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Shirts",
          "demon-slayer",
          "Demon Slayer",
          "Daki Tee",
          "",
          "https://nikifilini.com/wp-content/uploads/2022/05/TEE-DAKI-BLC-1-scaled.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Hoodies",
          "demon-slayer",
          "Demon Slayer",
          "Zenitsu Hoodie",
          "",
          "https://nikifilini.com/wp-content/uploads/2021/09/GOD-OF-THUNDER-1-scaled.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Pants",
          "demon-slayer",
          "Demon Slayer",
          "Muzan Pants",
          "",
          "https://nikifilini.com/wp-content/uploads/2021/09/PANTS-MUZAN-11-scaled.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Shirts",
          "demon-slayer",
          "Demon Slayer",
          "Nezuko Tee",
          "",
          "https://nikifilini.com/wp-content/uploads/2021/07/NEZUKO-12-scaled.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Pants",
          "demon-slayer",
          "Demon Slayer",
          "Nezuko Pants",
          "",
          "https://cdn.media.amplience.net/s/hottopic/15367297_hi?$productMainDesktopRetina$",
          120,
          10,
          callback
        );
      },

      // ATTACK ON TITAN MERCH //
      //////////////////////////

      function (callback) {
        productCreate(
          "Sweatshirts",
          "attack-on-titan",
          "Attack on Titan",
          "Captain Levi Sweatshirt",
          "",
          "https://cdn.media.amplience.net/s/hottopic/19250633_hi?$productMainTabletRetina$",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Shirts",
          "attack-on-titan",
          "Attack on Titan",
          "Mikasa Tee",
          "",
          "https://attackontitanstuff.com/wp-content/uploads/2021/04/product-image-1150415274.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Beanies",
          "attack-on-titan",
          "Attack on Titan",
          "Attack on Titan Beanie",
          "",
          "https://cdn.shopify.com/s/files/1/0014/2648/9388/products/crunchyroll-attack-on-titan-scout-regiment-beanie-30021425365036_2000x2000.jpg?v=1649107310",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Hoodies",
          "attack-on-titan",
          "Attack on Titan",
          "Founding Titan Hoodie",
          "",
          "https://nikifilini.com/wp-content/uploads/2022/08/IMG_7036-scaled.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Hoodies",
          "attack-on-titan",
          "Attack on Titan",
          "Eren Yaeger Titan Hoodie",
          "",
          "https://nikifilini.com/wp-content/uploads/2021/09/HOODIE-TITAN-2-scaled.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Shirts",
          "attack-on-titan",
          "Attack on Titan",
          "Scout Regiment Shirt",
          "",
          "https://cdn.media.amplience.net/s/hottopic/10191054_hi?$productMainDesktopRetina$",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Shirts",
          "attack-on-titan",
          "Attack on Titan",
          "Captain Levi Shirt",
          "",
          "https://attackontitanstuff.com/wp-content/uploads/2021/04/product-image-1685849256.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Hoodies",
          "attack-on-titan",
          "Attack on Titan",
          "Scout Regiment Hoodie",
          "",
          "https://i.etsystatic.com/38257056/r/il/0359bc/4302766338/il_1588xN.4302766338_xuzi.jpg",
          120,
          10,
          callback
        );
      },
      function (callback) {
        productCreate(
          "Pants",
          "attack-on-titan",
          "Attack on Titan",
          "Scouts Pants",
          "",
          "https://i.etsystatic.com/38257056/r/il/0359bc/4302766338/il_1588xN.4302766338_xuzi.jpg",
          120,
          10,
          callback
        );
      },

      function (callback) {
        productCreate(
          "Pants",
          "attack-on-titan",
          "Attack on Titan",
          "Scouts Pants",
          "",
          "https://i.etsystatic.com/38257056/r/il/0359bc/4302766338/il_1588xN.4302766338_xuzi.jpg",
          120,
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
