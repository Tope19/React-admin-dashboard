import React, { Component } from 'react'
import moment from "moment"
import { connect } from 'react-redux'

//import {  } from '../../actions/Property/propertyAction'

export class Request extends Component {
   
  render() {

    //const {id, properties } = this.props;   

    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Property Request</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">Property Requests</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Properties</h4>
                <p className="card-description"> View list of Property requests
                </p>
                <div className="table-responsive">
                  <table className="table table-striped text-center">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> User Type </th>
                        <th> Phone </th>
                        <th> Email </th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                    
                      <tr> 
                         <td> 1 </td>
                        <td> John Doe </td>
                        <td> Individual </td>
                        <td> 1234567890 </td>    
                        <td> john@gmail.com</td>
                        <td> <button type="submit" className="btn btn-primary font-weight-bold ml-0 mt-2 mt-lg-0">View</button>
                             &nbsp;<button type="submit" className="btn btn-success font-weight-bold ml-0 mt-2 mt-lg-0">Edit</button>
                             &nbsp;<button className="btn btn-danger font-weight-bold ml-0 mt-2 mt-lg-0">Delete</button>
                         </td>
                      </tr>
                   
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

       
        </div>
      </div>
    )
  }
}

export default Request;
