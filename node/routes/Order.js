import express from "express";
import {addproduct, Updateproduct, productDetailById} from '../controller/Order';

const router =express.Router();

router.post("/addproduct",addproduct);
router.put("/Updateproduct",Updateproduct);
router.get("/productDetailById/:id",productDetailById)



export default router;