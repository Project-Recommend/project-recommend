import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProjects, removeProjects } from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock.js";
import { Result, Empty } from "antd";

function ProjectsPage(props) {
    const dispatch = useDispatch();
    const [Total, setTotal] = useState(0);
    const [ShowTotal, setShowTotal] = useState(false);

    useEffect(() => {
        let cartItems = [];
        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach((item) => {
                    cartItems.push(item.id);
                });
                dispatch(getProjects(cartItems, props.user.userData.cart)).then((response) => {
                    if (response.payload.length > 0) {
                        calculateTotal(response.payload);
                    }
                });
            }
        }
    }, [props.user.userData]);

    const calculateTotal = (cartDetail) => {
        let total = 0;

        cartDetail.map((item) => {
            total += parseInt(item.price, 10) * item.quantity;
        });

        setTotal(total);
        setShowTotal(true);
    };

    const removeFromCart = (productId) => {
        dispatch(removeProjects(productId)).then((response) => {
            if (response.payload.cartDetail.length <= 0) {
                setShowTotal(false);
            } else {
                calculateTotal(response.payload.cartDetail);
            }
        });
    };

    return (
        <>
            <div style={{ width: "85%", margin: "3rem auto" }}>
                <h1>My Projects</h1>
                <div>
                    <UserCardBlock products={props.user.cartDetail} removeItem={removeFromCart} />

                    {ShowTotal ? (
                        <div style={{ marginTop: "3rem" }}>
                            <h2></h2>
                        </div>
                    ) : (
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <br />
                            <Empty description={false} />
                            <p>No projects yet...</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProjectsPage;
