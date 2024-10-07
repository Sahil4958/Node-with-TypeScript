import { Request,Response } from "express";

import {createUser , findAndUpdate,findUser,deleteUser} from "../services/users.services"
import UserModel from "../models/users";

const homeDetail = async (req:Request ,res:Response)=>{
      
// const user = UserModel.myNewStatcFn()
// res.json(user);

const okl = UserModel.mathStaticFn();
res.json(okl);

    // let myData = await userModel.find();

    //--- ADD ---
    // const user = await createUser({ name : "Sahil Vaidya",
    //     dept: "Computer Science",
    //     roll_no: 12345,
    //     city: "New York",
    //     applicable: true})
    // res.status(200).json({status:"Sucessful" ,data:{msg: "This is a Home Page",myData:user
  
    // }});

    // --UPDATE ---
    // const user = await findAndUpdate({name:"John Doe"},{city : "amdavad"},{new:true});
    // res.json({




    
    //     myData : user
    // })

    //---Find ----

    // const user = await findUser({_id :'66f15341ff1a6be7afc1ae36'});
    // res.json(user)


    //---Delete---
    // const user = await deleteUser({_id :'66f287dfb9204e1aefaf4b2a'});
    // res.json(user)
}


const contactDetail = (req:Request,res:Response):any=>{
    res.status(200).json({status : "Yes it's Sucessful",data : {
        msg : "This is a Contact Page",
        number : 8866034533,
        email : "sahilvaidya@wtx.com"
    }})
}
export {
    homeDetail,
    contactDetail    
}