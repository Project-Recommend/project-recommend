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
            <Descriptions title="">
                <Descriptions.Item label="Title">{Product.title}</Descriptions.Item>
                <Descriptions.Item label="Description">{Product.description}</Descriptions.Item>
                <Descriptions.Item label="Link">
                    <a href={Product.link}>{Product.link}</a>
                </Descriptions.Item>
                <Descriptions.Item label="Language">{Product.codinglanguage}</Descriptions.Item>
                <Descriptions.Item label="Skill Level">{Product.skilllevel}</Descriptions.Item>
                <Descriptions.Item label="Participation">{Product.participation}</Descriptions.Item>
                <Descriptions.Item label="Tags">{Product.tag}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button size="large" shape="round" type="danger" onClick={addToCarthandler}>
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}

export default ProductInfo
