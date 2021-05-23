import React, { Component } from 'react'
import moment from "moment"
import axios from 'axios';
import Pagination from "react-js-pagination";

export default class Property extends Component {

  constructor() {
    super();
    this.state = {
        properties: [],
        activePage: 1,
        itemsCountPerPage: 1,
        totalItemsCount: 1,
        pageRangeDisplayed: 3
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }
   
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/properties')
      .then(response => {
        this.setState({
          properties: response.data.data,
          itemsCountPerPage: response.data.per_page,
          totalItemsCount: response.data.total,
          activePage: response.data.current_page
        });
    });
  }

  handlePageChange(pageNumber) {
    //console.log(`active page is ${pageNumber}`);
     this.setState({activePage: pageNumber});
    //"http://127.0.0.1:8000/category?page=1
    axios.get('http://127.0.0.1:8000/api/properties?page=' + pageNumber)
        .then(response => {
            this.setState({
                properties: response.data.data,
                itemsCountPerPage: response.data.per_page,
                totalItemsCount: response.data.total,
                activePage: response.data.current_page
            });
      });
    }
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Properties</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/add-new-property">Add New Property</a></li>
              <li className="breadcrumb-item active" aria-current="page">Properties</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Properties</h4>
                <p className="card-description"> View list of properties
                </p>
                <div className="table-responsive">
                  <table className="table table-striped text-center">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Image </th>
                        <th> Title </th>
                        <th> Amount </th>
                        <th> Created At</th>
                          <th> Updated At</th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.properties.map(property => {
                        return(
                          <tr key={property.id}> 
                          <td>{property.id}</td>
                          <td className="py-1">
                            <img src={property.featuredImage} alt="user icon" />
                          </td>
                          <td> {property.title} </td>
                          <td> N {property.budget}</td>
                          <td>{moment(property.created_at).format('MMM-DD-YYYY')}</td>
                          <td>{moment(property.created_at).format('MMM-DD-YYYY')}</td>
                          <td> <button type="submit" className="btn btn-primary font-weight-bold ml-0 mt-2 mt-lg-0">View</button>
                               &nbsp;<button type="submit" className="btn btn-success font-weight-bold ml-0 mt-2 mt-lg-0">Edit</button>
                               &nbsp;<button type="submit" className="btn btn-danger font-weight-bold ml-0 mt-2 mt-lg-0">Delete</button>
                           </td>
                        </tr>
                        )
                      })
                    }
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-center">
                    <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.totalItemsCount}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.handlePageChange}
                      itemClass='page-item'
                      linkClass='page-link'
                    />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

