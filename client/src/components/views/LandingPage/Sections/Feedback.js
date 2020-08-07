import React from "react";

function Feedback() {
    return (
        <section id="feedback" className="section gray-bg-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-lg-12">
                        <div className="section-title">
                            <h6>Let's Chat</h6>
                            <h2>
                                Get in <span id="coloured">Contact</span>
                            </h2>
                            <p>Feedback is very important for improvement. I'm always open to advice, tips or ideas!</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-4">
                        <div className="contact-info">
                            <div className="ci-row">
                                <i className="theme-bg ti-book"></i>
                                <label>Medium</label>
                                <span id="contact_us_link">
                                    <a href="https://medium.com/@davidsangojinmi">@davidsangojinmi</a>
                                </span>
                            </div>
                            <div className="ci-row">
                                <i className="theme-bg ti-github"></i>
                                <label>GitHub</label>
                                <span id="contact_us_link">
                                    <a href="https://github.com/David-Sangojinmi">@David-Sangojinmi</a>
                                </span>
                            </div>
                            <div className="ci-row">
                                <i className="theme-bg ti-email"></i>
                                <label>Email</label>
                                <span>davidsangojinmi @gmail.com</span>
                            </div>
                            <div className="ci-row">
                                <i className="theme-bg ti-direction"></i>
                                <label>Location</label>
                                <span>London, United-Kingdom</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-8">
                        <div className="contact-form">
                            <h2>Feel free to send me a message with any suggestions!</h2>
                            <form action="https://formspree.io/mjvayrow" method="POST">
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
                                            <button type="submit" className="m-btn m-btn-theme">
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
    );
}

export default Feedback;
