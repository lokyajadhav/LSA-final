const express=require('express')
const mod=require('../functions/Blockfunctions');
const BlockRoutes= express.Router();
 BlockRoutes.route('/add').post(mod.postblockdata);
 BlockRoutes.route('/getchain').get(mod.getblockdata);
 module.exports=BlockRoutes;