const initialState = {
    users: [],
    projects: [],
    isLoggedIn: false,
  };

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            };
        default:
            return state;
    }
}