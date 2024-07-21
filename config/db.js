import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
        "mongodb+srv://hammadkhalil04:q9leyIehcnLBrxqS@surveysensebackend.wf7ikfe.mongodb.net/?retryWrites=true&w=majority&appName=SurveySenseBackend",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB