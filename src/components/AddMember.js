import React, {useState} from 'react';
import {Drawer, Form, Button, Col, Row, Input, message} from 'antd';
import {coreApi} from "../setup/configureAxios";

const GYM_ID = process.env.REACT_APP_GYM_ID;
const BRAND_ID = process.env.REACT_APP_BRAND_ID;

function AddMember({visible, onClose, setLoading}) {
    const [error, setError] = useState('');

    const [form] = Form.useForm();
    console.log('visible----', visible)
    const onFinish = (values) => {
        console.log('values are:', values);
        setLoading(true);
        addMember(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const addMember = (values) => {
        values['password']=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        values['userableType']='MEMBER';
        coreApi.post(`/admin/brands/${BRAND_ID}/gyms/${GYM_ID}/members`, values).then((response) => {
            console.log('response is', response)
            setLoading(false);
            form.resetFields();
            setError('')
            message.success('This is a success message');
        }).catch((err) => {
            console.log('got error---', err)
            setLoading(false);
            setError(err.message)
        })
    }
    return (
        <Drawer
            title="Create a new account"
            width={520}
            onClose={onClose}
            visible={visible}
            bodyStyle={{paddingBottom: 80}}
            footer={
                <div
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button onClick={onClose} style={{marginRight: 8}}>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit" form="basic" key="submit" >
                        Submit
                    </Button>
                </div>
            }
        >
            <Form layout="vertical" hideRequiredMark  onFinish={onFinish}  name="basic"  initialValues={{

            }}
                  onFinishFailed={onFinishFailed}   form={form}
            >
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="name"
                            label="Full Name"
                            rules={[{required: true, message: 'Please enter full name'}]}
                        >
                            <Input placeholder="Please enter full name"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[{required: true, message: 'Please enter Email'}]}
                        >
                            <Input
                                style={{width: '100%'}}
                                placeholder="Please enter Email"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="phone"
                            label="Mobile"
                            rules={[{required: true, message: 'Please enter Mobile'}]}
                        >
                            <Input
                                style={{width: '100%'}}
                                placeholder="Please enter Mobile"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="address"
                            label="Address"
                            rules={[
                                {
                                    required: true,
                                    message: 'please enter Address',
                                },
                            ]}
                        >
                            <Input.TextArea rows={4} placeholder="please enter Address"/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Drawer>
    );
}

export default AddMember;
