const pgPromise = require("pg-promise");
const db = require("../config/database");

// List all postcodes
const allPostcodes = (req, res) => {
  db.many(`SELECT * FROM view_postcode_information`)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("ERROR:", error);
      if (error instanceof pgPromise.errors.QueryResultError) {
        res.status(400).send("Invalid request");
      } else {
        res.status(500).send("Internal Server Error. Please try later.");
      }
    });
};

// Find a poscode with province, country and district
const findPostcode = (req, res) => {
  const { province, county, district } = req.query;
  db.oneOrNone(
    `SELECT * FROM view_postcode_information 
    WHERE province_name = $1 AND county_name = $2 AND district_name = $3`,
    [province, county, district]
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("ERROR:", error);
      if (error instanceof pgPromise.errors.QueryResultError) {
        res.status(400).send("Invalid request");
      } else {
        res.status(500).send("Internal Server Error. Please try later.");
      }
    });
};

// List all postcodes by province
const allByProvince = (req, res) => {
  const province = req.query.province;
  db.many(
    `SELECT * FROM view_postcode_information 
    WHERE province_name = $1`,
    [province]
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("ERROR:", error);
      if (error instanceof pgPromise.errors.QueryResultError) {
        res.status(400).send("Invalid request");
      } else {
        res.status(500).send("Internal Server Error. Please try later.");
      }
    });
};

// List all postcodes by county
const allByCounty = (req, res) => {
  const { province, county } = req.query;
  db.many(
    `SELECT * FROM view_postcode_information
    WHERE province_name = $1 AND county_name = $2`,
    [province, county]
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("ERROR:", error);
      if (error instanceof pgPromise.errors.QueryResultError) {
        res.status(400).send("Invalid request");
      } else {
        res.status(500).send("Internal Server Error. Please try later.");
      }
    });
};

// Get informaton for a specific postcode
const getPostcode = (req, res) => {
  const postcode = req.params["postcode"];
  db.oneOrNone(
    `SELECT * FROM view_postcode_information 
    WHERE postcode = $1`,
    [postcode]
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("ERROR:", error);
      if (error instanceof pgPromise.errors.QueryResultError) {
        res.status(400).send("Invalid request");
      } else {
        res.status(500).send("Internal Server Error. Please try later.");
      }
    });
};

module.exports = {
  allPostcodes,
  getPostcode,
  findPostcode,
  allByProvince,
  allByCounty,
};
