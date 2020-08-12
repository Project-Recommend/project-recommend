import React from "react";
import { Icon } from "antd";


function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer-logo">Project Recommend</div>
                <a href="https://github.com/project-recommend"><Icon type="linkedin" className="footer-links footer-icons" /></a><a href="mailto:projectrecommend@gmail.com"><Icon type="mail" className="footer-links footer-icons" /></a>
                <p>© 2020. All rights reserved</p>
            </div>
        </section>
    );
}

export default Footer;
