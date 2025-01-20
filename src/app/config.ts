import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

const {
  PORT,
  NODE_ENV,
  MONGO_URI,
  JWT_SECRET,
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
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

if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
  throw new Error(
    "Missing required admin credentials. Please check your environment variables."
  );
}


export default {
  PORT: parseInt(PORT || "8080"),
  JWT_SECRET,
  NODE_ENV,
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
  MONGO_URI,
};
