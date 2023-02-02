import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addCart, delFav } from '../../redux/action'
import './favorites.css'
import { CgTrashEmpty } from 'react-icons/cg'
import { BsArrowLeft, BsCart4 } from 'react-icons/bs'
import { AiFillStar, AiFillDelete } from 'react-icons/ai'


const Favorites = () => {
    const state = useSelector((state) => state.handleFav)

    const dispatch = useDispatch()

    const handleDel = (item) => {
        dispatch(delFav(item))
    }
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    const emptyCart = () => {
        return (
            <div className="emptycart-container">
                <div>
                    <p><CgTrashEmpty /></p>
                </div>
                <div>
                    <h3>Your Favorites is Empty</h3>
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
                        <p>Rating {product.rating && product.rating.rate}<AiFillStar /></p>
                        <p>${product.price}</p>
                        <button className='product-btn-fav-cart' onClick={() => addProduct(product)}><BsCart4 />Add to Cart</button>
                        <button className='product-btn-fav-del-cart' onClick={() => handleDel(product)}><AiFillDelete />Remove Favorite</button>
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

export default Favorites;