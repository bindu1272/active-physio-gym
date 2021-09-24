import React, {useState} from 'react';
import {Button, Drawer, Form, message} from 'antd';
import {coreApi} from "../setup/configureAxios";
import MemberForm from "./MemberForm";

const GYM_ID = process.env.REACT_APP_GYM_ID;
const BRAND_ID = process.env.REACT_APP_BRAND_ID;

function AddMember({visible, onClose}) {
    const [error, setError] = useState('');
    const [formLoading, setFormLoading] = useState(false);
    const [form] = Form.useForm();
    console.log('visible----', visible)
    const onFinish = (values) => {
        console.log('values are:', values);
        setFormLoading(true);
        addMember(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setFormLoading(false);
        setError(errorInfo.message)
    };

    const addMember = (values) => {
        values['password'] = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        values['userableType'] = 'MEMBER';
        coreApi.post(`/admin/brands/${BRAND_ID}/gyms/${GYM_ID}/members`, values).then((response) => {
            console.log('response is', response)
            setFormLoading(false);
            form.resetFields();
            setError('')
            message.success('Member has been added successfully !!!!');
            onClose();
        }).catch((err) => {
          //  console.log('got error---', err)
            setFormLoading(false);
            setError(err)
        })
    }
    return (
        <>
            <h1>Member Ship</h1>

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
                        <Button type="primary" htmlType="submit" form="basic" key="submit">
                            Submit
                        </Button>
                    </div>
                }
            >
                <MemberForm onFinishFailed={onFinishFailed} onFinish={onFinish} form={form} error={error} formLoading={formLoading}/>
            </Drawer>
        </>
    );
}

export default AddMember;
