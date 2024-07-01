const mongoose=require("mongoose")

const connectDb=async(url)=>{
    let connection=await mongoose.connect(url)
    console.log("DB COnnected ..."+connection.connection.host+" "+connection.connection.name)
}

module.exports=connectDb