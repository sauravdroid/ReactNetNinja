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
            </div>
        );
    },//render

    //Custom Functions
    onDelete:function(item){
        var updatedTodos = this.state.todos.filter(function(val,index){
            return item !== val;
        });
        this.setState({todos:updatedTodos});
    }
});

//Create TodoItem component
var TodoItem = React.createClass({
    render:function(){
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item} !!</span>
                    <span className="item-delete" onClick={this.handleDelete}>X</span>
                </div>
            </li>
        );
    }, 
    //Custom Functions
    handleDelete:function(){
        this.props.onDelete(this.props.item);
    }
});

// Put component to HTML page
ReactDom.render(<TodoComponent/>,document.getElementById('todo-wrapper'));