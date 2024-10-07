
import {Model,Schema , model , Document} from "mongoose"


export interface UserDocument extends Document{
    name : string;
    dept : string;
    roll_no : number;
    city : string;
    applicable : boolean; 
}
interface User {
    name : string;
    dept : string;
    roll_no : number;
    city : string;
    applicable : boolean;
}

interface UserModel extends Model<User>{
    myNewStatcFn(): Number;
    mathStaticFn() : String
}


const studentSchema = new Schema<User,UserModel>({
name: {
    type :String,
    required : true
}, 

    dept : {
        type :String,
    required : true 
    },

    roll_no : {
        type : Number,
        required :true
    },
    city : {
        type :String,
        required : true 
    },

    applicable : {
        type : Boolean,
        required : true
    }
     
})
studentSchema.static('myNewStatcFn',function myNewStatcFn(){
    return 150
})

studentSchema.static('mathStaticFn',function mathStaticFn(){
    return "Chennai Suer Kings"
})

const UserModel = model<User,UserModel>("User",studentSchema);

export default UserModel