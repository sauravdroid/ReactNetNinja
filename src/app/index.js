var React = require('react');
var ReactDom = require('react-dom');


//Create Component
var TodoComponent = React.createClass({
    render:function(){
        return(
            <div>
            
            </div>
        );
    }
});


// Put component to HTML page
ReactDom.render(<TodoComponent/>,document.getElementById('todo-wrapper'));