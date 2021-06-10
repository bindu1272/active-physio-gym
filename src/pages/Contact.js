import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';

function Index() {
  const { TextArea } = Input;
  return (
    <>
      <Header />
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
                                <div id="form-messages"></div>
                                <Form
      // {...layout}
      name="basic"
      vertical
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
     

     <div className="d-flex" style={{flexWrap:"wrap"}}>
     <Form.Item
        label="First Name"
        name="username"
        className="col-sm-6 pr-2"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input size={"large"}/>
      </Form.Item>
     <Form.Item
      className="col-sm-6"
        label="Last Name"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input size={"large"} />
      </Form.Item>

      <Form.Item
       className="col-sm-6"
        label="Email"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input size={"large"}/>
      </Form.Item>

      <Form.Item
       className="col-sm-6"
        label="Phone Number"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input size={"large"}/>
      </Form.Item>
     </div>
      <div className="p-3 mb-3">
      <TextArea rows={4} />
      </div>
      <Form.Item >
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
