const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{
    res.status(200).json("Inventory management System Server is running")
});

module.exports = router;
