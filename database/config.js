import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://renato:RGMfbkE3sv9OkxQE@cluster0.yvzfiab.mongodb.net/"
    );
    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error when connecting to DB");
  }
};
