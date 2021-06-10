import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Dropdown , Breadcrumb, Table, Tag, Space, Avatar, Divider, Tooltip } from "antd";
import { UserOutlined, DownOutlined  } from '@ant-design/icons';

import Logo from "../images/logo.svg";
const { Header, Content, Footer } = Layout;

function Index() {
    const menu = (
        <Menu >
          <Menu.Item key="1">Profile</Menu.Item>
          <Menu.Item key="2">Logout</Menu.Item>
        </Menu>
      );
  return (
    <>
      <section className="dashboard_section">
          <Header>
            <div className="container">
              <div className="row">
                <div className="col-sm-8">
                  <Link to="/" className="logo">
                    <img src={Logo} style={{ height: 35, marginRight: 15 }} />
                    ActivePhysioGym
                  </Link>
                </div>
                <div className="col-sm-4 text-end">
                <Tooltip title="Veera" placement="top">
        <Avatar style={{ backgroundColor: '#1890ff', marginRight:10 }} icon={<UserOutlined />} />
      </Tooltip>
                <Dropdown
        overlay={menu}
        // onVisibleChange={this.handleVisibleChange}
        // visible={this.state.visible}
      >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Veera <DownOutlined />
        </a>
      </Dropdown>
                </div>
              </div>
            </div>
          </Header>
          <nav className="dash_nav">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                  >
                    <Menu.Item key="1">
                      <Link to="/Dashboard">Dashbord</Link>
                    </Menu.Item>
                    <Menu.Item key="2"><Link to="/Attendance">Attendance</Link></Menu.Item>
                    {/* <Menu.Item key="3">nav 3</Menu.Item> */}
                  </Menu>
                </div>
              </div>
            </div>
           
          </nav>
      </section>
    </>
  );
}

export default Index;
