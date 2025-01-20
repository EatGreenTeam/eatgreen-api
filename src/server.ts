import config from "./app/config";
import app from "./app";

import mongoose, { mongo } from "mongoose";

const server = app.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}`);
});

// Connect to MongoDB
mongoose
  .connect(config.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Function to perform cleanup tasks
const shutdown = async (exitCode: number) => {
  console.log("Performing cleanup tasks...");
  try {
    // Close the server
    await new Promise<void>((resolve, reject) => {
      server.close((error?: Error) => {
        if (error) return reject(error);
        resolve();
      });
    });
    // Close the database connection
    mongoose.connection.close().then(() => {
      console.log("MongoDB connection closed");
    });
    // if needed
    console.log("Cleanup completed. Exiting...");
    process.exit(exitCode);
  } catch (err) {
    console.error("Error during cleanup:", err);
    process.exit(1);
  }
};

// Handle uncaught exceptions
process.on("uncaughtException", async (error: Error) => {
  console.error("UNCAUGHT EXCEPTION!!! Shutting down...");
  console.error(error.name, error.message);
  await shutdown(1);
});

// Handle termination signals
process.on("SIGINT", async () => {
  console.log("Gracefully shutting down...");
  await shutdown(0);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", async (reason: any) => {
  console.error("UNHANDLED REJECTION!!! Shutting down...");
  console.error(reason);
  await shutdown(1);
});
