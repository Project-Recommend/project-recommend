import React from "react";
import ShrayTyagi from "./ShrayTyagi.png";
import DavidSangojinmi from "./DavidSangojinmi.png";
import AkshatChandel from "./AkshatChandel.png";
import ArchnaSobti from "./ArchnaSobti.png";
import SaneelaGuaher from "./SaneelaGuaher.png";
import { Layout, Icon, Col, Row } from "antd";

function TeamPage() {
    return (
        <>
            <section className="section gray-bg-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Our Story</h2>
                            <p>
                                During the summer of 2020, we all decided to join a program called Nu School. Many internships and career related opportunities had been cancelled, and Nu School was
                                the perfect chance to gain some skills. We engaged in various webinars, individual and group activities. One of those group activities involved coming up with a
                                solution to a problem that affects at least one person in the world today.
                            </p>
                            <br />
                            <p>
                                The idea we came up with as a collective, affects much more than one person. Hundreds of thousands of people across the globe are trying to break into the programming
                                industry and projects are a viable way for them to show their knowledge to employers. After talking with other students and professionals, we realised that this was
                                something that needed to be pursued. From this we created Project Recommend.
                            </p>
                            <br />
                            <p>
                                We are all students, taking or completing degrees in Computer Science, Electronics, IT and Engineering. You can reach us individually on the LinkedIn and email provided
                                above or email the team at <a href="mailto:projectrecommend@gmail.com">projectrecommend@gmail.com</a>.
                            </p>
                            <br />
                        </div>
                    </div>
                    <div className="row text-center justify-content-between about-section">
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            <div className="col-12 profile-cover">
                                <img src={ShrayTyagi} className="profile-pics" />
                            </div>
                            <h4>Shray</h4>
                            <p>
                                <a href="https://www.linkedin.com/in/shray-tyagi/">LinkedIn</a>
                            </p>
                            <p>
                                <a href="mailto:shraytyagi1408@gmail.com">Email</a>
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            <div className="col-12 profile-cover">
                                <img src={DavidSangojinmi} className="profile-pics" />
                            </div>
                            <h4>David</h4>
                            <p>
                                <a href="https://linkedin.com/in/david-sangojinmi/">LinkedIn</a>
                            </p>
                            <p>
                                <a href="mailto:davidsangojinmi@gmail.com">Email</a>
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            <div className="col-12 profile-cover">
                                <img src={AkshatChandel} className="profile-pics" />
                            </div>
                            <h4>Akshat</h4>
                            <p>
                                <a href="https://www.linkedin.com/in/akshatchandel/">LinkedIn</a>
                            </p>
                            <p>
                                <a href="mailto:akshatchandel92@gmail.com">Email</a>
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            <div className="col-12 profile-cover">
                                <img src={ArchnaSobti} className="profile-pics" />
                            </div>
                            <h4>Archna</h4>
                            <p>
                                <a href="https://www.linkedin.com/in/archna-sobti-1932b01b1/">LinkedIn</a>
                            </p>
                            <p>
                                <a href="mailto:sobtiarchna@gmail.com">Email</a>
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            <div className="col-12 profile-cover">
                                <img src={SaneelaGuaher} className="profile-pics" />
                            </div>
                            <h4>Saneela</h4>
                            <p>
                                <a href="https://www.linkedin.com/in/saneela-gauhar-1b7a721a0/">LinkedIn</a>
                            </p>
                            <p>
                                <a href="mailto:saneelagauhar@gmail.com">Email</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamPage;
