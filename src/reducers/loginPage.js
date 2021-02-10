import * as actionTypes from '../constant/index';

const initialState = {
    userName: null,
    error: null
};

const loginPageReducer = (state = initialState, action) =>{
 const {type, payload} = action;
    switch(type){
        case actionTypes.VALIDATION_SUCCESSFUL: {
            return {userName:{...payload}, error:false}
        }
        case actionTypes.VALIDATION_FAILURE: {
            return {userName: null, error: payload}
        }
        default: {
            return{...state}
        }
    }
}

export default loginPageReducer;