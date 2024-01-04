//create a reducer
const reducer = (state, action) => {
    if (action.type === "AddMessage") {
        let newMessage = action.message;

        if(action.message.from === "Abhi") {
            return {
                messagesAbhi: [...state.messagesAbhi, newMessage],
                messagesSimran: state.messagesSimran
            };
        } else if(action.message.from === "Simran") {
            return {
                messagesAbhi: state.messagesAbhi,
                messagesSimran: [...state.messagesSimran, newMessage]
            };
        }
    } else if (action.type === "DeleteMessage") {
        if(action.from === "Abhi") {
            return {
                messagesAbhi: [
                    ...state.messagesAbhi.slice(0, action.id),
                    ...state.messagesAbhi.slice(action.id + 1, state.messagesAbhi.length)
                ],
                messagesSimran: state.messagesSimran
            };
        } else if(action.from === "Simran") {
            return {
                messagesAbhi: state.messagesAbhi,
                messagesSimran: [
                    ...state.messagesSimran.slice(0, action.id),
                    ...state.messagesSimran.slice(action.id + 1, state.messagesSimran.length)
                ]
            };
        }
    }

    return state;
};

const initialState = {
    messagesAbhi: [],
    messagesSimran: []
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
