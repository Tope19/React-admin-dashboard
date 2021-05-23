import axios from '../../../axios'
// React Notification
import { NotificationManager } from 'react-notifications';

export const getProperties = () => async dispatch =>{
    const res = await axios.get('properties');
    dispatch ({
        type : 'GET_properties',
        payload : res.data.properties
    });
}

export const addProperty = (property) => async dispatch => {
    const res = await axios.post('create-property', property);
    dispatch ({
        type: 'ADD_property',
        payload: res.data
    });
}

export const deleteProperty = (id) => dispatch => {
    axios.delete(`properties/${id}`)
    .then(res => {
        dispatch({
            type : 'DELETE_type',
            payload : id 
         })
         NotificationManager.success('Property  deleted successfully!', 'Success!', 2000);
     })
     .catch(err => {
         console.log(err)
         NotificationManager.error('Unable to delete Property !', 'Error!', 2000);
     })
}

export const getProperty = (id) => async dispatch =>{

    try {
        const res = await axios.get('properties/'+id);

        dispatch({
          type : 'GET_property',
          payload : res.data 
         })
    } catch (error) {
        alert(error) 
    }
    
}

export const updateProperty = (property) =>async dispatch => {

    try {
        const res = await axios.put(`properties/${property.id}`, property);

     dispatch({
        type : 'UPDATE_property',
        payload : res.data
      })
      NotificationManager.success('Property edited successfully!', 'Success!', 2000);
    } catch (error) {
        
        NotificationManager.error('Unable to edit Property !', 'Error!', 2000);
    }
    
}
