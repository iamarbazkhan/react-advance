import express from "express" ;
// import {config}  from "./config" ;

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { data: 95 });
});

app.listen(8080, () => {
  console.info(`Running on port 8080 ...`);
});
console.log("error")
