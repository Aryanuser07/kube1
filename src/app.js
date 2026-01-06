const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GitOps test successful 🚀 Updated via Argo CD");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
