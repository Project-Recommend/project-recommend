import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <h2>{Product.title}</h2>
            <p>
                <b>Description: </b>
                {Product.description}
            </p>
            <p>
                <b>Link: </b>
                <a href={Product.link}>{Product.link}</a>
            </p>
            <p>
                <b>Language: </b>
                {Product.codinglanguage}
            </p>
            <p>
                <b>Skill level: </b>
                {Product.skilllevel}
            </p>
            <p>
                <b>Participation: </b>
                {Product.participation}
            </p>
            <p>
                <b>Tags: </b>
                {Product.tag}
            </p>

            <br />
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button size="large" shape="round" type="danger" onClick={addToCarthandler}>
                    Add to My Projects
                </Button>
            </div>
        </div>
    );
}

export default ProductInfo
