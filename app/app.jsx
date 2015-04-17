children = [
  React.createElement("li", {}, "Hello"),
  React.createElement("li", {}, "World")
];

listElement = React.createElement("ul", {
  customProp: "some value",
  className: "my-list",
  onClick: function (e) {
    console.log(e);
  }
}, children);

React.render(listElement, document.body);
