import React from 'react';
import {Col, Form, Input, Row, Spin, Select} from 'antd';
import {CloseCircleOutlined,} from '@ant-design/icons';

function MemberForm({onFinishFailed, onFinish, form, error, formLoading, showAboutUs=false}) {
    console.log('error is ----', error)

    return (
        <>
            {
                formLoading && <Spin size={'large'} style={{height: '50vh', paddingTop: '10vh', paddingLeft: '10vh'}}/>
            }

            {
                !formLoading &&
                <Form layout="vertical" hideRequiredMark onFinish={onFinish} name="basic" initialValues={{}}
                      onFinishFailed={onFinishFailed} form={form}
                >
                    <Row gutter={16}>
                        <div>
                            {error && Object.keys(error).map((err) => {
                                return <div style={{color: 'red', paddingLeft: '20px'}} key={err}>
                                    <CloseCircleOutlined/>{error[err] && error[err][0]}</div>

                            })}
                            {error && <br/>}

                        </div>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="name"
                                label="Full Name"
                                rules={[{required: true, message: 'Please enter full name'}]}
                            >
                                <Input placeholder="Please enter full name" size="large"/>
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
                                    size="large"
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
                                    size="large"
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
                                <Input.TextArea rows={4} size="large" placeholder="please enter Address"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    {
                        showAboutUs && <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="How did you hear about us?"
                                    label="How did you hear about us?"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'please select',
                                        },
                                    ]}
                                >
                                    <Select defaultValue={'Google'}>
                                        <Select.Option value="Google">Google</Select.Option>
                                        <Select.Option value="Facebook">Facebook</Select.Option>
                                        <Select.Option value="Flyer">Flyer</Select.Option>
                                        <Select.Option value="Friend">Friend</Select.Option>
                                        <Select.Option value="Other">Other</Select.Option>
                                    </Select>

                                </Form.Item>
                            </Col>
                        </Row>
                    }

                </Form>
            }
        </>
    );
}

export default MemberForm;
