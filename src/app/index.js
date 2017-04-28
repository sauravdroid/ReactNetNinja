var React = require('react');
var ReactDom = require('react-dom');


//Create Component
var TodoComponent = React.createClass({
    render:function(){
        return(
            <div>
            <h1>Name: {this.props.cheese.name}</h1>
            <h3>Smell Factor: {this.props.cheese.smellFactor}</h3>
            <h3>{this.props.cheese.price}</h3>
            </div>
        );
    }
});

var myCheese = {
    name:"Camembert",
    smellFactor:"Extreme Pong",
    price:'350'
};
// Put component to HTML page
ReactDom.render(<TodoComponent msg ="I love cheese" cheese={myCheese}/>,document.getElementById('todo-wrapper'));