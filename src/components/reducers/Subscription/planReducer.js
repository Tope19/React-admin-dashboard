const initState = {
    plans: []
    
};

export default function(state = initState, action){
    switch (action.type) {
        case 'GET_plans' :
            return{
            ...state, 
            plans: action.payload,
           
        }
        case 'ADD_plan' :
            return{
                ...state,
                plans: [action.payload, ...state.plans]
            }
        default : {
            return state
        }
    }
}

