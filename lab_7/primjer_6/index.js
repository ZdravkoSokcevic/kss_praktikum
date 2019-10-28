var homepageController = (req,res)=> {
    res.render('index',{title:'Express'});
}

router.get('/',homepageController);