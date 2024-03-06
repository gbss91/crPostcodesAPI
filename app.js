const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route Middleware
const postcodeRoutes = require("./routes/postcode");
app.use("/postcode", postcodeRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
