import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addCart, delCart, delAllCart } from '../../redux/action';
import './cart.css'
import { CgTrashEmpty } from 'react-icons/cg'
import { BsArrowLeft } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'

const Cart = () => {
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }
    const handleAllAdd = (item) => {
        dispatch(delAllCart(item))
    }

    const emptyCart = () => {
        return (
            <div className="emptycart-container">
                <div>
                    <p><CgTrashEmpty /></p>
                </div>
                <div>
                    <h3>Your Cart is Empty</h3>
                    <NavLink to="/products"><BsArrowLeft />Start Shopping</NavLink>
                </div>

            </div>
        )
    }
    const cartItems = (product) => {
        return (
            <>
                <div className="cart-container">

                    <div className='cart-img-container'>
                        <img className="cart-img" src={product.image} alt={product.title} />
                    </div>

                    <div className="cart-body-container">
                        <h3>{product.title}</h3>
                        <p className="">
                            {product.qty} X ${product.price} = ${product.qty * product.price}
                        </p>
                        <button className="" onClick={() => handleDel(product)}>
                            -
                        </button>
                        <button className="" onClick={() => handleAdd(product)}>
                            +
                        </button>
                        <div>
                            <h3>Sub Total -<span> ${product.qty * product.price}</span></h3>
                            <p className='all-cart-del' onClick={() => handleAllAdd(product)}><RiDeleteBin6Line /></p>
                        </div>
                    </div>

                </div>
                <hr />
            </>
        )
    }

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
        </div>
    );
}

export default Cart;