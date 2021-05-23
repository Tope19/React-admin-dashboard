import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addFeature } from '../../../actions/Property/featureAction'

// React Notification 
import { NotificationManager } from 'react-notifications';


export class AddNewFeature extends Component {

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
    const newPropertyFeature = {
      name
    }
    
    
    //Submit Feature
    this.props.addFeature(newPropertyFeature)
    NotificationManager.success('Property Feature added!', 'Successful!', 2000);
    
     //Clear state
     this.setState({
      name: '',
      errors: {}
    })
    this.props.history.push('/property-features');
    
  }
  render() {
    const { name, errors } = this.state;
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Properties</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/property-features">Features</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add New Feature</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Property Features</h4>
                <p className="card-description"> Add New Feature </p>
                <form onSubmit={this.handleSubmit} className="forms-sample">
                  <Form.Group>
                    <Form.Control 
                    type="text" 
                    id="exampleInputUsername1" 
                    placeholder="Feature Name" 
                    size="lg" 
                    value={name}
                    onChange = {this.onChangeInput}
                    name="name"
                    error={errors.name} 
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

export default connect(null, {addFeature})(AddNewFeature)
