// ONE PIECE MERCH
let data = [
  {
    anime: "one-piece",
    imgSrc:
      "https://nikifilini.com/wp-content/uploads/2022/08/TEE-LUFF-1-1080x1438.jpg",
    clothesType: "shirt",
  },
  {
    anime: "one-piece",
    imgSrc:
      "https://litb-cgis.rightinthebox.com/images/640x640/202209/bps/product/inc/pousbr1662368216128.jpg",
    clothesType: "hoodie",
  },
];

main().catch((err) => console.error(err));

let onePieceModel = mongoose.models["one-piece"];

onePieceModel.insertMany(data).exec((err) => {
  console.log(err);
});

mongoose.connection.close();
