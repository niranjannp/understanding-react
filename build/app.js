var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){List[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;List.prototype=Object.create(____SuperProtoOf____Class0);List.prototype.constructor=List;List.__superConstructor__=____Class0;
  function List(props) {"use strict";
    this.state = {name: 'World'};
  }

  Object.defineProperty(List.prototype,"handleClick",{writable:true,configurable:true,value:function(e) {"use strict";
    console.log(e);
  }});

  Object.defineProperty(List.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
    console.log("componentDidMount");
  }});

  Object.defineProperty(List.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
    console.log("Rendering React Component");
    var name = this.state.name;

    return (
      React.createElement("ul", {customProp: "some value", className: "my-list", onClick: function(e)  {return this.handleClick(e);}.bind(this)}, 
        React.createElement("li", {key: 1}, "Hello there!"), 
        React.createElement("li", {key: 2}, name)
      )
    )
  }});


component = React.render(React.createElement(List, null), document.body);
