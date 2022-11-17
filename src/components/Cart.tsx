import ProductInCart from "./ProductInCart";
import React, {FC, useEffect, useState} from "react";
import product from "./Product";


const Cart: FC<{cart, dispatch}> = ({cart, dispatch}) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc, p) => acc + (Number(p.price) * Number(p.quantity)), 0))
    })

    return <div className="cart">
        <div>
            <h1>Cart</h1>
            <h3>Cart Total: {total}</h3>
        </div>
        {cart
            ? cart.map((p) => <ProductInCart key={p.id} product={p} dispatch={dispatch} />)
            : <h1>Loading...</h1>
        }
    </div>
}

export default Cart