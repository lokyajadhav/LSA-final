const minermodel=require('../Models/miner');
const blocks=require('../Models/blocks');
const blockCount=require('../Models/tempBlock');
const updateTodefault= async function(req,res) {
const miners=await minermodel.find();
miners.forEach(async miner=>{
    await minermodel.updateMany({name:miner.name 
    },
    {
       
        $set:{BlocksMined:[]}
    })
    await minermodel.updateMany({name:miner.name 
    },
    {
        $set:{ freazeCount: 0},
        
    })
    await minermodel.updateMany({name:miner.name 
    },
    {
      
        $set:{ reward: 0},
        
    })
    await minermodel.updateMany({name:miner.name 
    },
    {
        
        $set:{ balance: miner.stake},
        
    })
    
})
//const BlockModel =await blocks.find();
await blocks.deleteMany({"BlockNumber":{$ne:0}});
await blockCount.updateOne({
    $set:{count: 0}
})
res.json({
    "messss":"success"
})
}
module.exports=updateTodefault;