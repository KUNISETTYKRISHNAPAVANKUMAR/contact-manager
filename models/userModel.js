let mongoose=require("mongoose")

let userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please add username"]
    },
    email:{
        type:String,
        required:[true,"Please provide email"],
        unique:[true,"Email already exists"]
    },
    password:{
        type:String,
        required:[true,"Please provide password"]
    }
},{
    timestamps:true
})

module.exports=mongoose.model("UserModel",userSchema)