const initialState = {
    token: localStorage.getItem("token"),
    isLoggedIn: localStorage.getItem("token") ? true : false,
  };

  //create reducer function for login
const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "LOG_IN":
        return {
          token: payload,
          isLoggedIn: true,
        };
      case "LOG_OUT":
        return {
          token: null,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  };