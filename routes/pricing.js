const express = require('express');
const db = require('./../config/db');
const router = express.Router();
const PricingPackages = require('./../models/index').organization_pricing_packages

router.get("/show-all-plans",async (req,res)=>{
    res.status(200).json(await PricingPackages.findAll())
})

module.exports = router