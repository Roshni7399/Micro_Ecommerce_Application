import express from 'express';
import {addImg , list} from '../controller/Img';
import { upload } from '../middleware/uploadFile';


const router = express.Router();

router.post('/addimage',upload.single('image'),addImg);
router.get('/list', list);

export default router;