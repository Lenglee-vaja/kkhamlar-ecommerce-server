import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import { DATABASE_URL, PORT } from "./config/app.config.js";
import { PrismaClient } from "@prisma/client";
import "colors";
import router from "./routes/index.routes.js";
const app = express();
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1", router)
app.use("/", (req, res) => {
    res.send("welcome to khamlar-ecommerce");
})

export const models = new PrismaClient({
    log: ["query", "info", "warn", "error"]
})
app.listen(PORT, () => {
    console.log(`Server is running on ${"http://localhost:".blue}${PORT.blue}`);
    console.log(`Database is running on ${DATABASE_URL.blue}`);
});