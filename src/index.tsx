import React, {useEffect, useReducer} from "react";
import ReactDOM from "react-dom/client";
import useFetch from "./hooks/useFetch";
import productReducer, {INITIAL_PRODUCT_REDUCER_STATE} from "./reducers/productReducer";
import Product from "./components/Product";
import ProductInCart from "./components/ProductInCart";
import Cart from "./components/Cart";


const App = () => {
    const [loading, data] = useFetch('https://fakestoreapi.com/products')
    const [state, dispatch] = useReducer(productReducer, INITIAL_PRODUCT_REDUCER_STATE);

    useEffect(() => {
        if (!loading && data) {
            dispatch({type: "ADD_PRODUCTS", payload: data})
        }
    }, [loading])


    function isInCart(product) {
        return state.cart.some((p) => p.id === product.id)
    }

    return <div className="listing">
        <div className="products">
            {state.products
                ? state.products.map((p) => <Product key={p.id} product={p} isInCart={isInCart(p)} dispatch={dispatch}/>)
                : <h1>Loading...</h1>}
        </div>
        <Cart cart={state.cart} dispatch={dispatch} />
    </div>
}







const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
)