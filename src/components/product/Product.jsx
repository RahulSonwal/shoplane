import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addCart, addFav } from '../../redux/action'
import { NavLink, useParams } from 'react-router-dom'
import { AiOutlineLoading3Quarters, AiFillStar } from 'react-icons/ai'
import { BsCart4 } from 'react-icons/bs'
import { MdFavorite } from 'react-icons/md'
import './product.css'

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispacth = useDispatch();
    const addProduct = (product) => {
        dispacth(addCart(product));
    }

    const addProductFav = (product) => {
        dispacth(addFav(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false)
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className='loading'>
                    <AiOutlineLoading3Quarters />
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="product-container">
                    <div>
                        <img className='product-img' src={product.image} alt={product.title} />
                    </div>
                    <div className='product-body-container'>
                        <h4>{product.category}</h4>
                        <h1>{product.title}</h1>
                        <p>Rating {product.rating && product.rating.rate} <AiFillStar /></p>
                        <h3>${product.price}</h3>
                        <p className='product-desc'>{product.description}</p>
                        <div className='pc-buttons'>
                            <button className='product-btn' onClick={() => addProduct(product)}><BsCart4 />Add to Cart</button>
                            <button className='product-btn-fav' onClick={() => addProductFav(product)}><MdFavorite />Add to Favorite</button>
                            <NavLink to="/cart">Go to Cart</NavLink>
                            <NavLink to="/products">Continue Shopping</NavLink>
                        </div>

                    </div>
                </div>
            </>
        )
    }

    return (

        <div>
            {loading ? <Loading /> : <ShowProduct />}
        </div>
    )
}

export default Product