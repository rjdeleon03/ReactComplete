'use strict';

console.log("App.js is running!");

// var user = {
//   name: "Connor",
//   age: 26,
//   location: "London"
// };

// // Only expressions can be added inside {}
// // For statements, enclose in function and call the function from inside {}
// var templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : "Anonymous"}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

// function getLocation(location) {
//   if (location) {
//     return location;
//   }
// }

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
