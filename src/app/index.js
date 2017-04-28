var React = require('react');
var ReactDom = require('react-dom');


//Create Component
var TodoComponent = React.createClass({
    getInitialState:function(){
        return {
            todos: ['washup' , 'eat some cheese' , 'take a nap' , 'buy flowers']
        }
    },
    render:function(){
        var todos = this.state.todos;
        todos = todos.map(function(item,index){
            return(
                <li>{item} !</li>
            );
        });
        return(
            <div id='todo-list'>
                <p>The busiest have the most leisure</p>
                <p>{this.state.age}</p>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }//render
});


// Put component to HTML page
ReactDom.render(<TodoComponent/>,document.getElementById('todo-wrapper'));