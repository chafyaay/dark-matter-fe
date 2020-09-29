import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addtodoAction, getTodoListAction, removeTodoListAction, updateTodoAction } from '../actions/addTodoAction';

class Todo extends Component {
    state = {

        todo: "",
        id: 0,
        todoList: [],
        allowUpdate: false

    };
    constructor() {
        super();
        this.state = {
            todo: "",
            id: 0,
            todoList: [],
            allowUpdate: false
        };
    }

    componentDidMount() {
        this.getTodoList();
    }

    onTextChange = event => {
        this.setState({ todo: event.target.value });
    };

    // get all todos
    getTodoList() {
        this.props.getTodoListAction().then(res => {
            this.setState({
                todoList: res
            });
            this.state.todoList.map(item => {
            });
        });
    }

    // Addtodos

    addTodohandler = event => {

        let id = this.state.todoList.length;
        const todo = this.state.todo;
        this.props.addtodoAction(todo, id, this.props.token, this.props.kpi);
        this.getTodoList();
        this.setState({ todo: "" });
    };

    //remove todo 
    removeTodo(id) {
        this.props.removeTodoListAction(id, this.props.token, this.props.kpi);
        this.getTodoList();
    }

    //updateTodo todo 
    selectTodo(id) {
        this.setState(
            {
                todo: this.state.todoList[id].todo,
                id: id,
                allowUpdate: true
            });

    }

    updatehandler = event => {
        this.props.updateTodoAction(this.state.id, this.state.todo, this.props.token, this.props.kpi);
        this.getTodoList();
        this.setState(
            {
                allowUpdate: false
            });
    };

    render() {
        return (<div className="todo">
            <input
                value={this.state.todo}
                type="text"
                onChange={this.onTextChange}
            />

            <button className="addTodo" onClick={this.addTodohandler}>add todo</button>
            <h1>TODO LIST</h1>
            <ul>
                {this.state.todoList.map((item, id) =>
                    <li key={id}>
                        {
                            <span onClick={this.selectTodo
                                .bind(this, id, this.props.token, this.props.kpi)}>
                                <span>{id}- </span>
                                {item.todo}
                            </span>
                        }    <button className="removeTodo" onClick={this.removeTodo
                            .bind(this, id, this.props.token, this.props.kpi)}>x</button>

                    </li>)
                }
            </ul>
            <button disabled={!this.state.allowUpdate} onClick={this.updatehandler.bind(this)}
                className={this.state.allowUpdate ? 'update enabled' : ' update'}>update</button>

        </div>);
    }
}



export default connect(null, { addtodoAction, getTodoListAction, removeTodoListAction, updateTodoAction })(Todo);