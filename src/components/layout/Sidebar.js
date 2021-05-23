import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});

    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/properties', state: 'propertyUiMenuOpen'},
      {path:'/subscription', state: 'subscriptionUiMenuOpen'},
      {path:'/blog', state: 'blogUiMenuOpen'},
      {path:'/cms', state: 'cmsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html"><img className="img-xs rounded-circle" src={require("../../assets/images/logo.png")} alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini" href="/"><img className="img-xs rounded-circle" src={require("../../assets/images/logo.png" )} alt="logo" /></a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile not-navigation-link"> 
            <div className="nav-link">
              <Dropdown>
                <Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="profile-image">
                      <img src={ require("../../assets/images/faces/face1.jpg")} alt="profile" />
                    </div>
                    <div className="text-left ml-3">
                      <p className="profile-name">John Doe</p>
                      <small className="designation text-muted text-small">Administrator</small>
                     
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Manage Accounts
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-itManageem preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                  Change Password 
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Check Inbox
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link style={{ textDecoration: "none"}} to="/add-new-property"><button className="btn pbg-btn btn-block" style={{ backgroundColor: "#522802", color: "#fff" }}>Add New Property <i className="mdi mdi-plus"></i></button></Link>
            </div>
          </li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/properties') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.propertyUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('propertyUiMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-home menu-icon"></i>
              <span className="menu-title">Property Listings</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.propertyUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
              <li className=" nav-item"> <Link className={ this.isPathActive('/property-requests') ? 'nav-link active' : 'nav-link' } to="/property-requests">Property Requests</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/properties') ? 'nav-link active' : 'nav-link' } to="/properties">Properties</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/property-categories') ? 'nav-link active' : 'nav-link' } to="/property-categories">Property Category</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/property-features') ? 'nav-link active' : 'nav-link' } to="/property-features">Property Feature</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/property-types') ? 'nav-link active' : 'nav-link' } to="/property-types">Property Type</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/subsciption') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.subscriptionUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('subscriptionUiMenuOpen') } data-toggle="collapse">
              <i className="fa fa-usd menu-icon"></i>
              <span className="menu-title">Subscription Plans</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.subscriptionUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="Basic form elements nav-item"> <Link className={ this.isPathActive('/properties') ? 'nav-link active' : 'nav-link' } to="/subs">Subscriptions</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/plans') ? 'nav-link active' : 'nav-link' } to="/plans">Plans</Link></li>
              </ul>
            </Collapse>
          </li>

          <li className={ this.isPathActive('/blog') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.blogUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('blogUiMenuOpen') } data-toggle="collapse">
              <i className="fa fa-book menu-icon"></i>
              <span className="menu-title">Blog</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.blogUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="Basic form elements nav-item"> <Link className={ this.isPathActive('/blog') ? 'nav-link active' : 'nav-link' } to="/blog-articles">Articles</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/blog-categories') ? 'nav-link active' : 'nav-link' } to="/blog-categories">Blog Category</Link></li>
              </ul>
            </Collapse>
          </li>

          <li className={ this.isPathActive('/cms') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.cmsUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('cmsUiMenuOpen') } data-toggle="collapse">
              <i className="fa fa-book menu-icon"></i>
              <span className="menu-title">Cms</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.cmsUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="Basic form elements nav-item"> <Link className={ this.isPathActive('/cms') ? 'nav-link active' : 'nav-link' } to="/">About</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/cms-contact') ? 'nav-link active' : 'nav-link' } to="/cms-contact">Contact</Link></li>
              </ul>
            </Collapse>
          </li>
         
          <li className={ this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">Manage</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.userPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/my-account') ? 'nav-link active' : 'nav-link' } to="/my-account">My Account</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/manage-users') ? 'nav-link active' : 'nav-link' } to="/manage-users">Users</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/settings') ? 'nav-link active' : 'nav-link' } to="/settings">Settings</Link></li>
              </ul>
            </Collapse>
          </li>
         
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);