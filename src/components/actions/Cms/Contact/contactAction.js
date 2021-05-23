import axios from '../../../../axios'
// React Notification
import { NotificationManager } from 'react-notifications';

export const getContacts = () => async dispatch =>{
    const res = await axios.get('/contacts');
    dispatch ({
        type : 'GET_contact',
        payload : res.data.contacts
    }); 
}

// export const addBlogcontact = (contact) => async dispatch => {
//     const res = await axios.post('/blog-contact', contact);
//     dispatch ({
//         type: 'ADD_contact',
//         payload: res.data
//     });
// } 

// export const deleteBlogcontact = (id) => dispatch => {
//     axios.delete(`/blog-contact/${id}`)
//     .then(res => {
//         dispatch({
//             type : 'DELETE_contact',
//             payload : id 
//          })
//          NotificationManager.success('Blog contact deleted successfully!', 'Success!', 2000);
//      })
//      .catch(err => {
//          console.log(err)
//          NotificationManager.error('Unable to delete Blog contact!', 'Error!', 2000);
//      })
// }

export const getContact = (id) => async dispatch =>{

    try {
        const res = await axios.get('/add-map-url/'+id);

        dispatch({
          type : 'GET_contact',
          payload : res.data 
         })
    } catch (error) {
        alert(error) 
    }
    
}

export const updateContactDetail = (contact) =>async dispatch => {

    try {
        const res = await axios.put(`/add-map-url/${contact.id}`, contact);

     dispatch({
        type : 'UPDATE_contact',
        payload : res.data
      })
      NotificationManager.success('Blog contact edited successfully!', 'Success!', 2000);
    } catch (error) {
        
        NotificationManager.error('Unable to edit Blog contact!', 'Error!', 2000);
    }
    
}