export const INITIAL_PRODUCT_REDUCER_STATE = {
    products: [],
    cart: []
}

function productReducer(state, action) {
    switch (action.type) {
        case "ADD_PRODUCTS":
            return {...state, products: action.payload};

        case "ADD_TO_CART":
            return {...state, cart: state.cart.concat([action.payload])}

        case "REMOVE_FROM_CART":
            return {...state, cart: state.cart.filter((p) => p.id !== action.payload)}

        case "INCREASE_QTY": {
            const product = state.cart.find((p) => p.id === action.payload);
            product.quantity = product.quantity + 1
            return {...state, cart: [...state.cart]}
        }

        case "DECREASE_QTY": {
            const product = state.cart.find((p) => p.id === action.payload);
            product.quantity = product.quantity - 1

            if (product.quantity === 0) {
                state.cart = state.cart.filter((p) => p.id !== action.payload)
            }

            return {...state, cart: [...state.cart]}
        }

        default:
            return state;
    }
}

export default productReducer;