var React = require('react');
var ReactDom = require('react-dom');


//Create Component
var TodoComponent = React.createClass({
    getInitialState:function(){
        return {
            todos: ['washup' , 'eat some cheese' , 'take a nap'],
            age:30
        }
    },
    render:function(){
        //this
        var ager = setTimeout(function(){
            this.setState({age:34});
        }.bind(this),1000);
        return(
            <div id='todo-list'>
                <p>The busiest have the most leisure</p>
                <p>{this.state.age}</p>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
            </div>
        );
    }//render
});


// Put component to HTML page
ReactDom.render(<TodoComponent/>,document.getElementById('todo-wrapper'));