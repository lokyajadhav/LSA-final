const express=require('express')
const mod=require('../functions/minerfunctions');
const updatetoDefault=require('../middlewares/updateTodefault')
const minerRoutes= express.Router();
 minerRoutes.route('/register').post(mod.registerminer);
 minerRoutes.route('/getminers').get(mod.getminers);
 minerRoutes.route('/update-to-default').post(updatetoDefault);
 module.exports=minerRoutes;