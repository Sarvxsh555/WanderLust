const express = require("express");
const router = express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedin,isOwner,validateListing}=require("../middleware.js");
const { populate } = require("../models/review.js");


//Index Route
router.get("/",wrapAsync(async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));

//New Route
router.get("/new",isLoggedin,(req,res)=>{
    res.render("listings/new.ejs");
});

//Create route
router.post("/",isLoggedin,validateListing,wrapAsync(async(req,res)=>{
    const newListing = new Listing(req.body.listing);
    newListing.owner=req.user._id;
    await newListing.save();
    console.log(newListing);
    req.flash("success","New Listing Created!");
    res.redirect("/listings");

}));

//Show Route
router.get("/:id",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate:{path:"author"}}).populate("owner");
    console.log(listing);
    if(!listing){
        req.flash("error","The Listing You Requested for is not Found!");
        return res.redirect("/listings");
    }else{
        res.render("listings/show.ejs",{listing});
    }
    
}));

//Edit Route
router.get("/:id/edit",isLoggedin,isOwner,wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","The Listing You Requested for is not Found!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing});
}));

//Update route
router.put("/:id",isLoggedin,isOwner,validateListing, wrapAsync(async(req,res)=>{
     let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Edit Successfull!");
    res.redirect(`/listings/${id}`);
}));

//Destroy Route
router.delete("/:id",isLoggedin,isOwner,wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted Successfully!");
    res.redirect("/listings");
}));


module.exports=router;