const Listing=require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const { CATEGORY_CONFIG, CATEGORY_VALUES, CATEGORY_KEYWORDS } = require("../utils/categories.js");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
const DEFAULT_IMAGE = {
    url: "https://images.unsplash.com/photo-1764708844823-00d2188dafd8?q=80&w=1287&auto=format&fit=crop",
    filename: "default-listing-image"
};

module.exports.index=async(req,res)=>{
    const { q, category } = req.query;
    const filters = [];

    if (q && q.trim()) {
        const escapedQuery = q.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`^${escapedQuery}`, "i");
        filters.push({
            $or: [
                { title: regex },
                { location: regex },
                { country: regex }
            ]
        });
    }

    if (category && CATEGORY_VALUES.includes(category) && category !== "trending") {
        const keywords = CATEGORY_KEYWORDS[category] || [];
        const keywordRegex = keywords.length ? new RegExp(keywords.join("|"), "i") : null;
        const categoryFilter = keywordRegex ? {
            $or: [
                { category },
                { title: keywordRegex },
                { description: keywordRegex },
                { location: keywordRegex }
            ]
        } : { category };

        filters.push(categoryFilter);
    }

    const finalFilter = filters.length ? { $and: filters } : {};
    const allListings = await Listing.find(finalFilter);
    res.render("listings/index.ejs",{
        allListings,
        q: q || "",
        selectedCategory: category || "trending",
        categories: CATEGORY_CONFIG
    });
};

module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new.ejs", { categories: CATEGORY_CONFIG });
};

module.exports.showListing = async (req,res)=>{
    let {id}=req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate:{path:"author"}}).populate("owner");
    console.log(listing);
    if(!listing){
        req.flash("error","The Listing You Requested for is not Found!");
        return res.redirect("/listings");
    }else{
        res.render("listings/show.ejs",{listing});
    }
    
};  

module.exports.createListing = async(req,res)=>{
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
        })
        .send();
            
    const newListing = new Listing(req.body.listing);
    newListing.owner=req.user._id;
    if (req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    } else {
        newListing.image = DEFAULT_IMAGE;
    }
    newListing.geometry = response.body.features[0].geometry;
   let savedListing =  await newListing.save();
    console.log(savedListing);
    req.flash("success","New Listing Created!");
    res.redirect("/listings");

};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "The Listing You Requested for is not Found!");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl, categories: CATEGORY_CONFIG });
};

module.exports.updateListing = async(req,res)=>{
     let {id}=req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file !=="undefined"){
     let url = req.file.path;
     let filename = req.file.filename;
     listing.image = {url,filename};
     await listing.save();
    }
   
    req.flash("success","Edit Successfull!");
    res.redirect(`/listings/${id}`);
}


module.exports.deleteListing = async (req,res)=>{
    let {id}=req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted Successfully!");
    res.redirect("/listings");
}
