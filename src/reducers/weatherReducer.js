function weatherReducer(state = null,action){
    // switch = fancy/stupid if statement
    switch(action.type){
        case "GET_WEATHER":
            // console.log(action.payload.data)
            return action.payload.data;
        case "CLEAR_WEATHER":
            return null;
        default:
            // if no other case applies, then default runs
            return state;
    }
    // if(action.type === "GET_WEATHER"){
    //     return state;
    // }
}

export default weatherReducer;