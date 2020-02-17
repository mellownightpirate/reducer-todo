import uuid from "uuid";

export const initialState = [
    {
        item: 'Submit retro form',
        completed: false,
        id: uuid(),
        itemArray: []
    },

    {
        item: 'Some other task',
        completed: false,
        id: uuid(),
        itemArray: []
    }
];

export const listReducer = (state, action) => {
    switch (action.type) {
        case "ADD-TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                id: uuid()
            }
            return [...state, newTodo]
        case "COMPLETED":
            return state.map(event => event.id === action.id ? { ...event, completed: !event.completed } : event);
        case "REMOVE":
            return state.filter(event => !event.completed);



        default:
            throw state;
    }
}; 