import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getType, updateType } from '../../../actions/Property/typeAction'

export class Edit extends Component {

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.getType(id)
      }
    
      componentWillReceiveProps(nextProps,nextState){
        const { name } = nextProps.type;
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
    
        const updType = {
          id,
          name,
        
        };
    
        //// UPDATE TYPE ////
    
        this.props.updateType(updType);
    
        // Clear State
        this.setState({
          name: '',
          errors: {}
        });
    
        this.props.history.push('/property-types');
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
              <li className="breadcrumb-item"><a href="/property-types">Types</a></li>
              <li className="breadcrumb-item active" aria-current="pagestartDate: new Date()">Add New Type</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Property Type</h4>
                <p className="card-description"> Add New Type </p>
                <form onSubmit={this.onSubmit} className="forms-sample">
                  <Form.Group>
                    <Form.Control 
                    type="text" 
                    id="exampleInputUsername1" 
                    placeholder="Type Name" 
                    size="lg"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
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
      type : state.types.type
    }
  }

export default connect(mapStateToProps, {getType, updateType})(Edit)
