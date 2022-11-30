import express from 'express';
import {userSignup, userLogin, getUserDataById, foregetPassword,reSetPassword} from '../controller/User'
import {verifyToken} from '../middleware/verifyToken'
import { upload } from '../middleware/uploadFile';


const router = express.Router();

router.post('/usersignup',upload.single('image'),userSignup);
router.post('/userlogin',userLogin);
router.get("/getuserid",getUserDataById);
router.post("/forgetpassword", foregetPassword);
router.post("/resetpassword",reSetPassword)



export default router;