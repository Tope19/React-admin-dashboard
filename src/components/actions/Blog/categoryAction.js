import axios from '../../../axios'
// React Notification
import { NotificationManager } from 'react-notifications';

export const getBlogCategories = () => async dispatch =>{
    const res = await axios.get('/blog-categories');
    dispatch ({
        type : 'GET_categories',
        payload : res.data.categories
    }); 
}

export const addBlogCategory = (category) => async dispatch => {
    const res = await axios.post('/blog-category', category);
    dispatch ({
        type: 'ADD_category',
        payload: res.data
    });
} 

export const deleteBlogCategory = (id) => dispatch => {
    axios.delete(`/blog-category/${id}`)
    .then(res => {
        dispatch({
            type : 'DELETE_category',
            payload : id 
         })
         NotificationManager.success('Blog category deleted successfully!', 'Success!', 2000);
     })
     .catch(err => {
         console.log(err)
         NotificationManager.error('Unable to delete Blog category!', 'Error!', 2000);
     })
}

export const getBlogCategory = (id) => async dispatch =>{

    try {
        const res = await axios.get('/blog-category/'+id);

        dispatch({
          type : 'GET_category',
          payload : res.data 
         })
    } catch (error) {
        alert(error) 
    }
    
}

export const updateBlogCategory = (category) =>async dispatch => {

    try {
        const res = await axios.put(`/blog-category/${category.id}`, category);

     dispatch({
        type : 'UPDATE_category',
        payload : res.data
      })
      NotificationManager.success('Blog Category edited successfully!', 'Success!', 2000);
    } catch (error) {
        
        NotificationManager.error('Unable to edit Blog category!', 'Error!', 2000);
    }
    
}