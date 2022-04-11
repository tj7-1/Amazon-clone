import React from 'react'
import Product from './Product';

import Product1 from "../src/images/product1.jpg";
import Product2 from "../src/images/product2.jpg";
import Product3 from "../src/images/product3.jpg";
import Product4 from "../src/images/product4.jpg";
import Product5 from "../src/images/product5.jpg";
import Product6 from "../src/images/product6.jpg";

import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Home"/>
                
                <div className="home_row">
                    {/* 2 Products */}
                    <Product id="745242" 
                            title="Turtles All the Way Down Paperback – 10" 
                            price={399} 
                            image={Product1} 
                            rating={4}
                            />
                    <Product id="94735274" 
                            title="Harry Potter And The Cursed Child By J.K R" 
                            price={700} 
                            image={Product2} 
                            rating={5}/>
                </div>

                <div className="home_row">
                    {/* 3 Products */}
                    <Product id="94836284" 
                            title="27 Best Black T-shirts for Men 2021" 
                            price={650} 
                            image={Product3} 
                            rating={3}/>
                    <Product id="18476356" 
                            title="UNISEX REGULAR FIT" 
                            price={550} 
                            image={Product4} 
                            rating={4}/>
                    <Product id="1098355" 
                            title="Women's T-Shirts – Cottonworld" 
                            price={600} 
                            image={Product5} 
                            rating={2}/>
                </div>

                <div className="home_row">
                    {/* 1 Products */}
                    <Product id="764735476"
                            title="Microsoft Surface Laptop Go - 12.4 Touchscreen - Intel Core i5 - 8GB Memory - 128GB SSD - Platinum" 
                            price={60000} 
                            image={Product6} 
                            rating={5}/>
                </div>

            </div>
        </div>
    );
}

export default Home
