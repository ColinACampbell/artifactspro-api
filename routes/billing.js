const express = require('express');
const db = require('../config/db');
const router = express.Router();
const PricingPackages = require('../models/index').organization_pricing_packages
const Organizations = require('../models/index').organizations
const OrganizationMembers = require('../models/index').organization_members
const OrganizationPricePackages = require('../models/index').organization_pricing_packages

router.get("/get-all-plans",async (req,res)=>{
    res.status(200).json(await PricingPackages.findAll())
})


router.get('/verify/capacity', async (req,res)=>{


    console.log(OrganizationMembers)

    const code = req.query.code; 

    const query = `select count(*) as num_members from organization_members om 
    inner join organizations o on o.org_id = om.org_id 
    where o.org_code = $1`

    if (code === undefined)
        return res.status(400).json({})

    Organizations.findOne({
        where : {
            org_code : code
        }
    }).then((result)=>{

        const orgID = result.org_id;
        const pricePackageID = result.package_id;

        OrganizationMembers.findAndCountAll({
            where : {
                org_id : orgID
            }
        }).then((result1)=>{

            const membersCount = result1.count;
            OrganizationPricePackages.findOne({
                where : {
                    package_id : pricePackageID
                }
            }).then((pricePackage)=>{

                const userLimit = pricePackage.user_limit;

                if (userLimit == membersCount)
                    res.status(401).json({})
                else if (userLimit > membersCount)
                    res.status(200).json({})

            })

        })
    })

})


module.exports = router