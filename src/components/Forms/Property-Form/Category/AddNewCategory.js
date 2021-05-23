import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addCategory } from '../../../actions/Property/categoryAction'

// React Notification 
import { NotificationManager } from 'react-notifications';

export class AddNewCategory extends Component {
  state = {
    name: '',
    errors: {}
  };
 
 

  onChangeInput = (e) => this.setState({
    [e.target.name] : e.target.value
  })

  handleSubmit = (e) =>{
    e.preventDefault();
    
    const { name } = this.state;

    //Check for errors
    if(name === ''){
      this.setState({ errors: { name: 'name is required'}});
      return;
    }
    const newPropertyCategory = {
      name
    }
   
    
    //Submit Category
    this.props.addCategory(newPropertyCategory)
    NotificationManager.success('Property category added!', 'Successful!', 2000);
    
     //Clear state
     this.setState({
      name: '',
      errors: {}
    })
    this.props.history.push('/property-categories');
    
  }
  
  render() {
    const { name, errors } = this.state;
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Properties</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/property-categories">Categories</a></li>
              <li className="breadcrumb-item active" aria-current="pagestartDate: new Date()">Add New Category</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Property Category</h4>
                <p className="card-description"> Add New Category </p>
                <form onSubmit={this.handleSubmit} className="forms-sample">
                  <Form.Group>
                    <Form.Control type="text" id="exampleInputUsername1" 
                    placeholder="Category Name" size="lg"
                    value={name}
                    onChange = {this.onChangeInput}
                    name="name"
                    error={errors.name} 
                    />
                  </Form.Group>

                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Publish
                    </label>
                  </div>
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

export default connect(null, {addCategory})(AddNewCategory)
