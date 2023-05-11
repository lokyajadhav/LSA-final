

const mongoose=require('mongoose');

const minerMapSchema=mongoose.Schema({
    minerName:{
        type:String,
    },
    id:{
        type:String,
        default:"lokya",
    },
    RandomNumber:{
        type:Number,
    }
}
)
const minerMapModel=mongoose.model("minerMap",minerMapSchema);
module.exports=minerMapModel;