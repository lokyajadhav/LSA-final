const mongoose=require('mongoose');
const tempDataScema=mongoose.Schema({
    name:{
        type:String,
    },
    priorityMiners:{
        type:[],
    }
    
})
const tempDataModel=mongoose.model('topminer',tempDataScema);
module.exports=tempDataModel;