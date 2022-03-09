const initialState = {
    token: localStorage.getItem("token"),
    isLoggedIn: localStorage.getItem("token") ? true : false,
  };