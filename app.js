const express = require("express");
const app = express();
const port = 3000;

const postcodeRoutes = require("./routes/postcodes");

app.use("/postcode", postcodeRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
