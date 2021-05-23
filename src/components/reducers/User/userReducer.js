const initState = {
    users: [],
    
}

export default function(state = initState, action){
    switch (action.type){
        case 'GET_users':
         return {
            ...state,
            users: action.payload,
        }
        case 'COUNT_users':
            return {
               ...state,
               userCount: action.payload,
           }

        default: {
            return state
        }
    }
}