import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            
            <div className="home_container">
                <img 
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                alt=""                   
                /> 
           
            
            <div className="home_row">
                <Product
                title='Squeeky Washer'
                price={250}
                image="https://images-na.ssl-images-amazon.com/images/I/81TnFPFKuJL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                rating={3}
                 />
                <Product
                title='White Squeeky Washer'
                price={200}
                image="https://images-na.ssl-images-amazon.com/images/I/81dB5tGuLAL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                rating={4}
                 />
                {/* Product */}
            </div>
            <div className="home_row">
               <Product 
                title='Blue Squeeky Washer'
                price={220}
                image="https://images-na.ssl-images-amazon.com/images/I/815nYw6kAmL._AC_SX569_.jpg"
                rating={2}
                   
               /> 
                <Product
                title='Finese Squeeky Washer'
                price={180}
                image="https://images-na.ssl-images-amazon.com/images/I/81Wr1ZbGSLL._AC_SL1500_.jpg"
                rating={1}
                 />
                <Product
                title='Dark Squeeky Washer'
                price={180}
                image="https://images-na.ssl-images-amazon.com/images/I/81Wr1ZbGSLL._AC_SL1500_.jpg"
                rating={1}
                 />
            </div>
            <div className="home_row">
                <Product
                title='Camel Squeeky Washer'
                price={300}
                image="https://images-na.ssl-images-amazon.com/images/I/81ID4RQ5YEL._AC_SX569_.jpg"
                rating={5}
                 />
                {/* Product */}
                {/* Product */}
            </div>
         </div>
        </div>
    )
}

export default Home;
