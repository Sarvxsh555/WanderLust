const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
require("dotenv").config({ path: "../.env" });

// ✅ Use Atlas DB
const MONGO_URL = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("✅ Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  // 1️⃣ Clear old listings
  await Listing.deleteMany({});
  console.log("🗑️ Old listings deleted");

  // 2️⃣ Add owner to each listing
  const ownerId = new mongoose.Types.ObjectId(
    "6952333f40f35dcfde8d52e6" // must exist in users collection
  );

  const listingsWithOwner = initData.data.map((obj) => ({
    ...obj,
    owner: ownerId,
  }));

  // 3️⃣ Insert data
  await Listing.insertMany(listingsWithOwner);
  console.log("🌱 Data was initialised");

  mongoose.connection.close();
};

initDB();
