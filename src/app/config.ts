import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

const {
  PORT,
  MONGO_URI,
  JWT_SECRET,
} = process.env;

if (!JWT_SECRET) {
  throw new Error(
    "Missing required jwt secret. Please check your environment variables."
  );
}


if (!MONGO_URI) {
  throw new Error(
    "Missing required Mongo URI. Please check your environment variables."
  );
}



export default {
  PORT: parseInt(PORT || "8080"),
  JWT_SECRET,
  MONGO_URI,
};