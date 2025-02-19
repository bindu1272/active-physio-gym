import React, {useState} from "react";
import {Button, Form, Input} from "antd";
import Logo from "../images/logo.png";
import {postServerAction} from "../common/actions";
import {useHistory} from "react-router-dom";
import _ from 'lodash';
import {coreApi} from "../setup/configureAxios";

function Index() {
    const [error, setError] = useState('');

    const history = useHistory();

    const onFinish = (values) => {

        console.log('values -----', values);
        postServerAction('/auth/login', values, (data)=>{
            setError('')
            console.log('data -----------------', data);
            const user =_.pick(data.data.data,['id','name','email','phone','userableId','userableType','member','trainer','token','refreshToken']);
            console.log('user -----------------', user);
            localStorage.setItem('apg_user', JSON.stringify(user));
            coreApi.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
            console.log('user type-----------------', user.userableType);
            localStorage.setItem('apg_user_type', user.userableType);
            localStorage.setItem('apg_user_name', user.name);
            history.push("/Dashboard");
        }, (error)=>{
            console.log('error ---------', error);
            setError(error.message)
            localStorage.setItem('apg_user', {});
        })

    }
    const onFinishFailed = (error) => {
        console.log('errors ------------', error);
    }
    return (
        <div className="login-Section">
            <div className="page main-signin-wrapper">
                <div className="row signpages text-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="row row-sm">
                                <div className="col-lg-6 col-xl-5 text-center details">
                                    <img src={Logo} alt="logo" style={{height: 250}}/>
                                </div>
                                <div className="col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form ">
                                    <div className="container-fluid">
                                        <div className="row row-sm">
                                            <div className="card-body mt-2 mb-2">
                                                <h3 className="text-left mb-4">Signin to Your Account</h3>
                                                <Form
                                                    layout="vertical"
                                                    name="basic"
                                                    initialValues={{remember: true}}
                                                    onFinish={onFinish}
                                                    onFinishFailed={onFinishFailed}
                                                >
                                                    {error && <div style={{color: 'red'}}>
                                                        {error && error} <br /><br />
                                                    </div>
                                                    }
                                                    <Form.Item
                                                        label="Username"
                                                        name="email"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "Please input your username!",
                                                            },
                                                        ]}
                                                    >
                                                        <Input size="large"/>
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
                                                        <Input.Password size="large"/>
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
