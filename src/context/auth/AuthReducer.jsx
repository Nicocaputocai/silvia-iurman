export const TYPES = Object.freeze(
    {
        LOGIN : 'LOGIN',
        LOGOUT : 'LOGOUT'
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
        default:
            return state;
    }
}