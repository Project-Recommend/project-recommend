import React from "react";
import { Layout, Icon, Col, Card, Row } from "antd";
import Banner from "./Sections/Banner";
import About from "./Sections/About";
import Feedback from "./Sections/Feedback";

const { Header, Sider, Content, Footer } = Layout;
const { Meta } = Card;

function LandingPage() {
    return (
        <>
            <section>
                <div className="container">
                    <Banner />
                </div>
            </section>
            <section>
                <div className="container">
                    <About />
                </div>
            </section>
            <section>
                <div className="container">
                    <Feedback />
                </div>
            </section>
        </>
    );
}

export default LandingPage;
