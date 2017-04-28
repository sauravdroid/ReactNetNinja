var React = require('react');
var ReactDom = require('react-dom');
require('./css/index.css');
//Module requires
var TodoItem = require('./todoitem');
var AddItem = require('./addItem');


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
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            );
        }.bind(this));
        return(
            <div id='todo-list'>
                <p>The busiest have the most leisure</p>
                <p>{this.state.age}</p>
                <ul>
                    {todos}
                </ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    },//render

    //Custom Functions
    onDelete:function(item){
        var updatedTodos = this.state.todos.filter(function(val,index){
            return item !== val;
        });
        this.setState({todos:updatedTodos});
    },
    onAdd: function(item){
        var todos = this.state.todos;
        todos.push(item);
        this.setState({todos:todos});

    }
});

// Put component to HTML page
ReactDom.render(<TodoComponent/>,document.getElementById('todo-wrapper'));