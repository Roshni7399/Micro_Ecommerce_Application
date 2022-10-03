import express from 'express';
import {addProduct, productList, getProductsById, Search, payment} from '../controller/Product';
import { upload } from '../middleware/uploadFile';


const router = express.Router();

router.post('/addproduct',upload.single('image'),addProduct);
router.post('/productlist',productList);
router.get("/getproductsbyid/:id", getProductsById);
// router.get("/search/:Key", Search);
router.post("/search", Search);

router.post("/payment",payment)


export default router;