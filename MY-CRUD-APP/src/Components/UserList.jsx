import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserServices from '../Services/UserServices'

const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = () => {
        UserServices.getAllUsers().then((response) => {
            setUsers(response.data.data)
            // console.log("getAllUsers", response.data.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteUser = (userId) => {
        // console.log(userId);
        UserServices.deleteUser(userId).then((response) => {
            console.log("DeletUser", response);
            alert("DeletUser", response);
            getAllUsers();
            return response

        }).catch(error => {
            console.log(error);
        })

    }


    return (
        <div className="container cardd mt-5">

            <h2 className="text-center fs-1 fw-bold mt-4 ltr-spcng-3 Head">User - List</h2>

            <Link to="/add-user" className="text-end" >
                <button className="bttn btn mb-2 text-light ">
                    Add User{" "}
                </button>
            </Link>

            <table className="table fs-5 fw-bold text-center table-bordered">

                <thead className='brdr border-end-0 border-start-0'>

                    <th className='fs-4 fw-bold'>Id</th>
                    <th className='fs-4 fw-bold'>Avatar</th>
                    <th className='fs-4 fw-bold'>First Name</th>
                    {/* <th className='fs-4 fw-bold'>Last Name</th> */}
                    <th className='fs-4 fw-bold'>Email Id</th>
                    <th className='fs-4 fw-bold'>Actions</th>

                </thead>
                <tbody>
                    {
                        users.map((user) => (

                            <tr className='align-middle' key={user.id}>

                                <td>{user.id}</td>
                                <td><img src={user.avatar} alt="" /></td>
                                <td>{user.first_name.concat(" ", user.last_name)}</td>
                                {/* <td>{user.last_name}</td> */}
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/edit-user/${user.id}`} >
                                        <button className='btn text-light bttn'>
                                            Update
                                        </button>
                                    </Link>
                                    <button className="btn btn-danger ms-2" onClick={() => deleteUser(user.id)}>
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserList;
