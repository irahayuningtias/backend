const express = require('express');
const router = express.Router();
const controller = require("./controller/index")

router.get('/news', controller.news);
router.get('/news/:id', controller.newsbyid);
router.post('/feedback', controller.feedback);

module.exports = router;
