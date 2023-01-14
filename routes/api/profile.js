const express=require('express')
//connect to express router
const router=express.Router();


//GET api/profile
//Test route
//public route
router.get('/',(req,res)=>res.send('Profile route'));
//export route
module.exports=router;