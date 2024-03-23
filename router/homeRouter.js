// Import npm express
const express = require('express');
const router = express.Router();

const {
    homePage,
    menu,
    banners,
    trailers,
    join,
    progress,
    // --------- Home --------- //
    createHome,
    getHomeTrending,
    getHomeTrailer,
    getHomePopular,
} = require('../controller/homeController') // khai bao ten router cho file homController.js 

// Cac router de thao tac
router.get('/home', homePage);
router.get('/menu', menu);
router.get('/banners', banners);
router.get('/trailers', trailers);
router.get('/join', join);
router.get('/progress', progress);

// Post data => Home
router.post('/Home', createHome);

// Get data => Home
router.get('/HomeTrending', getHomeTrending);
router.get('/HomeTrailer', getHomeTrailer);
router.get('/HomePopular', getHomePopular);










// Xuat ra router dung cho controller
module.exports = router;