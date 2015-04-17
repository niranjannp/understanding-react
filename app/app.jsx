class List extends React.Component {
  constructor(props) {
    this.state = {name: 'World'};
  }

  handleClick(e) {
    console.log(e);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("Rendering React Component");

    var name = this.state.name;

    var children = [
      React.createElement("li", {}, "Hello"),
      React.createElement("li", {}, name)
    ];

    var listElement = React.createElement("ul", {
      customProp: "some value",
      className: "my-list",
      onClick: (e) => this.handleClick(e)
    }, children);

    return listElement;
  }
}

var listElement = React.createElement(List);
component = React.render(listElement, document.body);
