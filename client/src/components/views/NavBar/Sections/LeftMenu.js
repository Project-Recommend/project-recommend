import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="team">
      <a href="/team">The Team</a>
    </Menu.Item>
    {/* <SubMenu title={<span>User</span>}>
      <MenuItemGroup title="">
        <Menu.Item key="setting:1">Account</Menu.Item>
        <Menu.Item key="setting:2">Teams</Menu.Item>
        <Menu.Item key="setting:3">Settings</Menu.Item>
      </MenuItemGroup>
    </SubMenu> */}
  </Menu>
  )
}

export default LeftMenu