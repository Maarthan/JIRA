const express = require('express');
const apiControls = require('../controls/controls');

let router = express.Router();

router.get('/users',apiControls.getUsers);

router.post('/users',apiControls.postUsers);

router.get('/users/:id',apiControls.getSingleUser);

router.patch('/users/:id',apiControls.updateSingleUser);

router.delete('/users/:id',apiControls.deleteSingleUser);

module.exports = router;