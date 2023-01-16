import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <ul className="list-group my-3">
                {
                    this.props.items.map((value, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className="d-flex border_radius">
                                    <li className="list-group-item col-11 border_radius">{value}</li>
                                    <button className="btn btn-danger my-1 ms-2 col-1" onClick={() => { this.props.deleteItem(index) }}>X</button>
                                </div>
                                {/* <li className="list-group-item">{value}
                                    <button className="btn btn-danger w-2 my-1 btn-sm mx-atuo" onClick={() => { this.props.deleteItem(index) }}>X</button>
                                </li> */}
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        )
    }
}
