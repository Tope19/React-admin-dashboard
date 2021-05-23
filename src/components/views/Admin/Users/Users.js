import React, { Component } from 'react';
import { ProgressBar, Dropdown } from 'react-bootstrap';
import moment from 'moment'
import { getUsers } from '../../../actions/User/userAction'
import { connect } from 'react-redux'

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

export class Users extends Component {
  componentDidMount(){
    this.props.getUsers()
  }
  render () {
    const { users } = this.props;
    return (
      <div>
           <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-4">Manage Users</h5>
                {users.map(user => (

                
                <div className="fluid-container" key={user.id}>
                  <div className="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                    <div className="col-md-1"> 
                      <img className="img-sm rounded-circle mb-4 mb-md-0 d-block mx-md-auto" src={require("../../../../assets/images/faces/face1.jpg")} alt="profile" /> </div>
                    <div className="ticket-details col-md-9">
                      <div className="d-lg-flex">
                <p className="text-dark font-weight-semibold mr-2 mb-0 no-wrap">Name: {user.name}</p>
                        <p className="text-primary mr-1 mb-0">[{user.userType}]</p>
                       
                      </div>
                      <p className="mb-0 ellipsis">Plan : Premium</p>
                      <p className="text-gray ellipsis mb-2">Email: {user.email} </p>
                      <div className="row text-gray d-md-flex d-none">
                        <div className="col-4 d-flex">
                          <small className="mb-0 mr-2 text-muted text-muted">Registered :</small>
                          <small className="Last-responded mr-2 mb-0 text-muted text-muted">{moment(user.created_at).format('MMM-DD-YYYY')}</small>
                        </div>
                        <div className="col-4 d-flex">
                          <small className="mb-0 mr-2 text-muted text-muted">Status :</small>
                          <small className="Last-responded mr-2 mb-0 text-muted text-muted">{user.isActivated}</small>
                        </div>
                      </div>
                    </div>
                    <div className="ticket-actions col-md-2" >
                      <div className="btn-group dropdown" >
                        <Dropdown>
                          <Dropdown.Toggle className="btn btn-success btn-sm">
                            Manage
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="navbar-dropdown preview-list">
                            
                            <Dropdown.Item>
                              Toggle Active
                            </Dropdown.Item>
                            {/* <Dropdown.Item>
                              Subscribe 
                            </Dropdown.Item> */}
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                            </div>
                            ))}
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps, { getUsers })(Users);