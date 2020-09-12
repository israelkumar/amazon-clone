import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" alt="homelogo"
                 src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/f4b165f5-678a-48bb-a049-11e7ddc2168d._UR3000,600_SX1500_FMwebp_.jpg">
                </img>
            <div className="home_row"> 
                <Product id="12345678" title="The Lean Startup: How constant innovation creates radically successfull business" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={4} ></Product>
                <Product id="23456781" title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer Red" image="https://images-na.ssl-images-amazon.com/images/I/71V2DtObsPL._AC_SL1500_.jpg" price={329.99}  rating={5}></Product>
            </div>
            <div className="home_row"> 
                <Product
                    id="323456782"
                    title="Fitbit Versa 3 Health & Fitness Smartwatch with GPS, 24/7 Heart Rate"
                    price={229.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71aTmENHRIL._AC_SL1500_.jpg"
                />
                <Product
                    id="423456783"
                    title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
                    price={39.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"
                />
                <Product
                    id="523456784"
                    title="Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Silver (4th Generation)"
                    price={939.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home_row"> 
            <Product
                    id="623456785"
                    title="Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) – LED Gaming Monitor"
                    price={399.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg"
            />         
            </div>
            </div>
            
        </div>
    )
}

export default Home
