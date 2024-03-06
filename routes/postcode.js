const express = require("express");
const router = express.Router();
const {
  allPostcodes,
  getPostcode,
  findPostcode,
  allByProvince,
  allByCounty,
} = require("../controllers/postcodeController");

router.get("/all", allPostcodes);
router.get("/find", findPostcode);
router.get("/allByProvince", allByProvince);
router.get("/allByCounty", allByCounty);
router.get("/:postcode", getPostcode);

module.exports = router;
