import React, { Component } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getUser, removeUserSession } from '../../Utils/Common';
class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  constructor(props) {
    super(props);
  }

  // handle click event of logout button
  handleLogoutClick = () => {
    removeUserSession();
    window.location.href = '/login';
  }

  render () {
    return (
      <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="/" ><img src={require("../../assets/images/logo.png")} style={{ width: '50px'}} alt="logo" /></a>
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <i className="mdi mdi-menu"></i>
          </button>
          <ul className="navbar-nav navbar-nav-left header-links">
          <li className="nav-item  nav-profile border-0 pl-4">
          <div className="search-container">
            <form>
              <input style={{ border: 'none' }} className="admin-search" type="text" placeholder="Search.." name="search" />
              <button style={{ border: 'none', backgroundColor: '#fff', color: 'grey'}} type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>
          </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right ml-lg-auto">
          <li className="nav-item  nav-profile border-0 pl-4">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count bg-success">4</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item className="dropdown-item py-3 d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <p className="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
                    {/* <span className="badge badge-pill badge-primary float-right">View all</span> */}
                  </Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item  nav-profile border-0">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                  <span className="profile-text">John Doe !</span>
                  <img className="img-xs rounded-circle" src={require("../../assets/images/faces/face1.jpg")} alt="Profile" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown pb-3">
                
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0 mt-2">
                    <Link to="/my-account">Account</Link>
                  </Dropdown.Item>
                  
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0">
                  <Link to="/manage-users">Manage Users </Link> 
                  </Dropdown.Item>
                  
                    <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" >
                    <a href="#" className="btn-danger" onClick={() => this.handleLogoutClick()}>LOGOUT</a>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
