import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Layout, Menu, Breadcrumb, Table, Tag, Space, Avatar, Divider, Tooltip, Button, Spin} from "antd";
import {UserOutlined, AntDesignOutlined, PlusOutlined} from '@ant-design/icons';
import DashboardHeader from './DashboardHeader';
import Logo from "../images/logo.svg";
import AddMember from "../components/AddMember";
import {coreApi} from "../setup/configureAxios";

const {Header, Content, Footer} = Layout;

const GYM_ID = process.env.REACT_APP_GYM_ID;
const BRAND_ID = process.env.REACT_APP_BRAND_ID;


function Index() {
    const [loading, setLoading]= useState(true);
    const [error, setError] = useState('');
    const [members, setMembers]=useState([]);
    const columns = [
        {
            title: 'Name',
            dataIndex: ["User","name"],
        },
        {
            title: 'Email',
            dataIndex: ["User","email"],

        },
        {
            title: 'Mobile',
            dataIndex: ["User","phone"],
            // sorter: {
            //     compare: (a, b) => a.mobile - b.mobile,
            //     multiple: 3,
            // },
        },
        {
            title: 'Address',
            dataIndex: ["User","address"],
        },

    ];

    useEffect(()=>{
        loadMember();
    },[])

    const loadMember = () => {
        setLoading(true);
        coreApi.get(`/admin/brands/${BRAND_ID}/gyms/${GYM_ID}/members`).then((response) => {
            console.log('response is', response)
            setLoading(false);
            setMembers(response.data.data.rows);
            setError('')
        }).catch((err) => {
            console.log('got error---', err)
            setLoading(false);
            setError(err.message)
        })
    }

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        loadMember();
        setVisible(false);
    };


    return (
        <>
            <section className="dashboard_section">
                <Layout>
                    <DashboardHeader/>
                    <div className="container">
                    {
                        loading &&<Spin size={'large'} style={{height:'50vh', paddingTop:'10vh', paddingLeft:'50vh'}} />
                    }

                    {
                        !loading &&
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2 className="mt-4">Dashboard</h2>
                                    <Button onClick={showDrawer}><PlusOutlined/> Add new member</Button>

                                    <Content className="site-layout" style={{marginTop: 30}}>
                                        {/* <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb> */}

                                        <div className="site-layout-background">
                                            <Table columns={columns} dataSource={members} onChange={onChange}/>
                                        </div>
                                    </Content>
                                </div>
                                <AddMember visible={visible} onClose={onClose} loading={loading} setLoading={setLoading}/>
                            </div>

                    }
                    </div>
                </Layout>
            </section>
        </>
    );
}

export default Index;
