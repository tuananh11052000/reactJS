import React from 'react'
import Header from '../../Components/Header'
import "./style.css"

function Home() {
    return (
        <div>
            <div className="wrap-cart-header">
                <Header />
            </div>
            <div className="Body-HomePage">
                <div>
                    <h1>WELLCOME TO MY PROJECT</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;