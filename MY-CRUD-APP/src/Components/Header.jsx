import { Link } from "react-router-dom";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { useEffect, useState } from "react";

const Header = () => {

    const [showBasic, setShowBasic] = useState(false);
    const [theme, setTheme] = useState('Dark-Theme')

    const toggleTheme = () => {
        // console.log('Clicked')
        theme === 'Light-Theme' ? setTheme('Dark-Theme') : setTheme('Light-Theme')
        // if (theme === 'Light-Theme') {
        //     setTheme('Dark-Theme')
        // } else {
        //     setTheme('Light-Theme')
        // }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])


    return (
        <>
            <MDBNavbar className="fw-bold" expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    {/* <MDBNavbarBrand className="fs-2" href='#'>Theme-Api</MDBNavbarBrand> */}
                    <Link to="/" className="navbar-brand fs-1 brand-font">Theme - Api</Link>

                    <MDBNavbarToggler className="text-dark"
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                {/* <MDBNavbarLink aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink> */}
                                <Link to="/" className="nav-link">Home</Link>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <Link to="user-list" className="nav-link">Users List</Link>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <Link to="add-user" className="nav-link">Add Users</Link>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                {/* <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                        Users
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <Link to="user-list" className="dropdown-item rounded-5">User List</Link>
                                        <Link to="add-user" className="dropdown-item">Add User</Link>
                                        <Link to="add-user" className="dropdown-item rounded-5">Add User</Link>
                                    </MDBDropdownMenu>
                                </MDBDropdown> */}
                            </MDBNavbarItem>

                            <div className="wrapper position-absolute">
                                <input type="checkbox" id="hide-checkbox" />
                                <label htmlFor="hide-checkbox" onClick={() => toggleTheme()} className="toggle align-middle position-relative d-inline-block overflow-hidden">
                                    <span className="toggle-button position-absolute d-inline-block overflow-hidden">
                                        <span className="crater position-absolute d-inline-block crater-1"></span>
                                        <span className="crater position-absolute d-inline-block crater-2"></span>
                                        <span className="crater position-absolute d-inline-block crater-3"></span>
                                        <span className="crater position-absolute d-inline-block crater-4"></span>
                                        <span className="crater position-absolute d-inline-block crater-5"></span>
                                        <span className="crater position-absolute d-inline-block crater-6"></span>
                                        <span className="crater position-absolute d-inline-block crater-7"></span>
                                    </span>
                                    <span className="star position-absolute d-inline-block star-1"></span>
                                    <span className="star position-absolute d-inline-block star-2"></span>
                                    <span className="star position-absolute d-inline-block star-3"></span>
                                    <span className="star position-absolute d-inline-block star-4"></span>
                                    <span className="star position-absolute d-inline-block star-5"></span>
                                    <span className="star position-absolute d-inline-block star-6"></span>
                                    <span className="star position-absolute d-inline-block star-7"></span>
                                    <span className="star position-absolute d-inline-block star-8"></span>
                                </label>
                            </div>

                        </MDBNavbarNav>

                        <form className='d-flex input-group w-auto'>
                            <input type='search' className='fw-bold form-control' placeholder='Type query' aria-label='Search' />
                            <MDBBtn className='fw-bold bttn' color='primary'>Search</MDBBtn>
                        </form>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    )
}

export default Header;
