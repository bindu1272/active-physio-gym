import React, {useEffect, useState} from "react";
import {Layout, Table, Spin} from "antd";

import DashboardHeader from './DashboardHeader';
import getServerAction from "../common/actions";
import moment from "moment";
const {Content} = Layout;

const GYM_ID = process.env.REACT_APP_GYM_ID;
const BRAND_ID = process.env.REACT_APP_BRAND_ID;
const PAGE_SIZE = process.env.REACT_APP_PAGE_SIZE;

function Index() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [members, setMembers] = useState([]);
    const [meta, setMeta] = useState({});
    const columns = [
        {
            title: 'Name',
            dataIndex: ["Member","User", "name"],
        },
        {
            title: 'Email',
            dataIndex: ["Member","User", "email"],

        },
        {
            title: 'Mobile',
            dataIndex: ["Member","User", "phone"],
            // sorter: {
            //     compare: (a, b) => a.mobile - b.mobile,
            //     multiple: 3,
            // },
        },
        {
            title: 'Address',
            dataIndex: ["Member","User", "address"],
        },
        {
            title: 'Last Check-in',
            dataIndex: [ "maxMarkedAt"],
            render: (date) =>moment(date).format('DD-MM-YYYY'),
        }

    ];

    useEffect(() => {
        loadMember();
    }, [])

    const loadMember = (current=1, size=PAGE_SIZE) => {
        setLoading(true);
        getServerAction(`/admin/brands/${BRAND_ID}/gyms/${GYM_ID}/notifications?page=${current}&limit=${size}`, (response) => {
            setMembers(response.data.data);
            setLoading(false);

            setError('')
        }, (err) => {
            console.log('got error---', err)
            setLoading(false);
            setMembers([]);
            setError(err.message)
        });
    }

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
   //     loadMember(pagination.current, pagination.pageSize)
    }

    return (
        <>
            <section className="dashboard_section">
                <Layout>
                    <DashboardHeader selectedTab={'2'}/>
                    <div className="container">
                        {
                            loading &&
                            <Spin size={'large'} style={{height: '50vh', paddingTop: '10vh', paddingLeft: '50vh'}}/>
                        }

                        {
                            !loading &&
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2 className="mt-4">Notifications </h2>

                                    <Content className="site-layout" style={{marginTop: 30}}>
                                        <div className="site-layout-background">
                                            <Table columns={columns} dataSource={members} onChange={onChange}
                                                   />
                                        </div>
                                    </Content>
                                </div>
                            </div>

                        }
                    </div>
                </Layout>
            </section>
        </>
    );
}

export default Index;

