const express = require("express");

// const UserCompany = require("../Models/Schema");

const router = express.Router();
const Company = require("../Models/Schema");

router.post("/", async (req, res) => {
  const { companyname, date, price } = req.body;

  try {
    const company = await Company.findOne({ companyname });
    console.log(
      "🚀 ~ file: companyController.js:51 ~ router.post ~ companyname:",
      companyname
    );
    if (company) {
      company.detail.push({ date, price });
      await company.save();
      res.json(company);
    } else {
      const newCompany = new Company({
        companyname,
        detail: [{ date, price }],
      });
      await newCompany.save();
      res.status(201).json(newCompany);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/find", async (req, res) => {
  let { companyname, date } = req.body;

  let query = {};

  if (date) {
    date = new Date(date);
  }

  const companies = await Company.find(
    { "detail.date": new Date(date) },
    {
      companyname: 1,
      "detail.$": 1,
    }
  );
  console.log(
    "🚀 ~ file: companyController.js:45 ~ router.get ~ companies:",
    companies
  );

  if (companies.length > 0) {
    res.json(companies);
  } else {
    res.status(404).json({ error: "No companies found" });
  }
});

module.exports = router;
