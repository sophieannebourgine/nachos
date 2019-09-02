const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname + "/views/partials"));

app.get("/", (req, res) => res.redirect("/homepage"));

//homepage route
app.get("/homepage", (request, response) => {
  const data = {
    title:"Homepage"
    // imgLinks: [
    //   {
    //     label: "go",
    //     src: "./nachos.png",
    //     href:"/cat-page",
    //     alt: "foo",

    //   ]
  };
  response.render("homepage", data);
});

// cat route:
app.get("/cat-page", (request, response) => {
    // console.log(__dirname + "cat");
    const data = {
      title:"Cat"
    };
    response.render("cat-page");
});

// photo gallery route:
app.get("/photo", (request, response) => {
  const data = {
    title:"Photo gallery"
  
  
  };
    response.render("photo-gallery");
});

const listener = app.listen(3000, () => {
  console.log(`server is up @ http://localhost:${listener.address().port}`);
});

