import { ADD } from "../actions/action";

const initialState = {
    carts: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }

        default:
            return state;
    }
}