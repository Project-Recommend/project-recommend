import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import TeamPage from "./views/TeamPage/TeamPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import RecommendPage from "./views/RecommendPage/RecommendPage";
import CatalogPage from "./views/CatalogPage/CatalogPage";
import ProjectsPage from "./views/ProjectsPage/ProjectsPage";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
// import CartPage from "./views/CartPage/CartPage";
import UserAccountPage from "./views/UserAccountPage/UserAccountPage";
import UserTeamsPage from "./views/UserTeamsPage/UserTeamsPage";
import UserSettingsPage from "./views/UserSettingsPage/UserSettingsPage";
// import HistoryPage from "./views/HistoryPage/HistoryPage";

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NavBar />
            <div className="bodyContent">
                <Switch>
                    <Route exact path="/" component={Auth(LandingPage, null)} />
                    <Route exact path="/login" component={Auth(LoginPage, false)} />
                    <Route exact path="/register" component={Auth(RegisterPage, false)} />
                    <Route exact path="/team" component={Auth(TeamPage, null)} />
                    <Route exact path="/recommend" component={Auth(RecommendPage, true)} />
                    <Route exact path="/catalog" component={Auth(CatalogPage, true)} />
                    <Route exact path="/projects" component={Auth(ProjectsPage, true)} />
                    <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
                    <Route exact path="/product/:productId" component={Auth(DetailProductPage, true)} />
                    {/* <Route exact path="/user/cart" component={Auth(CartPage, true)} /> */}
                    <Route exact path="/user/account" component={Auth(UserAccountPage, true)} />
                    <Route exact path="/user/teams" component={Auth(UserTeamsPage, true)} />
                    <Route exact path="/user/settings" component={Auth(UserSettingsPage, true)} />
                    {/* <Route exact path="/history" component={Auth(HistoryPage, true)} /> */}
                </Switch>
            </div>
            <Footer />
        </Suspense>
    );
}

export default App;
