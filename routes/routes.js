const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('../Controllers/controller');

// Serve the home page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

router.get('/api/our-projects', controller.projectsControllerGet);

router.post('/api/contact-us', controller.contactUsControllerPost);

router.get('/api/statistics', controller.statisticsControllerGet);

module.exports = router;