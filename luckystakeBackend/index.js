const express= require('express');
const mongoose = require('mongoose')
//fsjnd
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.listen(4000);
app.use(cors())
const block=require('./Models/blocks');
//const link="mongodb+srv://Lokya_Jadhav:Lokya-9985@cluster0.cz6ew.mongodb.net/POL_Database?retryWrites=true&w=majority"
const link="mongodb://localhost:27017/POL_Database";
mongoose.connect(link,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
}).then((db)=>
{
    console.log("Database Connected");
}).catch((err)=>
{
    
    console.log(err);
})
const minerRoutes=require('./routes/miner_routes');
const BlockRoutes=require('./routes/block_routes');
const miningRoutes=require('./routes/mining_routes');
app.use('/miner',minerRoutes);
app.use('/',BlockRoutes)
app.use('/mining',miningRoutes);
const session=require('express-session');
const cookieParser=require('cookie-parser');
app.use(cookieParser())
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "secrete",
}))
