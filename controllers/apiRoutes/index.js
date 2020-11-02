const router = require('express').Router();
const partsRoutes = require('./parts');

// All routes
router.use('/parts', partsRoutes);

module.exports = router;
