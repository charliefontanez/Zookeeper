const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

// why no relative path for animal routes?
router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;