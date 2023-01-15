const express=require('express')
//connect to express router
const router=express.Router();
//pull express validator
const {check,validationResult}=require('express-validator');

//GET api/users
//Register user
//public route
router.post('/',[
    //check if name field in the request.body is not empty
    check('name','Name is required').not().isEmpty(),
    //check email in the request.body is valid email
    check('email','Please include a valid email').isEmail(),
    //check if password field in request.body is at least 6 characters long
    check('password','Password should be at least 6 characters long').isLength({min:6})
],(req,res)=>{
    //check the errors in req.body
    const errors=validationResult(req);
    //Check errors are not empty
    if(!errors.isEmpty())
    return res.status(400).json({
        errors:errors.array()
    });

    res.send('User route');
    //Display request body
    console.log(req.body);
});
//export route
module.exports=router;