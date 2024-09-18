const Listing=require("../models/listing");

module.exports.camp=async(req,res)=>{
    let allListing=await Listing.find({category:"camp"});
    res.render("filters/filter.ejs",{allListing})
};

module.exports.room=async(req,res)=>{
    let allListing=await Listing.find({category:"room"});
    res.render("filters/filter.ejs",{allListing});
};

module.exports.trending=async(req,res)=>{
    let allListing=await Listing.find({category:"trending"});
    res.render("filters/filter.ejs",{allListing});
 };

module.exports.pool=async(req,res)=>{
    let allListing=await Listing.find({category:"pool"});
    res.render("filters/filter.ejs",{allListing});
 };

module.exports.earthome=async(req,res)=>{
    let allListing=await Listing.find({category:"earthome"});
    res.render("filters/filter.ejs",{allListing});
 };

 module.exports.beachfort=async(req,res)=>{
    let allListing=await Listing.find({category:"beachfort"});
    res.render("filters/filter.ejs",{allListing});
 };

module.exports.treefort=async(req,res)=>{
    let allListing=await Listing.find({category:"treefort"});
    res.render("filters/filter.ejs",{allListing});
 };

 module.exports.lakehouse=async(req,res)=>{
    let allListing=await Listing.find({category:"lakehouse"});
    res.render("filters/filter.ejs",{allListing});
 };
module.exports.designcave=async(req,res)=>{
    let allListing=await Listing.find({category:"design_cave"});
    res.render("filters/filter.ejs",{allListing});
 };
module.exports.nationalpark=async(req,res)=>{
    let allListing=await Listing.find({category:"national_park"});
    res.render("filters/filter.ejs",{allListing});
 };