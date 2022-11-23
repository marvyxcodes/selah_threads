import mongoose from "mongoose";

// create mongodb mongodb connection

const main = async () => {
  mongoose.connect(
    "mongodb+srv://mtrujillo:weebAdmin69@weeb-maxstore.nwv9gs2.mongodb.net/clothingData?retryWrites=true&w=majority"
  );
  console.log("database connected");


};

export default main;
