const express = require("express");
const router = express.Router();
const companyController = require("../Controllers/companyController");

// Route to get company details by name
router.get("/find", companyController.getCompanyByName);

// Route to create a new company entry
router.post("/", companyController.createCompany);

module.exports = router;
