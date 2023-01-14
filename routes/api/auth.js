const express=require('express')
//connect to express router
const router=express.Router();


//GET api/auth
//Test route
//public route
router.get('/',(req,res)=>res.send('Auth route'));
//export route
module.exports=router;