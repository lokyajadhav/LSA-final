const list = require("./generateRandom");
const tempDataModel = require("../Models/tempdata");
const fun = require("../middlewares/AddBlock");
const minermodel = require("../Models/miner");
const sendResponse = async function (req, res, next) {
  //let remainingMiners=await tempDataModel.findOne({name:"lokya"})
  //const arr=remainingMiners.priorityMiners;
  //console.log(arr.length);
  const data = req.body;
  if (data.minerName === "empty") {
    // await tempDataModel.deleteMany({name:"lokya"})

    next();
  } else {
    // const getMiner=await tempDataModel.findOne({name:"lokya"})
    // const getMineraray=getMiner.priorityMiners;
    /// const miner=getMineraray[getMineraray.length-1];
    // console.log(miner);
    const miner = data.minerName;
    console.log(miner);

    const miners = await minermodel.find();
    const minersSize = miners.length;
    const freezeCount = minersSize / 2;

    await minermodel.updateMany(
      { name: miner },
      {
        $inc: { stake: -50 },
        $set: { freazeCount: (freezeCount%2==0)? (freezeCount + 2) : (freezeCount +1.5) },
      }
    );
    await minermodel.updateOne(
      { name: miner },
      {
        $inc: { balance: -50 },
      }
    );
    await tempDataModel.updateOne(
      { name: "lokya" },
      { $pop: { priorityMiners: 1 } }
    );
    res.send("true");
  }
};
module.exports = sendResponse;