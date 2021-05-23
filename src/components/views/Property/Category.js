import React, { Component } from 'react'
import moment from "moment"
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getCategories, deleteCategory } from '../../actions/Property/categoryAction'


export class Category extends Component {

  componentDidMount(){
    this.props.getCategories()
  }

  onDeleteClick = id => { 
    this.props.deleteCategory(id) 
    
  }
  render() {
    const { id, categories }  = this.props;
    //const { id } = this.props.category;

    //console.log(categories)
    return (
      <div>
        <div className="page-header">
        
          <h3 className="page-title"> Properties</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/add-property-category">Add New Category</a></li>
              <li className="breadcrumb-item active" aria-current="page">Property Categories</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Properties</h4>
                <p className="card-description"> View list of categories
                </p>
                <div class="search-container text-right" style={{float: 'right', }}>
            <form>
              <input style={{ border: 'none' }} class="admin-search" type="text" placeholder="Search.." name="search" />
              <button style={{ border: 'none', backgroundColor: '#fff', color: 'grey'}} type="submit"><i class="fa fa-search"></i></button>
            </form>
          </div>
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
                  {categories.map(category => (
                      <tr key={category.name}> 
                        <td> {category.id} </td>
                        <td> {category.name} </td>
                        <td> {moment(category.created_at).format('MMM-DD-YYYY')} </td>
                        <td> {moment(category.updated_at).format('MMM-DD-YYYY')} </td>
                        <td>
                             &nbsp;<Link to={`property-category/edit/${category.id}`}><button className="btn btn-success font-weight-bold ml-0 mt-2 mt-lg-0">Edit</button></Link>
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
// Category.propTypes = {
//   category: PropTypes.object.isRequired
// };
export default connect(mapStateToProps, { getCategories, deleteCategory })(Category);
 