import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Table, Tag, Space, Avatar, Divider, Tooltip } from "antd";
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import DashboardHeader from './DashboardHeader';
import Logo from "../images/logo.svg";
const { Header, Content, Footer } = Layout;

function Index() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      sorter: {
        compare: (a, b) => a.weight - b.weight,
        multiple: 1,
      },
    },
    {
      title: 'Contact No',
      dataIndex: 'contact',
      sorter: {
        compare: (a, b) => a.contact - b.contact,
        multiple: 3,
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      sorter: {
        compare: (a, b) => a.address - b.address,
        multiple: 2,
      },
    },
    
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      weight: 50,
      contact: 123456890,
      address:"Hyderabad"
    },
    {
      key: '2',
      name: 'Jim Green',
      weight: 50,
      contact: 123456890,
      address:"Hyderabad"
    },
    {
      key: '3',
      name: 'Joe Black',
      weight: 50,
      contact: 123456890,
      address:"Hyderabad"
    },
    {
      key: '4',
      name: 'Jim Red',
      weight: 50,
      contact: 123456890,
      address:"Hyderabad"
    },
  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
  
  return (
    <>
      <section className="dashboard_section">
        <Layout>
        <DashboardHeader/>


          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="mt-4">Attendance</h2>
                <Content className="site-layout" style={{ marginTop: 30 }}>
                
                  <div className="site-layout-background">
                  <Table columns={columns} dataSource={data} onChange={onChange} />
                  </div>
                </Content>
              </div>
            </div>
          </div>
        </Layout>
      </section>
    </>
  );
}

export default Index;
