import React, {Component } from 'react'
import Iframe from './Map/Iframe'
import { connect } from 'react-redux'
import { getContacts } from '../../actions/Cms/Contact/contactAction'

export class Contact extends Component {

    componentDidMount(){
        this.props.getContacts()
      }
    render(){
        const  {contacts } = this.props;
        return (
            <div>
                 <div className="page-header">
              <h3 className="page-title"> Contact Map</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/add-new-article">Update Map Url</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Map Url</li>
                </ol>
              </nav>
            </div>
            {contacts.map(contact => (
                    <Iframe source={contact.url} />
                    ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
      contacts : state.contacts.contacts
    }
}
export default connect(mapStateToProps, { getContacts })(Contact)
