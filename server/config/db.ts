import mongoose from 'mongoose';


const connectDB = async (): Promise<void> => {
//   console.log(process.env.MONGO_URI)
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB is connected to the DB Host:", connectionInstance.connection.host);
} catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
}
};

export default connectDB;