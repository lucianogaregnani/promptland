import mongoose from "mongoose";

let isConnected = false;

async function connectToDB() {
  mongoose.set("strictQuery", true);
  try {
    if (isConnected) return;
    await mongoose.connect(process.env.MONGODB_URI || "", {
        dbName: "promptland"
    });
    isConnected = true;
  } catch (error: any) {
    console.log(error.message);
  }
}

export default connectToDB;
