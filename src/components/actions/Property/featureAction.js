import axios from '../../../axios'
// React Notification
import { NotificationManager } from 'react-notifications';

export const getFeatures = () => async dispatch =>{
    const res =await axios.get('features');
    dispatch ({
        type : 'GET_features',
        payload : res.data.features
    });
}

export const getFeature = (id) => async dispatch =>{

    try {
        const res = await axios.get('features/'+id);

        dispatch({
          type : 'GET_feature',
          payload : res.data 
         })
    } catch (error) {
        alert(error) 
    }
    
}
export const addFeature = (feature) => async dispatch => {
    const res = await axios.post('create-features', feature);
    dispatch ({
        type: 'ADD_category',
        payload: res.data
    });
}

export const deleteFeature = (id) => dispatch => {
    axios.delete(`features/${id}`)
    .then(res => {
        dispatch({
            type : 'DELETE_feature',
            payload : id 
         })
         NotificationManager.success('Property feature deleted successfully!', 'Success!', 2000);
     })
     .catch(err => {
         console.log(err)
         NotificationManager.error('Unable to delete Property feature!', 'Error!', 2000);
     })
}

export const updateFeature = (feature) =>async dispatch => {

    try {
        const res = await axios.put(`features/${feature.id}`, feature);

     dispatch({
        type : 'UPDATE_feature',
        payload : res.data
      })
      NotificationManager.success('Property Feature edited successfully!', 'Success!', 2000);
    } catch (error) {
        
        NotificationManager.error('Unable to edit Property category!', 'Error!', 2000);
    }
    
}