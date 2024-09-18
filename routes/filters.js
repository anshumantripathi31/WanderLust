const express=require("express");
const router=express.Router();
const wrapAsync= require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js")
const filtersController=require("../controllers/filters.js")



router.get("/camp",filtersController.camp);
router.get("/room",filtersController.room);
router.get("/trending",filtersController.trending);
router.get("/pool",filtersController.pool,);
router.get("/earthome",filtersController.earthome);
router.get("/beachfort",filtersController.beachfort);
 router.get("/treefort",filtersController.treefort);
 router.get("/lakehouse",filtersController.lakehouse);
 router.get("/design_cave",filtersController.designcave);
 router.get("/national_park",filtersController.nationalpark);

 module.exports=router;