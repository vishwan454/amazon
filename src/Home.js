import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
           <img className="home__image" src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2020/08/25th-Aug-1-1024x576.jpg" alt="banner image" />

           {/* product */}
           <div className="home__row">
                <Product
                id="12344"
                title="this is produx"
                price={123}
                rating={4}
                image="https://image.freepik.com/free-vector/same-day-delivery-banner_37225-374.jpg"
                />
                <Product
                id="12344"
                title="this is produx"
                price={123}
                rating={4}
                image="https://image.freepik.com/free-vector/same-day-delivery-banner_37225-374.jpg"
                />
           </div>
           <div className="home__row">
                <Product
                id="12344"
                title="this is produx"
                price={123}
                rating={4}
                image="https://image.freepik.com/free-vector/same-day-delivery-banner_37225-374.jpg"
                />
                <Product
                id="12344"
                title="this is produx"
                price={123}
                rating={4}
                image="https://image.freepik.com/free-vector/same-day-delivery-banner_37225-374.jpg"
                />
                <Product
                id="12344"
                title="this is produx"
                price={123}
                rating={4}
                image="https://image.freepik.com/free-vector/same-day-delivery-banner_37225-374.jpg"
                />
           </div>
           <div className="home__row">
                <Product
                id="12344"
                title="this is produx"
                price={123}
                rating={4}
                image="https://image.freepik.com/free-vector/same-day-delivery-banner_37225-374.jpg"
                />
                
           </div>
          
        </div>
    )
}

export default Home
