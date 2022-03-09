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
         videos: state.videos.map((element, index) =>{
             if(element.id == payload.id){
                 return payload
             }else{
                 return element
             }
         })
        };
     

        case "DELETE_VIDEO":
            return {
               videos: state.videos.filter(video=>{
                   return video.id === payload
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


  export const setVideos = (videos)=>{
    return {type:"SET_VIDEOs",payload:videos} 

  }
  export const addVideos = (newVideo)=>{
      return {type:"ADD_VIDEO",payload:newVideo}
  }


  export const deleteVideos = (id)=>{
  return { type: "DELETE_VIDEO", payload: id}
  }