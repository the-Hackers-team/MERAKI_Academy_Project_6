const initialState = {
    videos: [],
  };



  const videoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_VIDEO":
        return {
         videos = [...state,payload]
        };
      case "UPDATE_VIDEO":
        return {
          token: null,
          isLoggedIn: false,
        };
     

        case "DELETE_VIDEO":
            return {
               videos: state.videos.filter(video=>{
                   return video.id === payload.
               })
            };
        
            case "GET_VIDEO":
                return {
                     payload
                };    
           
                case "SET_VIDEOs":
                    return {
                      videos: payload
                    };    
                    default:
                        return state;
    }
  };