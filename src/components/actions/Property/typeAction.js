import axios from '../../../axios'

// React Notification
import { NotificationManager } from 'react-notifications';

export const getTypes = () => async dispatch =>{
    const res =await axios.get('types');
    dispatch ({
        type : 'GET_types',
        payload : res.data.types
    });
}

export const addType = (type) => async dispatch => {
    const res = await axios.post('create-type', type);
    dispatch ({
        type: 'ADD_type',
        payload: res.data
    });
}

export const deleteType = (id) => dispatch => {
    axios.delete(`types/${id}`)
    .then(res => {
        dispatch({
            type : 'DELETE_type',
            payload : id 
         })
         NotificationManager.success('Property type deleted successfully!', 'Success!', 2000);
     })
     .catch(err => {
         console.log(err)
         NotificationManager.error('Unable to delete Property type!', 'Error!', 2000);
     })
}

export const getType = (id) => async dispatch =>{

    try {
        const res = await axios.get('types/'+id);

        dispatch({
          type : 'GET_type',
          payload : res.data 
         })
    } catch (error) {
        alert(error) 
    }
    
}

export const updateType = (type) =>async dispatch => {

    try {
        const res = await axios.put(`types/${type.id}`, type);

     dispatch({
        type : 'UPDATE_type',
        payload : res.data
      })
      NotificationManager.success('Property Type edited successfully!', 'Success!', 2000);
    } catch (error) {
        
        NotificationManager.error('Unable to edit Property type!', 'Error!', 2000);
    }
    
}