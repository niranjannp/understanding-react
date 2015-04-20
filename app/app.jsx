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

    return (
      <ul customProp="some value" className="my-list" onClick={(e) => this.handleClick(e)}>
        <li key={1}>Hello there!</li>
        <li key={2}>{name}</li>
      </ul>
    )
  }
}

component = React.render(<List/>, document.body);
