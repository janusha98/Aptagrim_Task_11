import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGem, FaHeart } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
// import { Link } from "react-router-dom";
const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const styles = {
    sideBarHeight: {
      height: "100vh"
    },
    menuIcon: {
      float: "right",
      margin: "10px"
    }
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={<FaGem />}> Dashboard</MenuItem>
        <MenuItem icon={<FaGem />}>Employees</MenuItem>
        <SubMenu title="Stages" icon={<FaHeart />}>
          <MenuItem>Offer Letter</MenuItem>
          <MenuItem>Skill Matrix</MenuItem>
          <MenuItem>Know Your Company</MenuItem>
          <MenuItem>Joining Day Information</MenuItem>
          <MenuItem>Feedback</MenuItem>
          <MenuItem>Background Check</MenuItem>
        </SubMenu>
        <MenuItem icon={<FaGem />}>Settings</MenuItem>
      </Menu>
    </ProSidebar>
  );
};
export default SideNavigation;
