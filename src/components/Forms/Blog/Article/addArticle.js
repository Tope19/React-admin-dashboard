import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { Editor } from '@tinymce/tinymce-react';

export class addBlogArt extends Component {
  
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Articles </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/Articles">Articles</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add New Article</li>
            </ol>
          </nav>
        </div>
        <div className="row">

          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add New Article</h4>
                <form className="form-sample">
                  <p className="card-description"> Article info </p>
                  <div className="row">
                    <div className="col-md-12">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Title</label>
                        <div className="col-sm-9">
                        <Form.Control  type="text" />
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
                          initialValue="<p>Enter Article Description</p>"
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
                   <div classname="col-md-6">
                    <Form.Group className="row">
                    <label>Featured Image</label>
                    <Form.Control type="file" name="img[]" className="file-upload-default" />
                    <div className="input-group col-md-12">
                      <Form.Control type="text" className="form-control file-upload-info" disabled placeholder="Upload Image" /> 
                      <span className="input-group-append">
                        <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                      </span>
                    </div>
                  </Form.Group>
                    </div>

                    <div className="col-md-6">
                      <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Category</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option selected>Select Category</option>
                            <option>Category2</option>
                            <option>Category3</option>
                            <option>Category4</option>
                          </select>
                        </div>
                        </Form.Group>
                    </div>

                  </div>
                 <button type="submit" className="btn btn-primary mr-2">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default addBlogArt
