const express = require('express')
    , router = express.Router()

router.get('/', (req,res) => {
    res.json('index from middleware');
});

module.exports = router;