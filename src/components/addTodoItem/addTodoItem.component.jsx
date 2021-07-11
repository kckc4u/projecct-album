import React, { Component } from 'react';
import {Button, TextField} from '@material-ui/core';

import './addTodoItem.styles.scss';

export default class AddTodoItem extends Component {

    count = 12;

    constructor (props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {addItem} = this.props;

        const {title} = this.state;

        this.count++;

        const item = {
            title,
            id: this.count
        }

        addItem(item);

        this.setState({
            title: ''
        });
    }

    handleReset = (e) => {
        this.setState({
            title: ''
        })
    }

    render() {
        const {title} = this.state;
        const {success, error} = this.props;

        return (
            <div className="todo-frm-container">

                <form className="todo-frm">
                    <TextField
                        id="todo-item"
                        label="Todo Item"
                        variant="outlined"
                        required
                        fullWidth
                        name="title"
                        value={title}
                        onChange={this.handleChange}
                        autoFocus
                    />
                    <div className="todo-frm__btns">
                        <Button
                        variant="text"
                        size= "large"
                        color="default"
                        onClick={this.handleReset}
                        >Cancel
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={this.handleSubmit}
                            >Add
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}
