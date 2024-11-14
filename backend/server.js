import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import router from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/products", router);

app.listen(3000, () => {
    connectDB();
    console.log('App is running at server http://localhost:3000');
})
