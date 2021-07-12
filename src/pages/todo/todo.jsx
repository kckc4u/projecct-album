import React, { Component } from 'react';

import {firestore} from '../../utilities/firebase';

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
        // const items = this.state.items;

        firestore.collection('todo').add({
            title: item.title,
            created_date: Date.now().toString()
        }).then(docRef => {
            // this.setState({
            //     items: [...items, item]
            // })
            console.log("Item added successfully.");
            console.log(docRef);
        }).catch(error => {
            this.setState({
                error
            })
        })
    }

    removeItem = (id) => {
        const items = this.state.items;

        this.setState({
            items: items.filter(item => item.id !== id)
        })
    }

    updateItem = (id, updatedItem) => {

    }

    componentDidMount() {
        firestore.collection('todo').onSnapshot(
            snapshot => {
                const items = [];

                snapshot.forEach(doc => {
                    const {title, description} = doc.data();
                    items.push({
                        id: doc.id,
                        title,
                        description
                    });
                });

                this.setState({
                    items
                });
            }
        )
    }

    render() {
        const {success, error} = this.state;
        return (
            <div className="todo-page">
                <div className="title">
                    <h2>TODO</h2>
                </div>
                <div className="msg">
                    {
                        error ? <div className="error">{error}</div> :
                        success ? <div className="sucess">{success}</div> : null
                    }
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
