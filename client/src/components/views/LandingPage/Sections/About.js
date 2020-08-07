import React from "react";

function About() {
    return (
        <section id="about" className="section gray-bg-1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-7">
                        <div className="about-box">
                            <div className="about-project">
                                <h6>Welcome</h6>
                                <h2>
                                    About <span id="coloured">The Project</span>
                                </h2>
                                <p>
                                    Stock'd is a stock tracker application designed and produced by me, <span id="coloured">David Sangojinmi</span>. I am a computer science student with keen interests
                                    in full-stack web development, machine learning and financial technology. This project was a way for me to explore my interest in web-development and financial
                                    technology.
                                </p>
                                <p>
                                    Prior to this, I'd had no experience with using any web development stacks or frameworks in my projects. But I did have some experience with using Javascript,
                                    particularly for building small scale games. Check out my game Odyss3y{" "}
                                    <span id="coloured">
                                        <a href="http://davidsangojinmi.ml/ODYSS3Y">here</a>
                                    </span>
                                    . This greatly influenced the tech stack I decided to use for this project. To use the application and start tracking the stocks of your favourite companies, follow
                                    the steps below.
                                </p>
                                <p>1. </p>
                                <p>2. </p>
                                <p>3. </p>
                                <p>4. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div className="about-box">
                            <div className="about-project">
                                <h6>The</h6>
                                <h2>
                                    Tech <span id="coloured">Stack</span>
                                </h2>
                                <p>
                                    Stock'd is built using the <span id="coloured">MERN</span> stack. I decided to adopt MERN for two main reasons: every line of code can be written in Javascript and
                                    MERN is suited to developing smaller scale applications, like this.
                                </p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="feature-box">
                                            <i className="icon theme-bg" id="stack-text">
                                                M
                                            </i>
                                            <div className="feature-content">
                                                <h5>MongoDB</h5>
                                                <p>A cross-platform NoSQL document orientated database. Flexible and easy to scale.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="feature-box">
                                            <i className="icon theme-bg" id="stack-text">
                                                E
                                            </i>
                                            <div className="feature-content">
                                                <h5>Express.js</h5>
                                                <p>A back-end application framework. Fase and minimalist.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="feature-box">
                                            <i className="icon theme-bg" id="stack-text">
                                                R
                                            </i>
                                            <div className="feature-content">
                                                <h5>React</h5>
                                                <p>A Javascript library for building user interfaces. The defining feature of this stack.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="feature-box">
                                            <i className="icon theme-bg" id="stack-text">
                                                N
                                            </i>
                                            <div className="feature-content">
                                                <h5>Node.js</h5>
                                                <p>A cross-platform Javascript run-time environment. Builds scalable network applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
