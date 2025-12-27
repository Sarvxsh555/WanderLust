const express = require("express");
const router = express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedin,isOwner,validateListing}=require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer  = require('multer')

const {storage} = require("../cloudConfig.js");

const upload = multer({ storage })


router.route("/")
    .get(wrapAsync(listingController.index))    //Index Route
    .post(isLoggedin,validateListing,upload.single('listing[image][url]'),wrapAsync(listingController.createListing));     //Create route

//New Route  
router.get("/new",isLoggedin,listingController.renderNewForm);


router.route("/:id")
    .get(wrapAsync(listingController.showListing))       //Show Route
    .put(isLoggedin,isOwner,validateListing,upload.single('listing[image][url]'), wrapAsync(listingController.updateListing))  //Update route
    .delete(isLoggedin,isOwner,wrapAsync(listingController.deleteListing)); //Destroy Route


//Edit Route
router.get("/:id/edit",isLoggedin,isOwner,wrapAsync(listingController.renderEditForm));


module.exports=router;