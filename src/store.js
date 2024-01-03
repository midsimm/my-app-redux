//create a reducer
const reducer = (state, action) => {
    if (action.type === "AddMessage") {
        return {
            messages: [...state.messages, action.message]
        };
    } else if (action.type === "DeleteMessage") {
        return [
            ...state.messages.slice(0, action.id),
            ...state.messages.slice(action.id + 1, state.messages.length)
        ];
    } else {
        return state;
    }
};

const initialState = {
    messages: []
};


const createStore = (reducer, initialState) => {
    let state = initialState,
        //create an empty array called listeners
        listeners = [];

    const dispatch = (action) => {
        state = reducer(state, action);
        //call all the listeners
        listeners.forEach((listener) => listener());
    };

    const getState = () => {
        return state;
    };

    //write a method subscribe to add new listener to listeners list
    const subscribe = (listener) => {
        listeners.push(listener);
    };

    return {
        dispatch,
        getState,
        subscribe
    };
};

const store = createStore(reducer, initialState);

export default store;
