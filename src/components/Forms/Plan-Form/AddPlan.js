import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import {addPlan} from '../../actions/Subscription/planAction';
import Select from 'react-select';

// React Notification 
import { NotificationManager } from 'react-notifications';

const options = [
  { value: 'monthly', label: 'Monthly' },
  { value: '3 months', label: '3 Months' },
  { value: '6 months', label: '6 Months' },
  { value: 'yearly', label: 'Yearly' } 
];

export class AddPlan extends Component {
    state= {
      name : '',
      price : '',
      duration : '',
      maximum_listings : '',
      maximum_premium_listings : '',
      max_featured_ad_listings : '',
      errors : {}

    };
    state = {
      duration: null,
    }
    handleChange = (duration) => {
      this.setState({ duration });
      console.log(`Option selected:`, duration);
    }

    onChangeInput = (e) => this.setState({
      [e.target.name] : e.target.value
    })
  
    handleSubmit = (e) =>{
      e.preventDefault();
      
      const { name, price, duration, maximum_listings, maximum_premium_listings, max_featured_ad_listings, } = this.state;
  
      //Check for errors
      if(name === ''){
        this.setState({ errors: { name: 'name is required'}});
        return;
      }
      if(price === ''){
        this.setState({ errors: { price: 'price is required'}});
        return;
      }
      if(duration === ''){
        this.setState({ errors: { duration: 'duration is required'}});
        return;
      }
      if(maximum_listings === ''){
        this.setState({ errors: { maximum_listings: 'max listing is required'}});
        return;
      }
      if(maximum_premium_listings === ''){
        this.setState({ errors: { maximum_premium_listings: 'max premium listing is required'}});
        return;
      }
      if(max_featured_ad_listings === ''){
        this.setState({ errors: { max_featured_ad_listings: 'max feature listing is required'}});
        return;
      }
      const newPlan = {
        name,
        price,
        duration,
        maximum_listings,
        maximum_premium_listings,
        max_featured_ad_listings
      }
      //this.props.addPropertyCategory(this.state.name)
      
      //Submit Category
      this.props.addPlan(newPlan)
      NotificationManager.success('New plan added!', 'Successful!', 2000);
      
       //Clear state
       this.setState({
        name: '',
        price: '',
        duration : '',
        maximum_listings : '',
        maximum_premium_listings : '',
        max_featured_ad_listings : '',
        errors: {}
      })
      //this.props.history.push('/plans');
    }

  render() {
    const { name, price, duration, maximum_listings, maximum_premium_listings, max_featured_ad_listings, errors} = this.state;
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Subscription Plans</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/plans">Plans</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add New Plan</li>
            </ol>
          </nav>
        </div>
        <div className="row">

          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Subscription Plan</h4>
                <form onSubmit={this.handleSubmit} className="form-sample">
                  <p className="card-description"> Plan info</p>
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Name</label>
                        <div className="col-sm-12">
                        <Form.Control 
                         type="text" 
                         name="name"
                         value={name}
                         onChange = {this.onChangeInput}
                         />
                        </div>
                      </Form.Group>
                    </div>
                 
                  </div>
                
                  
               
                  <p className="card-description"> Other Features </p>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Price</label>
                        <div className="col-sm-9">
                        <Form.Control 
                        type="text"
                        name="price"
                        value={price}
                        onChange = {this.onChangeInput}
                        />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Duration</label>
                        <div className="col-sm-9">
                        {/* <Form.Control 
                        as="select"   
                        >
                          <option onChange = {this.onChangeInput} name="duration" value="Weekly"> Weekly </option>
                          <option onChange = {this.onChangeInput} name="duration" value="Monthly"> Monthly </option>
                          <option onChange = {this.onChangeInput} name="duration" value="Biannually"> Biannually </option>
                          <option onChange = {this.onChangeInput} name="duration" value="Annually"> Annually </option>
                        </Form.Control> */}
                        <Select 
                        onChange={this.handleChange}
                        options={options}
                        autoFocus={true}
                        name="duration"
                        value={duration}
                        />
                        </div>
                      </Form.Group>
                    </div>
                 
                  </div>
                  <div className="row">
                  <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Max Listing</label>
                        <div className="col-sm-8">
                        <Form.Control 
                        type="text"
                        value={maximum_listings}
                        name="maximum_listings"
                        onChange = {this.onChangeInput}
                        />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Max Premium Listing</label>
                        <div className="col-sm-8">
                        <Form.Control 
                        type="text"
                        name="maximum_premium_listings"
                        value={maximum_premium_listings}
                        onChange = {this.onChangeInput}
                        />
                        </div>
                      </Form.Group> 
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Max Featured Ad</label>
                        <div className="col-sm-8">
                        <Form.Control type="text"
                        name="max_featured_ad_listings"
                        value={max_featured_ad_listings}
                        onChange = {this.onChangeInput}
                        />
                        </div>
                      </Form.Group>
                    </div>
                 
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

export default connect(null, {addPlan})(AddPlan) 
