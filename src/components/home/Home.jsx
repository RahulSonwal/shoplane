import React from 'react'
import './home.css'
import Products from '../products/Products'

const Home = () => {
    return (
        <>
            <div className='hore'>
                <h5 className='card-title'>NEW SEASON ARRIVALS</h5>
                <p class="card-text">Checkout all the <span className='trends-text'><i>Trends</i></span></p>
            </div>
            <Products />
        </>
    )
}

export default Home