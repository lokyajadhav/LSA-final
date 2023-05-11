const express=require('express');
const app= express();
const mongoose =require('mongoose');

app.use(express.json());
app.listen(4000)
const link="mongodb+srv://Lokya_Jadhav:6WeqEmGVNP7kiJex@cluster0.cz6ew.mongodb.net/temp_Database?retryWrites=true&w=majority";
mongoose.connect(link).then((db)=>{
    console.log("database connected sucessfully")
}).catch((err)=>
{
 console.log(err);   
})
const userSchema=mongoose.Schema({
    name:{
            type: String,
            required: true,

    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
    },
    confirmPassword:{
        type: String,
        required: true,
        minlength :8,
    }
    
})
const userMidel=mongoose.model('userModer',userSchema)
const userRouter=express.Router();
app.use('/user',userRouter)
userRouter.route('/')
.post(PostUser)
async function PostUser(req,res)
{
    data=req.body;
    await userMidel.create(data);
     res.json(
        {
            message:'data recieved successfully'
        }
    )
}



