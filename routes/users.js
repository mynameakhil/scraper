const express = require('express');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.status(200).send({ error: 'something blew up' });
});

module.exports = router;
