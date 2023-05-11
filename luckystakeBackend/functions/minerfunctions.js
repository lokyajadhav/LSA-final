//const miner=require('../Models/miner')
const minermodel=require('../Models/miner')
var stakevalue=0;
var f=0;
const registerminer=async function (req,res){
    {
        const dat=req.body;
        stakevalue=req.body.stake;
        
        const minerName=req.body.name;
        console.log(stakevalue);
        console.log(minerName);
      // const miners=await minermodel.find();
       // const dict={"name":minerName}
       // console.log(minermodel.countDocuments({}));
        if(await minermodel.countDocuments({name:minerName}))
        {
            await minermodel.updateMany({name:minerName},
               
                { $inc : {stake: stakevalue }})
               
                await minermodel.updateMany({name:minerName},
                    { $inc : {balance: stakevalue }}
                   )
        
                    
                    res.json({
                        message: minerName+" stake added successfully!!"
                    })
        }
        else 
        {
            await minermodel.create(dat);
            await minermodel.updateOne({name:minerName},
                { $inc : {balance: stakevalue }})
                        res.json({
                            message:"New Miner Added!!!"
                        })
        }
        /*miners.forEach(async miner=>{
            if(miner.name === minerName)
            {
                f=1
                await minermodel.updateOne({name:miner.name},
                   { $inc : {stake: stakevalue }})
                   
                   break;
                   

            }
            else
            {
                if(f==0)
                {
                   
                        await minermodel.create(dat);
                        res.json({
                            message:"New Miner Added!!!"
                        })
                    
                }
            }
        })*/
        
    }
}
const getminers=async function (req,res){
    {
        const data=await minermodel.find()
        res.json({
            data
        })
    }
}
module.exports={registerminer,getminers};