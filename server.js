//connect to express
const express=require('express')
//import module form db.js
const connectDB=require('./config/db');
const app=express();
//Connect to database
connectDB();
//set port to 5000
const PORT=process.env.PORT || 5000;
//Get request
app.get('/',(req,res)=>res.send('API running'))
//Define routes for users,auth,profile,posts respectively
app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/profile',require('./routes/api/profile'))
app.use('/api/posts',require('./routes/api/posts'))
//Listen to port 5000
app.listen(PORT,()=>console.log(`Server has start at port ${PORT}`))