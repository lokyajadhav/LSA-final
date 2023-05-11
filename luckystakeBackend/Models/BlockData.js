const mongoose=require('mongoose');
const BlockDataSchema=mongoose.Schema({
    id:{
        type:Number,
        default:12345,
    },
    BlockData:{
        type:String,

    }

});
const BlockDataModel=mongoose.model('BlockData',BlockDataSchema);
module.exports=BlockDataModel;