const express=require('express')
//connect to express router
const router=express.Router();


//GET api/users
//Test route
//public route
router.get('/',(req,res)=>res.send('User route'));
//export route
module.exports=router;