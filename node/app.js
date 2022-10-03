import express from 'express';
import cors from 'cors';
import { mongoconnection } from './db';
import bodyParser from 'body-parser';
import User from './routes/User'
import Product from './routes/Product';
import Order from './routes/Order';
import Image from './routes/Img';

const app = express();
mongoconnection();

app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

app.use(bodyParser.json({ limit: "50mb" }));

app.use("/ecom", User);
app.use("/product", Product);
app.use("/order",Order);
app.use("/img",Image);
app.use("/uploads",express.static("uploads"));


export default app;
