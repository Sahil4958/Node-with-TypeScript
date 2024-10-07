
import express,{Request,Response} from "express";
import { router } from "./routes/routes";
import  connects  from "./config/db";
const app = express();

const PORT = 4014;

app.use('/',router)

app.get("/test",(req:Request,res:Response)=>{
    let ob = {
        x : 3,
        y : 4
    }
    const data = sumData(ob)
    res.json({text : "Hy sahil Chennai Super Kings will win thisyear",
        data : data
    })
})

interface params {
    x : number,
    y : number
}

type sumCheck = (x : params) => number
const sumData :sumCheck = (ob:params)=>{
    return  ob.x + ob.y 
}

connects();
app.listen(PORT ,():void=>{
    console.log(`Server is runing on http://localhost:${PORT}`);
    
})

