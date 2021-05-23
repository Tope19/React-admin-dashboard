import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getFeature, updateFeature } from '../../../actions/Property/featureAction'

export class Edit extends Component {

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.getFeature(id)
      }
    
      componentWillReceiveProps(nextProps,nextState){
        const { name } = nextProps.feature;
        this.setState({
          name,
        })
      }
    
      state = {
        name: '',
        errors: {}
      };
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const { name } = this.state;
    
        // Check For Errors
        if (name === '') {
          this.setState({ errors: { name: 'Name is required' } });
          return;
        }        
    
        const { id } = this.props.match.params;
    
        const updFeature = {
          id,
          name,
        
        };
    
        //// UPDATE FEATURE ////
    
        this.props.updateFeature(updFeature);
    
        // Clear State
        this.setState({
          name: '',
          errors: {}
        });
    
        this.props.history.push('/property-features');
      };
    
      onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, errors } = this.state;
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Properties</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/property-features">Features</a></li>
              <li className="breadcrumb-item active" aria-current="pagestartDate: new Date()">Edit Feature</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Property Feature</h4>
                <p className="card-description"> Edit Feature </p>
                <form onSubmit={this.onSubmit} className="forms-sample">
                  <Form.Group>
                    <Form.Control 
                    type="text" 
                    id="exampleInputUsername1" 
                    placeholder="Feature Name" 
                    size="lg"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                    />
                  </Form.Group>               
                  <button onSubmit={this.onSubmit} className="btn btn-primary mr-2">Submit</button>
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
      feature : state.features.feature
    }
  }

export default connect(mapStateToProps, {getFeature, updateFeature})(Edit)
