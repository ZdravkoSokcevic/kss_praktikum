const express= require('express');
const router=express.Router();

var ctrlLocations=require('../controllers/locations');
var ctrlOthers= require('../controllers/others');

router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationsInfo);

router.get('/location/review/name', ctrlLocations.addReview);
router.get('/about',ctrlOthers.about);

module.exports= router;