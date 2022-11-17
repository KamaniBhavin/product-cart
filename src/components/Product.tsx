import React, {FC} from "react";
import "../styles.css"

const Product: FC<{ product, isInCart, dispatch }> = ({product, isInCart, dispatch}) => {
    return <div className="product">
        <img className="product-img" src={product.image} alt={product.title}/>
        <div className="product-desc">
            <p>{product.title}</p>
            <b>{product.price}</b>
        </div>
        {
            isInCart
                ? <button onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: product.id})}
                          className="remove-from-cart">Remove from cart</button>
                : <>
                    <button onClick={() => {
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: {
                                id: product.id,
                                title: product.title,
                                image: product.image,
                                quantity: 1,
                                price: product.price
                            }
                        })
                    }} className="add-to-cart-btn">Add to cart
                    </button>
                </>
        }
    </div>
}

export default Product;