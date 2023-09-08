const homelist = (req,res)=>{
    res.render('index',{title:"homepage"});

};
const locationinfo = (req,res)=>{
    res.render('index',{title:"location"});
};
const addreview = (req,res)=>{
    res.render('index',{title:"review"});
};
module.exports={
    homelist,
    locationinfo,
    addreview
};