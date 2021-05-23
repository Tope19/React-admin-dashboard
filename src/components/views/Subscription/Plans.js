import React, { Component } from 'react'
import moment from "moment"
import { connect } from 'react-redux'
import { getPlans } from '../../actions/Subscription/planAction'


export class Plans extends Component {

  componentDidMount(){
    this.props.getPlans()
  }
 
  render() {
    const { plans }  = this.props;
    console.log(plans)
    return (
      <div>
        
        <div className="page-header">
          <h3 className="page-title"> Subscription Plans</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb"> 
              <li className="breadcrumb-item"><a href="/add-new-plan">Add New Plan</a></li>
              <li className="breadcrumb-item active" aria-current="page">Plans</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Plans</h4>
                <p className="card-description"> View list of subscription plans
                </p>
                <div className="table-responsive">
                  <table className="table table-striped text-center">
                    <thead>
                      <tr>
                        <th> Name </th>
                        <th> Price </th>
                        <th> Currency </th>
                        <th> Duration </th>
                        <th> Max Listing </th>
                        <th> Premium Listing </th>
                        <th> Featured Ad </th>
                        <th> Date Created </th>
                        <th> Date Updated </th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                  {plans.map(plan => (
                      <tr key={plan.id}> 
                        <td> {plan.name} </td>
                        <td> {plan.price} </td>
                        <td> NGN </td>
                        <td> {plan.duration} </td>
                        <td> {plan.maximum_listings} </td>
                        <td> {plan.maximum_premium_listings} </td>
                        <td> {plan.max_featured_ad_listings} </td>
                        <td> {moment(plan.createdAt).format('MMM-DD-YYYY')} </td>
                        <td> {moment(plan.updatedAt).format('MMM-DD-YYYY')} </td>
                        <td>
                             &nbsp;<button type="submit" className="btn btn-success font-weight-bold ml-0 mt-2 mt-lg-0">Edit</button>
                             &nbsp;<button type="submit" className="btn btn-danger font-weight-bold ml-0 mt-2 mt-lg-0">Delete</button>
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
      plans : state.plans.plans,
    }
}

export default connect(mapStateToProps, {getPlans})(Plans);
