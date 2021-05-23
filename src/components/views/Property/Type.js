import React, { Component } from 'react'
import moment from "moment"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTypes, deleteType } from '../../actions/Property/typeAction'

export class Type extends Component {

  componentDidMount(){
    this.props.getTypes()
  }
  onDeleteClick = id => { 
    this.props.deleteType(id)
    
  }
  render() {
    const { types } = this.props;
    
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Properties</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/add-property-type">Add New Type</a></li>
              <li className="breadcrumb-item active" aria-current="page">Property Types</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Properties</h4>
                <p className="card-description"> View list of types
                </p>
                <div className="table-responsive">
                  <table className="table table-striped text-center">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Date Created </th>
                        <th> Date Updated </th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                    {types.map(type => (
                      <tr key={type.id}> 
                        <td> {type.id} </td>
                        <td> {type.name} </td>
                        <td> {moment(type.created_at).format('MMM-DD-YYYY')} </td>
                        <td> {moment(type.updated_at).format('MMM-DD-YYYY')} </td>
                        <td> 
                             &nbsp;<Link to={`property-type/edit/${type.id}`}><button type="submit" className="btn btn-success font-weight-bold ml-0 mt-2 mt-lg-0">Edit</button></Link>
                             &nbsp;<button onClick={this.onDeleteClick.bind(this, type.id)} className="btn btn-danger font-weight-bold ml-0 mt-2 mt-lg-0">Delete</button>
                         </td>
                      </tr>
                      ))}
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

const mapStateToProps = (state) => {
  return{
    types : state.types.types
  }
}

export default connect (mapStateToProps, { getTypes, deleteType })(Type); 
