export const TYPES = Object.freeze(
    {
        LOGIN : 'LOGIN',
        LOGOUT : 'LOGOUT',
        UPDATE: 'UPDATE'
    }
)

export const initialState = {
    user : null,
    isLogged : false
}

export const AuthReducer = (state,action) => {
    const {type,payload} = action;

    switch (type) {
        case TYPES.LOGIN:
            return {
                ...state,
                user : payload,
                isLogged : true
            }
        case TYPES.LOGOUT:
            return initialState;
        case TYPES.UPDATE:{
            return {
                ...state,
                user : payload
            }
        }
        default:
            return state;
    }
}