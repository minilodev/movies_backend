// Import npm express
const express = require('express');
const router = express.Router();

const {
    createPeople,
    getPeoplePerson,
} = require('../controller/peopleController');

// Post data => People
router.post('/People', createPeople);

// Get data => People
router.get('/PeoplePerson', getPeoplePerson);





// Xuat ra router dung cho controller
module.exports = router;