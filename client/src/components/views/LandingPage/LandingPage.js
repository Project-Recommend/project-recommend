import React from "react";
import { Layout, Icon, Col, Row } from "antd";
import Banner from "./Sections/Banner";
import About from "./Sections/About";
import Feedback from "./Sections/Feedback";

function LandingPage() {
    return (
        <>
            <section
                className="home-banner bg-no-repeat bg-cover bg-fixed home-bg tint-bg-1"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1516314568916-add4c55e2668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)" }}
            >
                <div className="container">
                    <div className="row full-screen align-items-center">
                        <div className="col-md-12 col-lg-9 text-left">
                            <div className="home-text">
                                <h1>Leading you to your next, best, project</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section gray-bg-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Our Story</h2>
                            <p>
                                During a four-week project-based learning curriculum, our founders were brought together by the desire to fix a shared problem. Over the four weeks we researched deeper into
                                the problem domain and affected parties, took on the advice of our peers and potential users, and fine-tuned the solution with the help of mentors. From this, we decided
                                to create Project Recommend.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-between about-section">
                        <div className="col-xs-12 col-sm-6 col-lg-4 text-center">
                            <Icon type="warning" className="big-icons" />
                            <h3>The problem</h3>
                            <p>People spend anywhere from 10 minutes to several hours when searching for programming-based projects to do. This time would be better spend doing the projects.</p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-lg-4 text-center">
                            <Icon type="clock-circle" className="big-icons" />
                            <h3>Why now</h3>
                            <p>Covid-19 has caused millions to become unemployed and lose internships. Students and professionals need projects to boost their profiles.</p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-4 text-center">
                            <Icon type="team" className="big-icons" />
                            <h3>Who is affected</h3>
                            <p>
                                Students thinking of, or currently applying to internships. Unemployed people trying to secure programming roles. Hobbyists who would like to save time on finding
                                projects to do.
                            </p>
                        </div>
                    </div>
                    <div className="row about-section">
                        <div className="col-12 text-center">
                            <h2>Our solution</h2>
                            <p>
                                Our platform provides a way for you to: find projects quickly and efficiently, track the projects they are doing, and form teams to partake in group projects. Soon, we
                                will also add a feature that gives users advice on how to talk about projects they have completed in their resumes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section gray-bg-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4" id="feedback-text">
                            <div>
                                <h6>Let's Chat</h6>
                                <h2>Get in Contact</h2>
                            </div>
                            <p>
                                We created this platform to help students and professionals. We would love to hear your feedback and experiences using the platform! You can send us a message using
                                this form or email us at{" "}
                                <a href="mailto:projectrecommend@gmail.com">
                                    <strong>projectrecommend@gmail.com</strong>
                                </a>
                                .
                            </p>
                            <p>You can also follow us on LinkedIn, just search for Project Recommend.</p>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="contact-form">
                                <form action="https://formspree.io/mwkryggv" method="POST">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="Full-Name">Name</label>
                                                <input name="Name" placeholder="First and/or Last" className="form-control" type="text" />
                                                <span className="input-focus-effect"></span>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="Email-Address">Email Address</label>
                                                <input name="Email" placeholder="someone@example.com" className="form-control" type="email" />
                                                <span className="input-focus-effect"></span>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="Message">Message</label>
                                                <textarea name="Message" placeholder="Type message here." className="form-control"></textarea>
                                                <span className="input-focus-effect"></span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="send">
                                                <button type="submit" className="m-btn m-btn-red m-btn-theme">
                                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>Send!
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LandingPage;
