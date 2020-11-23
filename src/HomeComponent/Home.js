import React from 'react'
import Product from '../ProductComponent/Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                className="home__image"
                alt="" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Chhalaang/postDiwali/3000x1200_Hero-Tall_p._CB417284641_.jpg" />
                <div className="home__row">
                    <Product 
                    id={1000}
                    title="Lenovo Yoga" 
                    image="https://m.media-amazon.com/images/I/51wwWM-rhLL.__AC_SY400_.jpg"
                    price={200}
                    rating={4}
                    />
                    <Product 
                    id={1001}
                    title="Thomson TV" 
                    image="https://m.media-amazon.com/images/I/71m0WVrksrL._AC_SY400_.jpg"
                    price={100}
                    rating={5}
                    />
                    <Product 
                    id={1002}
                    title="Samsung Mobile" 
                    image="https://m.media-amazon.com/images/I/410b3ttpfAL.__AC_SY400_.jpg"
                    price={50}
                    rating={3}
                    />
                </div>
                <div className="home__row">
                <Product 
                    id={1003}
                    title="Chetan Bhagat Book" 
                    image="https://m.media-amazon.com/images/I/61r-WomIz0L._AC_SY400_.jpg"
                    price={10}
                    rating={3}
                    />
                    <Product 
                    id={1004}
                    title="Barak Obama Book" 
                    image="https://m.media-amazon.com/images/I/91Cz5v-GSjL._AC_SY400_.jpg"
                    price={20}
                    rating={4}
                    />
                </div>
                <div className="home__row">
                <Product 
                    id={1005}
                    title="Mattress" 
                    image="https://m.media-amazon.com/images/I/41cDJCiO6TL.__AC_SY400_.jpg"
                    price={75}
                    rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
