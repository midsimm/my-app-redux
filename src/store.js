//create a reducer
import _ from "lodash";
const reducer = (state, action) => {
    if (action.type === "AddMessage") {
        let newMessage = action.message;
        return {
            users: {
                ...state.users,
                [newMessage.from]: {
                    ...state.users[newMessage.from],
                    threads: {
                        ...state.users[newMessage.from].threads,
                        [newMessage.to]: {
                            ...state.users[newMessage.from].threads[newMessage.to],
                            messages: [
                                ...state.users[newMessage.from].threads[newMessage.to].messages,
                                newMessage
                            ]
                        }
                    }
                }
            }
        };
    } else if (action.type === "DeleteMessage") {
        let from = action.from, to = action.to;
        let messages = state.users[from].threads[to].messages;
        let newMessages = _.remove(messages, (_, index) => {
            return index !== action.id;
        });
        return {
            users: {
                ...state.users,
                [from]: {
                    ...state.users[from],
                    threads: {
                        ...state.users[from].threads,
                        [to]: {
                            ...state.users[from].threads[to],
                            messages: newMessages
                        }
                    }
                }
            }
        };
    } else if (action.type === "SetActiveThread") {
        return {
            ...state,
            users: {
                ...state.users,
                [action.from]: {
                    ...state.users[action.from],
                    activeThread: action.activeThread
                }
            }
        };
    }

    return state;
};

const initialState = {
    users: {
        Abhi: {
            name: "Abhi",
            activeThread: "Simran", // "Simran" or "Meetu
            threads: {
                Simran: {
                    messages: [
                        {
                            text: "Hi Simran Bhaiya",
                            timeStamp: new Date().getTime(),
                            from: "Abhi"
                        }
                    ]
                },
                Meetu: {
                    messages: [
                        {
                            text: "Hi Meetu Bhabhi",
                            timeStamp: new Date().getTime(),
                            from: "Abhi"
                        }
                    ]
                }
            }
        },
        Simran: {
            name: "Simran",
            activeThread: "Abhi", // "Abhi" or "Meetu
            threads: {
                Abhi: {
                    messages: [
                        {
                            text: "Hi Abhi, my Tiger",
                            timeStamp: new Date().getTime(),
                            from: "Simran"
                        }
                    ]
                },
                Meetu: {
                    messages: [
                        {
                            text: "Hi Meetu, my Puchuu",
                            timeStamp: new Date().getTime(),
                            from: "Simran"
                        }
                    ]
                }
            }
        },
        Meetu: {
            name: "Meetu",
            activeThread: "Simran", // "Simran" or "Abhi
            threads: {
                Abhi: {
                    messages: [
                        {
                            text: "Hi Devar ji",
                            timeStamp: new Date().getTime(),
                            from: "Meetu"
                        }
                    ]
                },
                Simran: {
                    messages: [
                        {
                            text: "Hi my Love",
                            timeStamp: new Date().getTime(),
                            from: "Meetu"
                        }
                    ]
                }
            }
        }
    }
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
