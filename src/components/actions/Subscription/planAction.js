import axios from '../../../axios'


export const getPlans = () => async dispatch =>{
    const res = await axios.get('/plans');
    dispatch ({
        type : 'GET_plans',
        payload : res.data.plans
    });
}

export const addPlan = (plan) => async dispatch => {
    const res = await axios.post('/create-subscription-plan', plan);
    dispatch ({
        type : 'ADD_plan',
        payload : res.data
    });
}
