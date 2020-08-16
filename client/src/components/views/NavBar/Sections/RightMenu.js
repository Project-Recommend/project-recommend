/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu, Icon, Badge } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function RightMenu(props) {
    const user = useSelector((state) => state.user);

    const logoutHandler = () => {
        axios.get(`${USER_SERVER}/logout`).then((response) => {
            if (response.status === 200) {
                props.history.push("/login");
            } else {
                alert("Log Out Failed");
            }
        });
    };

    if (user.userData && !user.userData.isAuth) {
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="mail">
                    <a href="/login">Signin</a>
                </Menu.Item>
                <Menu.Item key="app">
                    <a href="/register">Signup</a>
                </Menu.Item>
            </Menu>
        );
    } else {
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="recommend">
                    <a href="/recommend">Recommend</a>
                </Menu.Item>

                <Menu.Item key="catalog">
                    <a href="/catalog">Catalog</a>
                </Menu.Item>

                <Menu.Item key="projects">
                    <a href="/projects">Projects</a>
                </Menu.Item>

                {/* <Menu.Item key="history">
          <a href="/history">History</a>
        </Menu.Item> */}

                {/* <Menu.Item key="upload">
          <a href="/product/upload">Upload</a>
        </Menu.Item> */}

                {/* <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
                    <Badge count={user.userData && user.userData.cart.length}>
                        <a href="/user/cart" style={{ marginRight: -22, color: "#667777" }}>
                            <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 3 }} />
                        </a>
                    </Badge>
                </Menu.Item> */}

                <SubMenu title={<span>You</span>}>
                    <MenuItemGroup title="">
                        <Menu.Item key="setting:1"><a href="/user/account">Account</a></Menu.Item>
                        <Menu.Item key="setting:2"><a href="/user/teams">Teams</a></Menu.Item>
                        <Menu.Item key="setting:3"><a href="/user/settings">Settings</a></Menu.Item>
                        <Menu.Item key="logout">
                            <a onClick={logoutHandler}>Logout</a>
                        </Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
        );
    }
}

export default withRouter(RightMenu);
