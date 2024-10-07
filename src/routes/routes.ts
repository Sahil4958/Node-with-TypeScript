import express,{Request,Response} from "express";
import { homeDetail ,contactDetail} from "../Controllers/controllers";


const router = express.Router();

router.get("/Home",homeDetail)

router.get("/Contact",contactDetail)
export{
 router
}