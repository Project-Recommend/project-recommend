import React from "react";
// import bg from "home_page_background.jpg";
// const homeStyle = {
//     backgroundImage: "url(" + bg + ")",
// };

function Banner() {
    return (
        <section id="home" className="home-banner-01 bg-no-repeat bg-cover bg-fixed home-bg tint-bg-1">
            <div className="container">
                <div className="row full-screen align-items-center">
                    <div className="col-md-12 col-lg-9 text-left">
                        <div className="home-text">
                            <h1>
                                Stock<span id="coloured">'</span>d
                            </h1>
                            <h2>Easily track the metrics of your favourite companies</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
