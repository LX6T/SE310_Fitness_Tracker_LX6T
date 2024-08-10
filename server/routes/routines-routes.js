// The routes for the routines

const express = require('express');

const routinesController = require('../controllers/routines-controller');

const router = express.Router();

// Get all routines
router.get('/', routinesController.getRoutines);

// Get a routine by name and date
router.get('/:name/:date', routinesController.getRoutine);

module.exports = router;