import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {Layout, Menu, Dropdown, Breadcrumb, Table, Tag, Space, Avatar, Divider, Tooltip, Popover} from "antd";
import {UserOutlined, DownOutlined, BellOutlined, MailOutlined} from '@ant-design/icons';

import Logo from "../images/logo.svg";

const {Header, Content, Footer} = Layout;

function Index({selectedTab}) {
    const history = useHistory();
    const userName=localStorage.getItem('apg_user_name');
    const menu = (
        <Menu>
            <Menu.Item key="1">Profile</Menu.Item>
            <Menu.Item key="2" onClick={() => history.push('/logout')}>Logout</Menu.Item>
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
                                    <img src={Logo} style={{height: 35, marginRight: 15}}/>
                                    Active Physio Gym
                                </Link>
                            </div>
                            <div className="col-sm-4 text-end d-flex align-items-center justify-content-end">
                                <Tooltip title={userName} placement="top">
                                    <Avatar style={{backgroundColor: '#1890ff'}} icon={<UserOutlined/>}/>
                                </Tooltip>

                                <Dropdown
                                    overlay={menu}
                                    // onVisibleChange={this.handleVisibleChange}
                                    // visible={this.state.visible}
                                >
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}
                                       style={{marginLeft: 10, color: "#fff"}}>
                                        {userName} <DownOutlined/>
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
                                    defaultSelectedKeys={[selectedTab]}
                                >
                                    <Menu.Item key="1">
                                        <Link to="/Dashboard">Dashboard</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2"><Link to="/Notifications">Notifications</Link></Menu.Item>
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
