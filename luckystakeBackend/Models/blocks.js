const mongoose = require("mongoose");

const blockShcema=mongoose.Schema({

    data:{
        type: String,
        required: true,
    },
    miner:{
        type: String,
        required: true,
    },
    BlockHash:{
        type: String,
        unique: true,
        required: true,
    },
    PreBlockHash:{
        type: String,
        unique: true,
        required: true,
    },
    timestamp:{
        type: String,
        required: true,
    },
    BlockNumber:{
        type: Number,
        unique: true,
        //required: true,
        default: 0,


    }
    

});
const BlockModel=mongoose.model('block',blockShcema);
module.exports=BlockModel;