const express = require("express");
const router = express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema,reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");



const validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        throw new ExpressError(400,error);
    } else {
        next();
    }
};


//Index Route
router.get("/",wrapAsync(async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));

//New Route
router.get("/new",(req,res)=>{
    res.render("listings/new.ejs")
});

//Create route
router.post("/",validateListing,wrapAsync(async(req,res)=>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    console.log(newListing);
    req.flash("success","New Listing Created!");
    res.redirect("/listings");

}));

//Show Route
router.get("/:id",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error","The Listing You Requested for is not Found!");
        res.redirect("/listings");
    }else{
        res.render("listings/show.ejs",{listing});
    }
    
}));

//Edit Route
router.get("/:id/edit",wrapAsync(async(req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","The Listing You Requested for is not Found!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing});
}));

//Update route
router.put("/:id",validateListing, wrapAsync(async(req,res)=>{
     let {id}=req.params;
    const listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Edit Successfull!");
    res.redirect(`/listings/${id}`);
}));

//Destroy Route
router.delete("/:id",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted Successfully!");
    res.redirect("/listings");
}));


module.exports=router;