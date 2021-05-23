import React, { Component } from 'react'
import moment from "moment"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getFeatures, deleteFeature } from '../../actions/Property/featureAction'

export class Feature extends Component {

  componentDidMount(){
    this.props.getFeatures()
  }
  onDeleteClick = id => { 
    this.props.deleteFeature(id)
    
  }
  render() {
    const { id, features } = this.props;
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Properties</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/add-property-feature">Add New Feature</a></li>
              <li className="breadcrumb-item active" aria-current="page">Property Features</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Properties</h4>
                <p className="card-description"> View list onf features
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
                    {features.map(feature => (
                      <tr key={feature.name}>
                        <td> {feature.id} </td>
                        <td> {feature.name} </td>
                        <td> {moment(feature.created_at).format('MMM-DD-YYYY')} </td>
                        <td> {moment(feature.updated_at).format('MMM-DD-YYYY')} </td>
                        <td>  
                             &nbsp;<Link to={`property-feature/edit/${feature.id}`}><button type="submit" className="btn btn-success font-weight-bold ml-0 mt-2 mt-lg-0">Edit</button></Link>
                             &nbsp;<button type="submit" onClick={this.onDeleteClick.bind(this, feature.id)} className="btn btn-danger font-weight-bold ml-0 mt-2 mt-lg-0">Delete</button>
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
    features : state.features.features
  }
}

export default connect(mapStateToProps, {getFeatures, deleteFeature})(Feature);
