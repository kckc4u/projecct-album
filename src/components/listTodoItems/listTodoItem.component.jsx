import React, { Component } from 'react'

import './listTodoItem.styles.scss';

export default class ListTodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const {items} = this.props;

        return (
            <div className="todo-list-container">
                <div className="todo-filter">Filter</div>
                <div className="todo-list">
                    {
                        items.map(({id, ...item}) => (
                            <div key={id}>{item.title}</div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
