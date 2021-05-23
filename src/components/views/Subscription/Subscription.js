import React, { Component } from 'react'
import moment from "moment"
import { connect } from 'react-redux'
import { getSubs } from '../../actions/Subscription/subAction'


export class Subscription extends Component {

  componentDidMount(){
    this.props.getSubs()
  }
 
  render() {
    const { data }  = this.props;
    console.log(data)
    return (
      <div>
        
        <div className="page-header">
          <h3 className="page-title"> Subscriptions</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/add-plan">Add New Plan</a></li>
              <li className="breadcrumb-item active" aria-current="page">Subscriptions</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Subscriptions</h4>
                <p className="card-description"> View list of subscribed users
                </p>
                <div className="table-responsive">
                  <table className="table table-striped text-center">
                    <thead>
                      <tr>
                        <th> Name </th>
                        <th> Plan </th>
                        <th> Amount </th>
                        <th> Status </th>
                        <th> Date Created </th>
                        <th> Date Updated </th>
                      
                      </tr>
                    </thead>
                    <tbody>
                  {data.map(sub => (
                      <tr key={sub.id}> 
                        <td> {sub.first_name} </td>
                        <td> {sub.plan}  </td>
                        <td> {sub.amount}  </td>
                        <td> {sub.status} </td>
                       
                        <td> {moment(sub.createdAt).format('MMM-DD-YYYY')} </td>
                        <td> {moment(sub.updatedAt).format('MMM-DD-YYYY')} </td>
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
      data : state.subs.data,
    }
}

export default connect(mapStateToProps, { getSubs })(Subscription);
