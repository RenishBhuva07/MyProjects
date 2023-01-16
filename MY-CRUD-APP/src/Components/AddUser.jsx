import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import UserServices from '../Services/UserServices'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    // const [name, setName] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();
    // console.log("params", id);

    const saveOrUpdateUser = (e) => {
        e.preventDefault();

        const user = { first_name, last_name, email }

        if (id) {
            UserServices.updateUser(id, user).then((response) => {
                console.log("updateUser", response.data)
                alert("User Update");
                navigate('/user-list')
                return response
            }).catch(error => {
                console.log(error)
            })

        } else {
            UserServices.createUser(user).then((response) => {
                console.log("createUser", response.data)
                alert("User Added");
                navigate('/user-list');

            }).catch(error => {
                console.log(error)
            })
        }

    }
    // useEffect(() => {
    //     fetch("https://reqres.in/api/users/" + id).then((response) => response.json()).then((result) => {
    //         console.log("result", result);
    //         setFirstName(result.data.first_name)
    //         setLastName(result.data.last_name)
    //         setEmail(result.data.email)
    //         return result
    //     })
    // }, [])
    // useEffect(() => {
    //     UserServices.getUserById(id).then((response) => {
    //         console.log("response", response.data.data);
    //         setFirstName(response.data.data.first_name)
    //         setLastName(response.data.data.last_name)
    //         setEmail(response.data.data.email)
    //         return response
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }, [])
    let getdatafromapiforupdate = async () => {
        // console.log(id);
        if (id != undefined) {
            // console.log("inside if");
            const response = await UserServices.getUserById(id).then((res) => {
                console.log("res.data.data :- ", res.data.data);
                setFirstName(res.data.data.first_name)
                setLastName(res.data.data.last_name)
                setEmail(res.data.data.email)

            });
            // console.log(response);
            // await UserServices.getUserById(id)
        } else {
            // console.log("inside else");
        }
    }

    useEffect(() => {
        getdatafromapiforupdate()
    }, []);

    // const title = () => {

    //     if (id) {
    //         return <h2 className="text-center">Update User</h2>
    //     } else {
    //         return <h2 className="text-center">Add User</h2>
    //     }
    // }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card cardd col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                <h1 className='cream text-center'>
                                    {id ? "Update User" : "Add User"}
                                </h1>
                                <div className="form-group mb-2">
                                    <label className="form-label"> First Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={first_name}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Last Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        className="form-control"
                                        value={last_name}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                {/* <div className="form-group mb-2">
                                    <label className="form-label">Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        name="Name"
                                        className="form-control border"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div> */}

                                <div className="form-group mb-2">
                                    <label className="form-label">Email Id :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email Id"
                                        name="email"
                                        className="form-control border"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="button-wrapper text-center">
                                    <button className="btn bttn text-light" onClick={(e) => saveOrUpdateUser(e)} >
                                        {id ? "Update" : "Add"}
                                    </button>
                                    <Link to="/user-list">
                                        <button className="btn btn-danger ms-2">
                                            Cancel
                                        </button>
                                    </Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddUser;