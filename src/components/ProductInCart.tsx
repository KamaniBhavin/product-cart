import React, {FC} from "react";


const ProductInCart: FC<{ product, dispatch }> = ({product, dispatch}) => {
    return <div className="product-in-cart">
        <img className="product-in-cart-img" src={product.image} alt={product.title}/>
        <div className="product-in-cart-desc">
            <div>{product.title}</div>
            <b>{product.price}</b>
            <div className="product-in-cart-quantity">
                <button onClick={() => {
                    dispatch({type: "DECREASE_QTY", payload: product.id})
                }} className="decrement-btn">-
                </button>
                <div>{product.quantity}</div>
                <button onClick={() => {
                    dispatch({type: "INCREASE_QTY", payload: product.id})
                }} className="increment-btn">+
                </button>
            </div>
        </div>

    </div>
}

export default ProductInCart