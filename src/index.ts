import express from "express";

const app = express();

const page = __dirname + "/public";
app.use(express.static(page));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
