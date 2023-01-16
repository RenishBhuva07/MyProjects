import React, { Component } from 'react'
import TodoList from './List'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputData: "",
            todoItems: ['Do Exercise - 6AM', 'Have BreakFast - 7AM']
        }
    }
    changeToDoInput = (event) => {
        this.setState({ inputData: event.target.value })
        console.log(this.state.inputData);
    }
    handleSubmit = (event) => {
        // alert(`${this.state.inputData}`);
        if (this.state.inputData != '') {
            let newItem = [...this.state.todoItems, this.state.inputData]
            this.setState({
                todoItems: newItem,
                inputData: ""
            })
        }
    }
    deleteItem = (index) => {
        // console.log("called", index);
        let original = [...this.state.todoItems];
        // console.log(original);
        let left = original.filter((value, key) => {
            return index != key
        });
        console.log(left);
        this.setState({
            todoItems: left
        });
    }

    render() {
        return (
            <>
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="form_wrapper col-md-10 p-5" style={{ borderRadius: "50px" }}>
                            <form onSubmit={this.handleSubmit}>

                                <div className="mb-3">
                                    <h1>To-Do App</h1>
                                    <input type="text" className="form-control" id="todo" placeholder='Add your To-Do List here.' onChange={this.changeToDoInput} value={this.state.inputData} />
                                </div>

                                <button type="button" className="btn btn-primary w-100" onClick={this.handleSubmit} style={{ borderRadius: "50px", padding: "5px" }}>
                                    Add
                                </button>

                            </form>

                            <div className="mt-4">
                                <h2>My List</h2>
                            <TodoList items={this.state.todoItems} deleteItem={this.deleteItem} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
