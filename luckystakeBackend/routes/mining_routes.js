const express=require('express')
const mod=require('../middlewares/generateRandom');
const mode=require('../middlewares/selectMiner')
const addNewBlock=require('../middlewares/AddBlock')
const miningRoutes= express.Router();
miningRoutes.route('/generateRandom').post(mod);
miningRoutes.route('/getresponse').post(mode,mod);
miningRoutes.route('/getresponse').post(mode,mod);
miningRoutes.route('/addNewBlock').post(addNewBlock);
module.exports=miningRoutes;