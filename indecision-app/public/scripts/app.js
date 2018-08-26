"use strict";

console.log("App.js is running!");

var app = {
  title: "Some title",
  subtitle: "Some subtitle"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
