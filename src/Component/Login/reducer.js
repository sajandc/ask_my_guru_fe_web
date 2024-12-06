const Login = (state = {}, action) => {
  switch (action.type) {
    case "ON_LOGIN": {
      return {
        ...state,
      };
    }
    case "CLEAR_STORE": {
      return {};
    }
    default: {
      return state;
    }
  }
};

export default Login;
