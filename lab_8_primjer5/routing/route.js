const express= require('express');
const router= express.Router();
const proizvod= require('../models/proizvod');
const kategorija= require('../models/kategorija');
const dobavljac= require('../models/dobavljac');

router.post('/dodaj/proizvod',(req,res)=> {
    proizvod.dodaj(req,res);
});
router.get('/proizvodi',(req,res)=> {
    proizvod.all(res);
});
router.get('/proizvod/:id',(req,res)=> {
    proizvod.findById(req,res);
});
router.get('/proizvod/izbrisi/:id',(req,res)=> {
    proizvod.delete(req,res);
});
//  Category routes
router.post('/dodaj/kategorija',(req,res)=> {
    kategorija.insert(req,res);
});
router.get('/kategorije',(req,res)=> {
    kategorija.all(req,res);
});
router.get('/kategorija/:id',(req,res)=> {
    kategorija.findById(req,res);
});
router.get('/kategorija/izbrisi/:id',(req,res)=> {
    kategorija.delete(req,res);
});

router.post('/dodaj/dobavljac',(req,res)=> {
    dobavljac.insert(req,res);
});
router.get('/dobavljaci',(req,res)=> {
    dobavljac.all(req,res);
});
router.get('/dobavljac/:id',(req,res)=> {
    dobavljac.findById(req,res);
});
router.get('/dobavljac/izbrisi/:id',(req,res)=> {
    dobavljac.delete(req,res);
});

module.exports= router;

