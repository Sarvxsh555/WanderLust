const User = require("../models/user");


module.exports.signup=async(req, res) => {
   try{
     let {username,email,password} = req.body;
    const newUser = new User({email,username});
    const registeredeUser = await User.register(newUser,password);
    console.log(registeredeUser);
    req.login(registeredeUser,(err)=>{
       if(err){
         next(err);
       }
        req.flash("success","Welcome to Wanderlust");
        res.redirect("/listings");
    });
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
    };


module.exports.login = async(req,res)=>{
    req.flash("success","Welcome to Wanderlust! Happy to See You Again");
    let redirectUrl = res.locals.redirectUrl||"/listings";
    res.redirect(redirectUrl);
}


module.exports.logout = (req,res)=>{
    req.logout((err)=>{
      if(err){
          return next(err);
        }
        req.flash("success","You are logged out now!");
        res.redirect("/listings");
    })
};