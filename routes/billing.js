const express = require('express');
const db = require('../config/db');
const router = express.Router();
const PricingPackages = require('../models/index').organization_pricing_packages
const Organizations = require('../models/index').organizations
const OrganizationMembers = require('../models/index').organization_members
const OrganizationPricePackages = require('../models/index').organization_pricing_packages
const Workspaces = require('../models/index').work_spaces

router.get("/get-all-plans", async (req, res) => {
    res.status(200).json(await PricingPackages.findAll())
})

router.get('/verify/workspaces', async (req, res) => {
    const { orgID } = req.query;

    Organizations.findOne({
        where: {
            org_id: orgID
        }
    }).then((organization) => {
        const pricePackageID = organization.package_id;
        OrganizationPricePackages.findOne({
            where: {
                package_id: pricePackageID
            }
        }).then((pricePackage) => {

            const workspaceLimit = pricePackage.workspace_limit;

            Workspaces.findAndCountAll({
                where: {
                    org_id: orgID
                }
            }).then((workspaces) => {
                
                const workspaceCount = workspaces.count

                if (workspaceLimit <= workspaceCount)
                    res.status(401).json({})
                else
                {
                    console.log("Runs")
                    res.status(200).json({})
                }
            })
        })

    })
})


// Verifies organization members capacity
router.get('/verify/capacity', async (req, res) => {


    const code = req.query.code;

    const query = `select count(*) as num_members from organization_members om 
    inner join organizations o on o.org_id = om.org_id 
    where o.org_code = $1`

    if (code === undefined)
        return res.status(400).json({})

    Organizations.findOne({
        where: {
            org_code: code
        }
    }).then((result) => {

        const orgID = result.org_id;
        const pricePackageID = result.package_id;

        OrganizationMembers.findAndCountAll({
            where: {
                org_id: orgID
            }
        }).then((result1) => {

            const membersCount = result1.count;
            OrganizationPricePackages.findOne({
                where: {
                    package_id: pricePackageID
                }
            }).then((pricePackage) => {

                const userLimit = pricePackage.user_limit;

                if (userLimit <= membersCount)
                    res.status(401).json({})
                else if (userLimit > membersCount)
                    res.status(200).json({})

            })

        })
    })

})


module.exports = router