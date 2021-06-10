import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import Logo from "../images/logo.svg";

function Index() {
  return (
    <div className="login-Section">
      <div className="page main-signin-wrapper">
        <div className="row signpages text-center">
          <div className="col-md-12">
            <div className="card">
              <div className="row row-sm">
                <div className="col-lg-6 col-xl-5 text-center details">
                  <img src={Logo} alt="logo" style={{ height: 250 }} />
                </div>
                <div className="col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form ">
                  <div className="container-fluid">
                    <div className="row row-sm">
                      <div className="card-body mt-2 mb-2">
                        <h3 className="text-left mb-4">Signin to Your Account</h3>
                        <Form
                          layout="vertical"
                          name="basic"
                          initialValues={{ remember: true }}
                          //   onFinish={onFinish}
                          //   onFinishFailed={onFinishFailed}
                        >
                          <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                              {
                                required: true,
                                message: "Please input your username!",
                              },
                            ]}
                          >
                            <Input size="large" />
                          </Form.Item>

                          <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: "Please input your password!",
                              },
                            ]}
                          >
                            <Input.Password size="large" />
                          </Form.Item>

                          <Form.Item className="text-left">
                            <Button
                              type="primary"
                              htmlType="submit"
                              size="large"
                              className="w-100"
                            >
                              Submit
                            </Button>
                          </Form.Item>
                        </Form>

                        <div className="text-left mt-5 ml-0">
                          <div className="mb-1">
                            <a href="">Forgot password?</a>
                          </div>
                          <div>
                            Don't have an account? <a href="#">Register Here</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
