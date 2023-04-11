
    export const initialState={
        isLogged:false,
        arrayvalue:[],
        display:false,
    }

    export const stateReducer=(state,action)=>{
        console.log('state',state,'action',action);
        switch (action.type){
            case 'LOGIN':   
            return{
                ...state,
                isLogged:action.payload,    

            }; 
            case 'UPDATE_FORM':   
            return{
                ...state,
                arrayvalue:action.payload,   

            };
            default: return state;
        }
        
    }