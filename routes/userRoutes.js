let express=require("express")
const { registerUser, loginUser, getCurrentDetails } = require("../Controllers/userController")
const validateTokenHandler=require("../middleware/validateTokenHandler")
let router=express.Router()

router.post("/register",registerUser)

router.post("/login",loginUser)

router.get("/current",validateTokenHandler,getCurrentDetails)

module.exports=router