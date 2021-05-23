import axios from '../../../axios'
// React Notification
import { NotificationManager } from 'react-notifications';

export const getCategories = () => async dispatch =>{
    const res = await axios.get('category');
    dispatch ({
        type : 'GET_categories',
        payload : res.data.categories
    }); 
}

export const addCategory = (category) => async dispatch => {
    const res = await axios.post('create-category', category);
    dispatch ({
        type: 'ADD_category',
        payload: res.data
    });
} 

export const deleteCategory = (id) => dispatch => {
    axios.delete(`category/${id}`)
    .then(res => {
        dispatch({
            type : 'DELETE_category',
            payload : id 
         })
         NotificationManager.success('Property category deleted successfully!', 'Success!', 2000);
     })
     .catch(err => {
         console.log(err)
         NotificationManager.error('Unable to delete Property category!', 'Error!', 2000);
     })
}

export const getCategory = (id) => async dispatch =>{

    try {
        const res = await axios.get('category/'+id);

        dispatch({
          type : 'GET_category',
          payload : res.data 
         })
    } catch (error) {
        alert(error) 
    }
    
}

export const updateCategory = (category) =>async dispatch => {

    try {
        const res = await axios.put(`category/${category.id}`, category);

     dispatch({
        type : 'UPDATE_category',
        payload : res.data
      })
      NotificationManager.success('Property Category edited successfully!', 'Success!', 2000);
    } catch (error) {
        
        NotificationManager.error('Unable to edit Property category!', 'Error!', 2000);
    }
    
}