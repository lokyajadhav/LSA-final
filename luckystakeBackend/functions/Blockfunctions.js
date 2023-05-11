const block=require('../Models/blocks');
const postblockdata=async function (req,res){
    {
        const dat=req.body;
        await block.create(dat);
        res.json({
            message:"data inserted!!!"
        })
    }
    }
    const getblockdata=async function (req,res){
        {
            const data=await block.find()
            console.log("size is" + data.length)
            res.json({
                data
            })
        }
        }
    
    module.exports={postblockdata,getblockdata};