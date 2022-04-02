const express = require('express');
const db = require('./../models');
const router = express.Router();
const PricingPackages = require('../models/index').organization_pricing_packages
const Organizations = require('../models/index').organizations
const OrganizationMembers = require('../models/index').organization_members
const OrganizationPricePackages = require('../models/index').organization_pricing_packages
const Workspaces = require('../models/index').work_spaces


// TODO Redo this code is sql !!

router.get("/get-all-plans", async (req, res) => {

    const results = await db.query(`select * from organization_pricing_packages`)

    res.status(200).json(results.rows)
})

router.get('/verify/workspaces', async (req, res) => {
    const { orgID } = req.query;

    // find organization first,
    const organization = (await db.query('SELECT * FROM organizations where org_id = $1', [orgID])).rows[0]

    // get the price package id of org
    const pricePackageID = organization.package_id;
    // get the complete price package from the id
    const pricePackage = (await db.query('SELECT * FROM organization_pricing_packages where package_id = $1', [pricePackageID])).rows[0]
    // get the workspace limit from the price package
    const workspaceLimit = pricePackage.workspace_limit;
    // get the number of workspaces that belong to the organization
    const workspaceCount = (await db.query('select * from work_spaces ws where ws.org_id = $1', [orgID])).rowCount
    // compare the workspaces to the workspace limit

    if (workspaceLimit <= workspaceCount)
        res.status(401).json({})
    else {
        res.status(200).json({})
    }
})


// Verifies organization members capacity
router.get('/verify/capacity', async (req, res) => {

    const code = req.query.code;

    if (code === undefined)
        return res.status(400).json({})

    const query = `select count(*) as num_members from organization_members om 
    inner join organizations o on o.org_id = om.org_id 
    where o.org_code = $1`

    const result = await db.query(query, [code])

    const membersCount = result.rowCount

    const result2 = await db.query(`select user_limit FROM organization_pricing_packages opp
    inner join organizations o ON o.package_id = opp.package_id 
    where o.org_code = $1`,[code])

    const userLimit = result2.rows[0].user_limit
    
    if (userLimit <= membersCount)
        res.status(401).json({})
    else if (userLimit > membersCount)
        res.status(200).json({})
})


module.exports = router