import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Editor } from '@tinymce/tinymce-react';
import { connect } from 'react-redux';
import { addProperty } from '../../../actions/Property/propertyAction'
import axios from 'axios'
import Select from 'react-select';
// React Notification 
import { NotificationManager } from 'react-notifications';


export class AddNewProperty extends Component {
  state = {
    title: '',
    description: '',
    prperty_cat_id: [],
    prperty_type_id: [],
    state: '',
    market_status: '',
    locality: '',
    budget: '',
    featuredImage: '',
    galleryImage: '',
    agent: '',
    feature: [],
    bedroom: '',
    bathroom: '',
    garage: '',
    toilet: '',
    totalarea: '',
    video_link: '',
    metaDescription: '',
    errors: {}
  };
 
 

  onChangeInput = (e) => this.setState({
    [e.target.name] : e.target.value
  })

  handleSubmit = (e) =>{
    e.preventDefault();
    
    const { title, description, prperty_cat_id, prperty_type_id,  state, market_status, budget, locality, featuredImage, galleryImage, agent, feature, bedroom, bathroom, garage, toilet, totalarea, video_link, metaDescription } = this.state;

    //Check for errors
    if(title === ''){
      this.setState({ errors: { title: 'name is required'}});
      return;
    }
    const newProperty = {
      title, description, prperty_cat_id, prperty_type_id, state, market_status, budget, locality, featuredImage, galleryImage, agent, feature, bedroom, bathroom, garage, toilet, totalarea, video_link, metaDescription
    }
   
    
    //Submit Category
    this.props.addProperty(newProperty)
    NotificationManager.success('Property added!', 'Successful!', 2000);
    
     //Clear state
     this.setState({
      title: '',
      description: '',
      prperty_cat_id: [],
      prperty_type_id: [],
      state: '',
      market_status: '',
      locality: '',
      budget: '',
      featuredImage: '',
      galleryImage: '',
      agent: '',
      feature: [],
      bedroom: '',
      bathroom: '',
      garage: '',
      toilet: '',
      totalarea: '',
      video_link: '',
      metaDescription: '',
      errors: {}
    })
    this.props.history.push('/properties');
    
  }
  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  }
  async getFeatures(){
    const res = await axios.get('http://127.0.0.1:8000/api/features')
    const data = res.data.features

    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.name
    }))
    this.setState({feature: options})
  }
  async getCategories(){
    const res = await axios.get('http://127.0.0.1:8000/api/category')
    const data = res.data.categories

    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.name
    }))
    this.setState({prperty_cat_id: options})
  }
  async getTypes(){
    const res = await axios.get('http://127.0.0.1:8000/api/types')
    const data = res.data.types

    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.name
    }))
    this.setState({prperty_type_id: options})
  }
  componentDidMount(){
    this.getFeatures();
    this.getCategories();
    this.getTypes();
  }
  render() {
    const { errors, title, description, state, market_status, budget, locality, featuredImage, galleryImage, agent, feature, bedroom, bathroom, garage, toilet, totalarea, video_link, metaDescription } = this.state;
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Properties </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/properties">Properties</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add New Property</li>
            </ol>
          </nav>
        </div>
        <div className="row">

          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add New Property</h4>
                <form onSubmit={this.handleSubmit} className="form-sample">
                  <p className="card-description"> Property info </p>
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Title</label>
                        <div className="col-sm-9">
                        <Form.Control  
                        type="text" 
                        value={title}
                        onChange = {this.onChangeInput}
                        name="title"
                        error={errors.title} 
                        />
                        </div>
                      </Form.Group>
                    </div>
                 
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Description</label>
                        <div className="col-sm-12">
                          <Editor
                           value={description}
                           onChange = {this.onChangeInput}
                           name="description"
                           error={errors.description} 
                          initialValue="<p>Enter Property Description</p>"
                          init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                              'advlist autosave autolink lists link image charmap print preview anchor',
                              'searchreplace visualblocks code fullscreen',
                              'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                              'undo redo | formatselect | bold italic backcolor | \
                              alignleft aligncenter alignright alignjustify | \
                              bullist numlist outdent indent | removeformat | help'
                          }}
                          onEditorChange={this.handleEditorChange}
                    />
                        </div>
                      </Form.Group>
                    </div>
                  
                  </div>
                  <div className="row">
                   <div className="col-md-6">
                    <Form.Group className="row">
                    <label>Featured Image</label>
                    <Form.Control type="file"  className="file-upload-default" />
                    <div className="input-group col-md-12">
                      <Form.Control type="file" className="form-control file-upload-info"  placeholder="Upload Image" /> 
                      <span className="input-group-append">
                        <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                      </span>
                    </div>
                  </Form.Group>
                    </div>

                    <div className="col-md-6">
                    <Form.Group className="row">
                    <label>Gallery Image</label>
                    <Form.Control type="file" className="file-upload-default" />
                    <div className="input-group col-md-12">
                      <Form.Control type="file" className="form-control file-upload-info"  placeholder="Upload Image" /> 
                      <span className="input-group-append">
                        <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                      </span>
                    </div>
                  </Form.Group>
                    </div>

                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Feature</label>
                        <div className="col-sm-9">
                          {/* <select className="form-control">
                            <option defaultValue>Select Feature</option>
                            <option>Category2</option>
                            <option>Category3</option>
                            <option>Category4</option>
                          </select> */}
                            <Select 
                            options={this.state.feature} 
                            isMulti 
                           
                            />
                        </div>
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Type</label>
                        <div className="col-sm-9">
                          {/* <select className="form-control">
                            <option defaultValue>Select Type</option>
                            <option>Category2</option>
                            <option>Category3</option>
                            <option>Category4</option>
                          </select> */}
                          <Select 
                          options={this.state.prperty_type_id} 
                        />
                        </div>
                        </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Category</label>
                        <div className="col-sm-9">
                          {/* <select className="form-control">
                            <option defaultValue>Select Category</option>
                            <option>Category2</option>
                            <option>Category3</option>
                            <option>Category4</option>
                            
                          </select> */}
                          <Select 
                          options={this.state.prperty_cat_id} 
                         
                          />
                        </div>
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Publish</label>
                        <div className="col-sm-4">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios1" /> Yes  
                          </label>
                        </div>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <p className="card-description"> Other Features </p>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Bedroom</label>
                        <div className="col-sm-8">
                        <Form.Control 
                        type="text"
                        value={bedroom}
                        onChange = {this.onChangeInput}
                        name="bedroom"
                        error={errors.bedroom} 
                        />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Bathroom</label>
                        <div className="col-sm-8">
                        <Form.Control 
                        type="text"
                        value={bathroom}
                        onChange = {this.onChangeInput}
                        name="bathroom"
                        error={errors.bathroom} 
                        />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Toilet</label>
                        <div className="col-sm-8">
                        <Form.Control 
                        type="text"
                        value={toilet}
                        onChange = {this.onChangeInput}
                        name="toilet"
                        error={errors.toilet} 
                        />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Garage</label>
                        <div className="col-sm-8">
                        <Form.Control 
                        type="text"
                        value={garage}
                        onChange = {this.onChangeInput}
                        name="garage"
                        error={errors.garage} 
                        />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Price</label>
                        <div className="col-sm-8">
                        <Form.Control 
                        type="text"
                        value={budget}
                        onChange = {this.onChangeInput}
                        name="budget"
                        error={errors.budget} 
                        />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="row">
                        <label className="col-sm-4 col-form-label">Market Status</label>
                        <div className="col-sm-8">
                          <select className="form-control"
                           onChange = {this.onChangeInput}
                           name="market_status"
                           error={errors.market_status} 
                          >
                            <option value="Available">Available</option>
                            <option value="Taken">Taken</option>
                           
                          </select>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Total Area</label>
                        <div className="col-sm-9">
                        <Form.Control 
                        type="text"
                        value={totalarea}
                        onChange = {this.onChangeInput}
                        name="totalarea"
                        error={errors.totalarea} 
                        />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">  
                        <label className="col-sm-3 col-form-label">Video Link</label>
                        <div className="col-sm-9">
                        <Form.Control 
                        type="text"
                        value={video_link}
                        onChange = {this.onChangeInput}
                        name="video_link"
                        error={errors.video_link} 
                        />
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Locality</label>
                        <div className="col-sm-9">
                        <Form.Control 
                        type="text"
                        value={locality}
                        onChange = {this.onChangeInput}
                        name="locality"
                        error={errors.locality} 
                        />
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group className="row">  
                        <label className="col-sm-3 col-form-label">State</label>
                        <div className="col-sm-9">
                          <select className="form-control"
                           value={state}
                           onChange = {this.onChangeInput}
                           name="state"
                           error={errors.state} 
                          >
                            <option defaultValue>Select State</option>
                            <option value="Italy">Italy</option>
                            <option value="Russia">Russia</option>
                            <option value="Britian">Britain</option>
                          </select>
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

export default connect(null, {addProperty})(AddNewProperty)
