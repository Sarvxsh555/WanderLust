const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedin,isReviewAuthor}=require("../middleware.js");

const reviewController = require("../controllers/reviews.js");


//Review Route
router.post("/",validateReview,isLoggedin,wrapAsync(reviewController.createReview));

//Review Delete Route
router.delete("/:reviewId",isReviewAuthor,wrapAsync(reviewController.deleteReview));


module.exports=router;