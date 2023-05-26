const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const chefs = require("./data/chefs-data.json");

app.get("/", (req, res) => {
  res.send("This is chef's data sever!");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const selectedChef = chefs.find((chef) => parseInt(chef._id) === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
