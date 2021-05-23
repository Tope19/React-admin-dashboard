import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addBlogCategory } from '../../../actions/Blog/categoryAction'

// React Notification
import { NotificationManager } from 'react-notifications';

export class addBlogCat extends Component {
  state = {
    name: '',
    url: '',
    errors: {}
  };
 
 

  onChangeInput = (e) => this.setState({
    [e.target.name] : e.target.value
  })

  handleSubmit = (e) =>{
    e.preventDefault();
    
    const { name, url } = this.state;

    //Check for errors
    if(name === ''){
      this.setState({ errors: { name: 'name is required'}});
      return;
    }
    if(url === ''){
      this.setState({ errors: { url: 'url is required'}});
      return;
    }
    const newPropertyCategory = {
      name,
      url
    }
   
    
    //Submit Category
    this.props.addBlogCategory(newPropertyCategory)
    NotificationManager.success('Blog category added!', 'Successful!', 2000);
    
     //Clear state
     this.setState({
      name: '',
      url: '',
      errors: {}
    })
    this.props.history.push('/blog-categories');
    
  }
  render() {
    const { url, name, errors } = this.state;
    return (
        
      <div>
        <div className="page-header">
          <h3 className="page-title"> Articles </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/blog-categories">Categories</a></li>
              <li className="breadcrumb-item active" aria-current="pagestartDate: new Date()">Add New Category</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Article Category</h4>
                <p className="card-description"> Add New Category </p>
                <form onSubmit={this.handleSubmit} className="forms-sample">
                  <Form.Group>
                    <Form.Control 
                    type="text" 
                    id="exampleInputUsername1" 
                    placeholder="Category Name" 
                    size="lg"
                    value={name}
                    onChange = {this.onChangeInput}
                    name="name"
                    error={errors.name}
                  
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control 
                    type="text" 
                    id="exampleInputUsername1" 
                    placeholder="Category Url" 
                    size="lg"
                    value={url}
                    onChange = {this.onChangeInput}
                    name="url"
                    error={errors.url}
                  
                    />
                  </Form.Group>

                  <button onClick={this.handleSubmit} className="btn btn-primary mr-2">Submit</button>
                  
                </form>
              </div>
            </div>
          </div>
       </div>
      </div>
    )
  }
}

export default connect(null, {addBlogCategory})(addBlogCat);
