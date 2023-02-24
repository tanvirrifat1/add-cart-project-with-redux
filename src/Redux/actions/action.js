import { ADD_CART } from "./actionTypes"

export const ADD = (value) => {
    return {
        type: ADD_CART,
        payload: value
    }
}