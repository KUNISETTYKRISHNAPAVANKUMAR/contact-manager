let mongoose=require("mongoose");
const userModel = require("./userModel");

let contactSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        // ref:userModel
    },
    name:{
        type:String,
        required:[true,"Please provide name"]
    },
    mail:{
        type:String,
        required:[true,"Please provide contact email address"]
    },
    phone:{
        type:String,
        required:[true,"Please provide contact number"]
    }
},{
    timestamps:true
});

module.exports=mongoose.model("ContactModel",contactSchema)