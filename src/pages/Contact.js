import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import {Link} from "react-router-dom";
import {Form, Input, Button, Checkbox} from 'antd';
import {trackPageViewInGoogle} from "../setup/GoogleSetUp";
import validator from 'validator';
import {coreApi} from "../setup/configureAxios";

const initialValues = {
    'First Name': '',
    'Last Name': '',
    'Email': '',
    'Phone Number': '',
    'Message': '',
    'type': 'mandm'
}

function Index() {
    const {TextArea} = Input;
    const [form] = Form.useForm();
    useEffect(() => {
        window.scrollTo(0, 0);
        trackPageViewInGoogle();
    }, []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (values) => {
        console.log(values);
        setSuccess('');
        let flag = false, specific = false;
        Object.keys(values).map((key) => {
            if (!values[key] || !values[key].trim()) {
                flag = true;
            } else if (key == 'Email') {
                if (!validator.isEmail(values[key])) {
                    specific = true;
                    flag = true;
                    setError('Invalid Email');
                }

            } else if (key == 'Phone Number') {
                if (!validator.isMobilePhone(values[key]) || values[key].length < 10) {
                    specific = true;
                    flag = true;
                    setError('Invalid Phone number');
                }

            }

        });


        if (!flag) {
            setLoading(true);
            values['type'] = 'five';
            coreApi.post('/email/send', values).then((response) => {
                console.log('response is', response)
                setLoading(false);
                form.resetFields();
                setSuccess('Your request has been received, we will contact you soon');
                setError('')
            }).catch((err) => {
                console.log('got error---', err)
                setLoading(false);
                setError(err.message)
                setSuccess('');
            })
        } else if (!specific) {
            setError('All fields are mandatory');
        }

    }
    return (
        <>
            <Header/>
            <section className="inner-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Contact</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bread-crumb">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <span> / </span>
                                </li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_page_section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 form-part white-bg">
                            <div class="sec-title mb-45">
                                <h2 class="title mb-5">Get In Touch</h2>
                            </div>
                            <div id="form-messages">
                                {error && <div className="col-md-12 error-msg">
                                    <i className="fa fa-times-circle"></i> {error}
                                </div>}
                                {success && <div className="col-md-12 success-msg">
                                    <i className="fa fa-check"></i> {success}
                                </div>}
                            </div>
                            <Form
                                // {...layout}
                                name="basic"
                                vertical
                                form={form}
                                initialValues={{remember: true}}
                                onFinish={handleSubmit}
                                // onFinishFailed={onFinishFailed}
                            >


                                <div className="d-flex" style={{flexWrap: "wrap"}}>
                                    <Form.Item
                                        label="First Name"
                                        name="First Name"
                                        className="col-sm-6 pr-2"
                                        rules={[{required: true, message: 'Please input your First Name!'}]}
                                    >
                                        <Input size={"large"}/>
                                    </Form.Item>
                                    <Form.Item
                                        className="col-sm-6"
                                        label="Last Name"
                                        name="Last Name"
                                        rules={[{required: true, message: 'Please input your Last Name!'}]}
                                    >
                                        <Input size={"large"}/>
                                    </Form.Item>

                                    <Form.Item
                                        className="col-sm-6"
                                        label="Email"
                                        name="Email"
                                        rules={[{required: true, message: 'Please input your Email!'}]}
                                    >
                                        <Input size={"large"}/>
                                    </Form.Item>

                                    <Form.Item
                                        className="col-sm-6"
                                        label="Phone Number"
                                        name="Phone Number"
                                        rules={[{required: true, message: 'Please input your Phone Number!'}]}
                                    >
                                        <Input size={"large"}/>
                                    </Form.Item>
                                    <Form.Item name={'Message'} label="Message"  className="col-sm-12"
                                               rules={[{required: true, message: 'Please input your message!'}]}>
                                        <Input.TextArea autoSize={{ minRows: 4 }}
                                                        />
                                    </Form.Item>
                                </div>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div class="col-lg-4 pl-0 md-pr-0 md-order-first">
                            <div class="contact-info">
                                <h3 class="title">Contact Info</h3>
                                <div class="info-wrap mb-20">
                                    <div class="icon-part">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>

                                    </div>
                                    <div class="content-part">
                                        <h4>Office Address</h4>
                                        560 Parramatta Road, Petersham NSW 2049
                                    </div>
                                </div>
                                <div class="info-wrap mb-20">
                                    <div class="icon-part">
                                        <i class="fa fa-phone" aria-hidden="true"></i>

                                    </div>
                                    <div class="content-part">
                                        <h4>Telephone</h4>
                                        <p>P: <a href="tel:+1235558888">(+123) 555 8888</a></p>
                                        <p>P: <a href="tel:+1235558899">(+123) 555 8899</a></p>
                                    </div>
                                </div>
                                <div class="info-wrap mb-20">
                                    <div class="icon-part">
                                        <i class="fa fa-envelope-o" aria-hidden="true"></i>

                                    </div>
                                    <div class="content-part">
                                        <h4>Mail Us</h4>
                                        <p>E: <a href="mailto:info@codesless.com">info@activephysiogym.com</a></p>
                                    </div>
                                </div>
                                <div class="info-wrap">
                                    <div class="icon-part">
                                        <i class="fa fa-clock-o" aria-hidden="true"></i>

                                    </div>
                                    <div class="content-part">
                                        <h4>Opening Hours</h4>
                                        <p>Mon-Fri: 10:00-18:00</p>
                                        <p>Sat-Sun: 10:00-14:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
