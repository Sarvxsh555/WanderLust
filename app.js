const express=require("express");
const app=express();
const port=8080;
const mongoose=require("mongoose");
const Listing = require("./models/listing.js");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema,reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");

//Express Routers
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");


const MONGO_URL='mongodb://127.0.0.1:27017/wanderlust';

app.set("view engine","ejs");``
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);



main()
    .then((res)=>{
        console.log("Connected to DB");
    })
    .catch(err => {
        console.log(err)
    });
async function main() {
  await mongoose.connect(MONGO_URL);
}


app.get("/",(req,res)=>{
    res.send("Working properly");
})

//Routes/Listing.js
app.use("/listings",listings);

//Routes/review.js
app.use("/listings/:id/review",reviews);






// app.all("/*",(req,res,next)=>{
//     next(new ExpressError(404,"Page not found!"));
// });

app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went wrong!"}=err;
    res.status(statusCode).render("listings/error.ejs",{message});
    // res.status(statusCode).send(message);
});

app.listen(port,()=>{
    console.log("Server is listening to port 8080");
});
