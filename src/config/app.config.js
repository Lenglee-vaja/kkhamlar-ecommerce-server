import dotenv from "dotenv";
dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";
const SECRET_KEY = process.env.SECRET_KEY
const JWT_REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET_KEY
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || "30d";

export { PORT, DATABASE_URL, NODE_ENV, JWT_SECRET_KEY, JWT_EXPIRES_IN, JWT_REFRESH_EXPIRES_IN, SECRET_KEY, JWT_REFRESH_SECRET_KEY };