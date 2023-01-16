import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import AddUser from './Components/AddUser';
import Footer from './Components/Footer';
import Header from './Components/Header';
import UserList from './Components/UserList';
import LazyLoader from './LazyLoader';


const MainRouter = () => {

    // const UserListLazy = React.lazy(() => { return import("./Components/UserList") })
    const UserListLazy = React.lazy(() => new Promise(resolve => {
        setTimeout(() => {
            // return import("./Components/UserList")
            resolve({ default: () => <UserList /> });
        }, 2000);
    }));

    return (
        <>
            <div className="Router-Wrapper">

                <Header />

                <Routes>
                    <Route path="/" element={<App />} />
                    {/* <Route path="user-list" element={<UserList />} /> */}
                    <Route path="user-list" element={<Suspense fallback={<LazyLoader />}><UserListLazy /></Suspense>} />
                    <Route path="add-user" element={<AddUser />} />
                    <Route path="/edit-user/:id" element={<AddUser />} />
                    {/* <Route path="user-list/*" element={<UserList />} >
                    <Route path='add-user/' element={<AddUser />} />
                    </Route> */}
                </Routes>

                <Footer />

            </div>

            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user-list" element={<UserList />} />
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/edit-user/:id" element={<AddUser />} />
            </Routes> */}

            {/* <div>
                <Header />
                <div className="container router-wrapper">
                    <Routes>
                        <Route path="/" component={UserList}></Route>
                        <Route path="/user" component={UserList}></Route>
                        <Route path="/add-user" component={AddUser} ></Route>
                        <Route path="/edit-user/:id" component={AddUser}></Route>
                    </Routes>
                </div>
                <Footer />
            </div> */}

        </>
    );
};

export default MainRouter;