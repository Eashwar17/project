const express = require('express');
const router = express.Router();
const cntrlmain=require('../controllers/others.js');
const ctrllocations =require('../controllers/locations.js');
/* GET home page. */
router.get('/other',cntrlmain.about);
router.get('/',ctrllocations.homelist);
router.get('/location',ctrllocations.locationinfo);
router.get('/location/review/new',ctrllocations.addreview);
router.get('/about',cntrlmain.about);
module.exports=router;
