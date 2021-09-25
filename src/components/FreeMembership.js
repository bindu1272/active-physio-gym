import React, {useState} from 'react';
import {Button, Form} from 'antd';
import {coreApi} from "../setup/configureAxios";
import MemberForm from "./MemberForm";
import validator from "validator";

const GYM_ID = process.env.REACT_APP_GYM_ID;
const BRAND_ID = process.env.REACT_APP_BRAND_ID;

function FreeMembership({visible, onClose}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [form] = Form.useForm();
    const onFinish = (values) => {
        setLoading(true);
        addMember(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setLoading(false);
        setError(errorInfo.message)
    };

    const addMember = (values) => {
        console.log('values -------', values);
        setSuccess("");
        let flag = false,
            specific = false;
        Object.keys(values).map((key) => {
            if (!values[key] || !values[key].trim()) {
                flag = true;
            } else if (key == "Email") {
                if (!validator.isEmail(values[key])) {
                    specific = true;
                    flag = true;
                    setError("Invalid Email");
                }
            } else if (key == "Phone Number") {
                if (!validator.isMobilePhone(values[key]) || values[key].length < 10) {
                    specific = true;
                    flag = true;
                    setError("Invalid Phone number");
                }
            }
        });

        if (!flag) {
            setLoading(true);
            values["type"] = "activeGymFreeMembership";
            coreApi
                .post("/email/send", values)
                .then((response) => {
                    console.log("response is", response);
                    setLoading(false);
                    form.resetFields();
                    setSuccess(
                        "Your request has been received, we will contact you soon"
                    );
                    setError("");
                })
                .catch((err) => {
                    console.log("got error---", err);
                    setLoading(false);
                    setError([err.message]);
                    setSuccess("");
                });
        } else if (!specific) {
            setError("All fields are mandatory");
        }
    }
    return (
        <>
            <h1>Join 7 Days FREE Trial Today</h1>
            {success && (
                <div className="col-md-12 success-msg">
                    <i className="fa fa-check"></i> {success}
                </div>
            )}
            <MemberForm onFinishFailed={onFinishFailed} onFinish={onFinish} form={form} error={error} formLoading={loading} showAboutUs={true}/>
                <div className="bottom_info" >
                    <Button onClick={onClose} style={{marginRight: 8}}>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit" form="basic" key="submit">
                        Join
                    </Button>
                </div>
        </>
    );
}

export default FreeMembership;
