import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import Header from '../../Components/Header'
import "./style.css"

const Detail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState({ description: "This film don't have description" })
    useEffect(() => {
        async function getData() {
            const temp = await await axios({
                method: "get",
                url: `https://crosstech2020-e8043.firebaseio.com/product/${id}.json`
            });
            let data = temp;
            console.log(data.data)
            setDetail(data.data);
        }
        getData();
    }, [])
    console.log(detail)
    return (
        <div>
            <div className="wrap-cart-header">
                <Header />
            </div>
            <div className="wrap-detail">
                <img src={detail.image} className="wrap-image" />
                <h3>{detail.description}</h3>
            </div>
        </div>)
}

export default Detail;