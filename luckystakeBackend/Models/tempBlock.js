const mongoose=require('mongoose');
const countScema=mongoose.Schema({
    id:{
        type: String
    },
    count:{
        type:Number,
        default:0
    }
})
const countModel=mongoose.model('countmodel',countScema);
module.exports=countModel;