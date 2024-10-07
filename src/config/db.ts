

import mongoose , {connect} from "mongoose";

function connects(){
    return connect("mongodb+srv://200120107037:kjmzRBVzdBwLTZoO@cluster0.8ww0i.mongodb.net/Student")
    .then( () =>{
        console.log("Database has been connected");
    }).catch((err:any)=>{
        console.log(err);
        
    })

}

export default connects