const mongoose = require("mongoose");

const CompSchema = new mongoose.Schema({
  companyname: {
    type: String,
  },
  detail: [
    {
      date: Date,
      price: Number,
    },
  ],
});

const UserCompany = mongoose.model("Company", CompSchema);
module.exports = UserCompany;
