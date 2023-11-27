import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(
      ""
    );
    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error when connecting to DB");
  }
};
