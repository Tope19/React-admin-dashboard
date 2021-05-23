import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getBlogCategory,updateBlogCategory } from '../../../actions/Blog/categoryAction'

// React Notification
import { NotificationManager } from 'react-notifications';

export class Edit extends Component {

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.getBlogCategory(id)
      }
    
      componentWillReceiveProps(nextProps,nextState){
        const { name, url } = nextProps.category;
        this.setState({
          name,
          url
        })
      }
    
      state = {
        name: '',
        url: '',
        errors: {}
      };
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const { name, url } = this.state;
    
        // Check For Errors
        if (name === '') {
          this.setState({ errors: { name: 'Name is required' } });
          return;
        }        
        if (url === '') {
            this.setState({ errors: { url: 'Url is required' } });
            return;
          }  
    
        const { id } = this.props.match.params;
    
        const updCategory = {
          id,
          name,
          url
        
        };
    
        //// UPDATE CATEGORY ////
    
        this.props.updateBlogCategory(updCategory);
    
        // Clear State
        this.setState({
          name: '',
          url: '',
          errors: {}
        });
    
        this.props.history.push('/blog-categories');
      };
    
      onChange = e => this.setState({ [e.target.name]: e.target.value });

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
                <form onSubmit={this.onSubmit} className="forms-sample">
                  <Form.Group>
                    <Form.Control 
                    type="text" 
                    id="exampleInputUsername1" 
                    placeholder="Category Name" 
                    size="lg"
                    value={name}
                    onChange = {this.onChange}
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
                    onChange = {this.onChange}
                    name="url"
                    error={errors.url}
                  
                    />
                  </Form.Group>

                  <button onClick={this.onSubmit} className="btn btn-primary mr-2">Submit</button>
                  
                </form>
              </div>
            </div>
          </div>
       </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    category : state.categories.category
  }
}
export default connect(mapStateToProps, {getBlogCategory, updateBlogCategory})(Edit);
