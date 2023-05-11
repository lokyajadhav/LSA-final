const minermodel = require("../Models/miner");
const BlockDataModel = require("../Models/BlockData");
const minerMapModel = require("../Models/minerMap");
let minermaps = [];
let minermap=[];
let duplicateminers = [];
let frozenMiners = [];

//let minerarray=[];
//let topminers=[];
//let minerMapData;
const tempDataModel = require("../Models/tempdata");
const randomGenerater = async function (req, res) {
  var neededstake = 0;
  var updatedstake = 0;
  minermaps = [];
  //minerarray=[];
  const miners = await minermodel.find();
  miners.forEach(async (mine) => {
    if (mine.stake < 100) {
      neededstake = 100 - mine.stake;
      if (mine.reward >= neededstake) {
        updatedstake = neededstake;
        await minermodel.updateOne(
          { name: mine.name },
          {
            $inc: { stake: neededstake },
          }
        );
        await minermodel.updateOne(
          { name: mine.name },
          {
            $inc: { reward: -neededstake },
          }
        );
      }
      // else
      // {
      //     await minermodel.deleteMany({name:mine.name})

      // }
    }
  });

  await BlockDataModel.deleteMany({ id: 12345 });
  const data = req.body;
  BlockDataModel.create(data);
  //console.log(miners);
  let i = 34646453453;

  const model_miners = await minermodel.find();
  const minersSize = miners.length;
  const freezeCount = minersSize / 2;
  duplicateminers=[];
  miners.forEach(async (miner) => {
    var key;

    key = Math.floor(Math.random() * (2 * minersSize));
    let minermap = {
      id: i++,
      nameName: miner.name,
      randomNumber: key,
    };
    let flag = 0;
    if (miner.stake + updatedstake >= 100 && miner.freazeCount == 0) {
      minermaps.forEach(async (miner) => {
        if (miner.randomNumber == minermap.randomNumber) {
          flag = 1;
          return;
        }
      });
      if (flag == 0) minermaps.push(minermap);
      else duplicateminers.push(minermap);
    }
  });

  minermaps.forEach(async (miner) =>{
    duplicateminers.forEach(async (dupMiner)=>{
      if(miner.randomNumber == dupMiner.randomNumber)
      {
        duplicateminers.push(miner);
        let index = minermaps.indexOf(miner);
        minermaps.splice(index,1);  
        
      }
    })
  })


  //get the freezed miners
  frozenMiners=[]
  miners.forEach(async(miner)=>{
    if(miner.freazeCount >0)
    {
      frozenMiners.push(miner);
    }
  })

  // hashmap={}
  // minermap.forEach(async (miner)=>{
  //   if(hashmap[miner.randomNumber]) hashmap[miner.randomNumber]++;
  //   else hashmap[miner.randomNumber]=1
  //   //console.log(hashmap[randomNumber])
  // })
  // minermap.forEach(async (miner)=>
  // {
  //   if(hashmap[miner.randomNumber] >1)
  //   duplicateminers.push(miner);
  //   else minermaps.push(miner);   
  // })
  // console.log(minermaps);
  // console.log(duplicateminers);
  res.json({
    minermaps,
    duplicateminers,
    frozenMiners
  });
};
/*minerarray=minerarray.sort(function(a,b){return a-b});
console.log(minerarray.length);
topminers=minerarray.slice(minerarray.length-4,minerarray.length);
let top=[]
for(i=0;i<topminers.length;i++)
{
top[i]=minermap[topminers[i]]
}
console.log(minerarray);
console.log(top);
console.log(minermap);
tempDataModel.insertMany({name:"lokya",priorityMiners:top});
//await minerMapModel.deleteMany({id:"lokya"},{new: true})
next()
}
const getdata=async function(req,res)
{
    minerMapData=await minerMapModel.find();
    res.json({
        minerMapData
    })
}*/
module.exports = randomGenerater;