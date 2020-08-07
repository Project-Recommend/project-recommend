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
                <div class="container">
                    <Banner />
                </div>
            </section>
            <section>
                <div class="container">
                    <About />
                </div>
            </section>
            <section>
                <div class="container">
                    <Feedback />
                </div>
            </section>
        </>
    );
}

export default LandingPage;
