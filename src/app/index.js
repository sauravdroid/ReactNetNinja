var React = require('react');
var ReactDom = require('react-dom');




//Create TodoComponent
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
                <TodoItem item={item} key={index}/>
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

//Create TodoItem component
var TodoItem = React.createClass({
    render:function(){
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item} !!</span>
                </div>
            </li>
        );
    }
});

// Put component to HTML page
ReactDom.render(<TodoComponent/>,document.getElementById('todo-wrapper'));