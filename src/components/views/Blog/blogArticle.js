import React, { Component } from 'react'
import axios from 'axios';
import Pagination from "react-js-pagination";
import moment from "moment"

export default class blogArticle extends Component {

  constructor() {
    super();
    this.state = {
        blogs: [],
        activePage: 1,
        itemsCountPerPage: 1,
        totalItemsCount: 1,
        pageRangeDisplayed: 3
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/blogs')
      .then(response => {
        this.setState({
          blogs: response.data.data,
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
    axios.get('http://127.0.0.1:8000/api/blogs?page=' + pageNumber)
        .then(response => {
            this.setState({
                blogs: response.data.data,
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
          <h3 className="page-title"> Articles</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/add-new-article">Add New Article</a></li>
              <li className="breadcrumb-item active" aria-current="page">Articles</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Articles</h4>
                <p className="card-description"> View list of Articles
                </p>
                <div className="table-responsive">
                  <table className="table table-striped text-center">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Title </th>
                        <th> Url </th>
                        <th> Image </th>
                        <th> Created At</th>
                        <th> Updated At</th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      this.state.blogs.map(blog => {
                        return(
                          <tr key={blog.id}> 
                          <td>{blog.id}</td>
                          <td>{blog.title}</td>
                          <td>{blog.url}</td>
                          <td className="py-1">
                            <img src={blog.image} alt="user icon" />
                          </td>
                          <td>{moment(blog.created_at).format('MMM-DD-YYYY')}</td>
                          <td>{moment(blog.created_at).format('MMM-DD-YYYY')}</td>
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

