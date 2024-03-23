const express = require('express');
const router = express.Router();

const {
    createJoin,
    getJoin
} = require('../controller/joinController');

// Post data => Join
router.post('/Join', createJoin);

// Get data => Join
router.get('/Join', getJoin);



module.exports = router;
