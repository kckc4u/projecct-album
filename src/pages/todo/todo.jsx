import React, { Component } from 'react'
import AddTodoItem from '../../components/addTodoItem/addTodoItem.component';
import ListTodoItem from '../../components/listTodoItems/listTodoItem.component';

import './todo.style.scss';

export default class Todo extends Component {
    state = {
        items: [{
            id: 1,
            title: "Get Milk",
            description: '',
            repeat: '',
            dueDateTime: ''
        },
        {
            id: 2,
            title: "Get Vegitables",
            description: '',
            repeat: '',
            dueDateTime: ''
        },
        {
            id: 3,
            title: "Learn Javascript",
            description: '',
            repeat: '',
            dueDateTime: ''
        },
    ],
    success: null,
    error: null
    }

    addItem = async (item) => {
        const items = this.state.items;
        console.log(item);

        this.setState({
            items: [...items, item]
        })
    }

    removeItem = (id) => {

    }

    updateItem = (id, updatedItem) => {

    }

    render() {
        return (
            <div className="todo-page">
                <div className="title">
                    <h2>TODO</h2>
                </div>
                <div className="prose">
                    <div className="box">
                        <AddTodoItem addItem={this.addItem}/>
                    </div>
                    <div className="box">
                        <ListTodoItem
                            items={this.state.items}
                            updateItem={this.updateItem}
                            removeItem={this.removeItem}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
