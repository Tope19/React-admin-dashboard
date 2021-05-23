import axios from '../../../axios' 

export const getUsers = () => async dispatch => {
    const res = await axios.get('users');
    dispatch ({
        type : 'GET_users',
        payload : res.data.users,
    })
}

export const countUsers = () => async dispatch => {
    const res = await axios.get('users');
    dispatch ({
        type : 'COUNT_users',
        payload : res.data.userCount,
    })
}

export const editUser = (id) => async dispatch => {
    const res = await axios.put('');
    dispatch ({
        type : 'EDIT_user',
        payload : id
    })
}
