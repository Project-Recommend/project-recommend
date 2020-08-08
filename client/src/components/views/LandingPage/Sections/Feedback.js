import React from "react";

function Feedback() {
    return (
        <>
            <h6>Let's Chat</h6>
            <h2>
                Get in <span id="coloured">Contact</span>
            </h2>
            <div className="contact-form">
                <p> For any enquiries email projectrecommend@gmail.com or send us a message below.</p>
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
                                <button type="submit" className="m-btn m-btn-theme">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>Send!
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Feedback;
