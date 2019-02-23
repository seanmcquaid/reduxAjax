// This is a reducer.
// To make a reducer:
// 1. make a function that has 2 params:
//     - state (usually set a default)
//     - action
// 2. The state param contains THIS reducers state. Just like a variable.
// 3. The action param will contain whatever the object the dispatched action sent us
//     - type (REQUIRED)
//     - payload (data/JSON/stuff)
// 4. Check the action.type to see if I care.
// 4a. If I care, return some new state
// 4b. If I don't care, return state (old state)

function stockReducer(state = null,action){
    // switch = fancy/stupid if statement
    switch(action.type){
        case "GET_STOCKS":
            console.log(action.payload.data)
            return action.payload.data;
        case "CLEAR_STOCKS":
            return null;
        default:
            // if no other case applies, then default runs
            return state;
    }
    // if(action.type === "GET_STOCKS"){
    //     return state;
    // }
}

export default stockReducer;