const initialState = {
    isLoggedIn: false,
    user: null,
    pendingLogin: false
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'WAIT_FOR_LOGIN_RESPONSE':
        console.log('received WAIT_FOR_LOGIN_RESPONSE')
        return { ...state, pendingLogin: true }
      case 'LOGIN_SUCCEEDED':
        return { ...state, user: action.payload, isLoggedIn: true, pendingLogin: false }
      case 'LOGOUT_SUCCEEDED':
        console.log('logout')
        return initialState
      case 'LOGIN_CANCELLED':
        return initialState
      default:
        return state;
    }
  }
  