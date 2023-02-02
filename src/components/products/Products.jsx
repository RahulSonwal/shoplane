import React from 'react'
import { useState, useEffect } from 'react'
import './products.css'
import { AiOutlineLoading3Quarters, AiFillStar } from 'react-icons/ai'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { NavLink } from 'react-router-dom'


const Products = () => {


    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts()
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

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList)
    }

    const ShowProducts = () => {
        return (
            <>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="prod-card-container">
                                <div className='prod-card'>
                                    <div>
                                        <img src={product.image} className="prod-card-img" alt={product.title} />
                                    </div>
                                    <div className='prod-card-body'>
                                        <h5 className='prod-card-title'>{product.title}</h5>
                                        <p className='prod-card-rating'>Rating {product.rating && product.rating.rate} <AiFillStar /></p>
                                        <p className='prod-card-price'>${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className='prod-cart-btn'>Buy Now<IoIosArrowDroprightCircle /></NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </>
        )
    }



    return (
        <div >
            <div className='prod-title-btn'>
                <div className='products-title'>
                    <h1>LATEST <span className='prod-span'><i>Products</i></span></h1>
                </div>
                <div className="prod-buttons">
                    <button className="prod-btn" onClick={() => setFilter(data)}>All</button>
                    <button className="prod-btn" onClick={() => filterProduct("electronics")}>Electronics</button>
                    <button className="prod-btn" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="prod-btn" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="prod-btn" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                </div>
            </div>
            <div className="products-container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products