const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'API Architecture Meeting 6 is running'
  });
});

module.exports = router;