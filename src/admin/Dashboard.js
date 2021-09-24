import React, {useEffect, useState} from "react";
import {Button, Layout, Spin, Table, Tag} from "antd";

import DashboardHeader from './DashboardHeader';
import getServerAction, {postServerAction} from "../common/actions";
import moment from 'moment';
import _ from 'lodash';
import AddMember from "../components/AddMember";
import {PlusOutlined} from "@ant-design/icons";

const {Content} = Layout;

const GYM_ID = process.env.REACT_APP_GYM_ID;
const BRAND_ID = process.env.REACT_APP_BRAND_ID;
const PAGE_SIZE = process.env.REACT_APP_PAGE_SIZE;

function Index() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [members, setMembers] = useState([]);
    const [attendances, setAttendances] = useState({loaded: false});
    const [refreshAttendance, setRefreshAttendance] = useState(false)
    const [meta, setMeta] = useState({});
    const columns = [
        {
            title: 'Name',
            dataIndex: ["User", "name"],
        },
        {
            title: 'Email',
            dataIndex: ["User", "email"],

        },
        {
            title: 'Mobile',
            dataIndex: ["User", "phone"],
            // sorter: {
            //     compare: (a, b) => a.mobile - b.mobile,
            //     multiple: 3,
            // },
        },
        {
            title: 'Address',
            dataIndex: ["User", "address"],
        },
        {
            title: 'Attendance',
            render: (text, record) => {
                return !record['checkedIn'] ?
                    <Button onClick={() => markAttendance(record.id)} key={'button' + record.id}>
                        {'Check-in'}
                    </Button> : <Tag color="green">Checked-in</Tag>
            }
            ,
        },

    ];

    useEffect(() => {
        loadMember();
    }, [])

    const loadMember = (current=1, size=PAGE_SIZE) => {
        setLoading(true);
        getServerAction(`/admin/brands/${BRAND_ID}/gyms/${GYM_ID}/members?page=${current}&limit=${size}`, (response) => {
            setMembers(response.data.data.rows);
            setMeta(response.data.data.meta);
            console.log('meta -----------', response.data.data.meta)
            setError('')
            loadAttendances();
        }, (err) => {
            console.log('got error---', err)
            setLoading(false);
            setMembers([]);
            setError(err.message)
        });
    }

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        loadMember();
        setVisible(false);
    };


    const loadAttendances = () => {
        getServerAction(`/members/attendance?startDate=${moment(new Date()).format('YYYY-MM-DD')}&endDate=${moment(new Date()).format('YYYY-MM-DD')}`, (response) => {
            console.log('loadAttendances response is', response)
            console.log('loadAttendances setAttendances is', response.data.data)
            setAttendances(response.data.data);
            setError('')
            setRefreshAttendance(true);
        }, (err) => {
            setLoading(false);
            setAttendances({loaded: false})
            setError(err.message)
        });
    }

    useEffect(() => {
        if (refreshAttendance) {
            checkAttendance();
        }
    }, [refreshAttendance, attendances && attendances.length])
    const checkAttendance = () => {
        let memberIds = _.map(attendances, 'memberId');
        if (!memberIds) {
            memberIds = [];
        }
        const newMembers = members && members.map((member) => {
            return {
                ...member,
                checkedIn: memberIds.includes(member.id)
            }
        })
        setMembers(newMembers);
        setRefreshAttendance(false);
        setLoading(false);
    }
    const markAttendance = (memberId) => {
        setLoading(true);
        postServerAction(`/members/${memberId}/attendance`, {}, () => {
            setRefreshAttendance(true);
            loadAttendances();
        }, () => {
        })
    }

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
        loadMember(pagination.current, pagination.pageSize)
    }

    const paginationProps = () => {
        console.log('meta before setup  ----', meta);
        return {
            // showSizeChanger: true,
            // showQuickJumper: true,
            total: parseInt(meta.total), // total number of data
            pageSize: parseInt(meta.limit), // number of pages per page
            current: parseInt(meta.currentPage), // current page number
            showTotal: ((total) => {
                return `total ${total}`
            })
        }
    }


    return (
        <>
            <section className="dashboard_section">
                <Layout>
                    <DashboardHeader selectedTab={'1'}/>
                    <div className="container">
                        {
                            loading &&
                            <Spin size={'large'} style={{height: '50vh', paddingTop: '10vh', paddingLeft: '50vh'}}/>
                        }

                        {
                            !loading &&
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2 className="mt-4">Members <Button style={{float: 'right'}}
                                                                         onClick={showDrawer}><PlusOutlined/> Add new
                                        member</Button></h2>

                                    <Content className="site-layout" style={{marginTop: 30}}>
                                        <div className="site-layout-background">
                                            <Table columns={columns} dataSource={members} onChange={onChange}
                                                   pagination={paginationProps()}/>
                                        </div>
                                    </Content>
                                </div>
                                <AddMember visible={visible} onClose={onClose} loading={loading}
                                           setLoading={setLoading}/>
                            </div>

                        }
                    </div>
                </Layout>
            </section>
        </>
    );
}

export default Index;

