const initState = {
    data: []
    
};

export default function(state = initState, action){
    switch (action.type) {
        case 'GET_subs' :
            return{
            ...state, 
            data: action.payload,
           
        }
        default : {
            return state
        }
    }
}