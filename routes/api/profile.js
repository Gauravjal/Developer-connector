const express=require('express')
//connect to express router
const router=express.Router();
const auth=require('../../middleware/auth')
const Profile =require('../../models/Profile')
const User =require('../../models/User');
//GET api/profile/me
//Get current users profile
//private route
router.get('/me',auth,async(req,res)=>{
    try{
        //find profile of user
        const profile=await Profile.findOne({user:req.user.id}).populate('user',['name','avatar']);
        if(!profile){
            return res.status(400).json({
                //If there is no profile data then display this message
                msg:'There is no profile data for this user'
            })
        }
        res.json(profile);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    res.send('Profile route');
})
//export route
module.exports=router;