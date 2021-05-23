import React, { Component } from 'react'
import moment from "moment"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBlogCategories, deleteBlogCategory } from '../../actions/Blog/categoryAction'

// React Notification
import { NotificationManager } from 'react-notifications';

export class blogCategory extends Component {

  componentDidMount(){
    this.props.getBlogCategories()
  }

  onDeleteClick = id => { 
    this.props.deleteBlogCategory(id) 
    
  }

  render() {
    const { id, categories }  = this.props;
    //console.log(categories);
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Blog Categories</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/add-new-blog-category">Add New Category</a></li>
              <li className="breadcrumb-item active" aria-current="page">Blog Categories</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Categories</h4>
                <p className="card-description"> View list of categories
                </p>
                <div className="table-responsive">
                  <table className="table table-striped text-center">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Url </th>
                        <th> Date Updated </th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                  
                    {categories.map(category => (
                        <tr key={category.id}> 
                        <td> {category.id} </td>
                        <td> {category.name} </td>
                        <td> /{category.url} </td>
                        <td> {moment(category.updated_at).format('MMM-DD-YYYY')} </td>
                        <td>
                             &nbsp;<Link to={`blog-category/edit/${category.id}`}><button className="btn btn-success font-weight-bold ml-0 mt-2 mt-lg-0">Edit</button></Link>
                             &nbsp;<button onClick={this.onDeleteClick.bind(this, category.id)} className="btn btn-danger font-weight-bold ml-0 mt-2 mt-lg-0">Delete</button>
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
    categories : state.categories.categories
  }
}

export default connect(mapStateToProps, { getBlogCategories, deleteBlogCategory })(blogCategory);
 
 