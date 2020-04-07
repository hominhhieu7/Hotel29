import React, { useContext, useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, message } from 'antd';
import Link from 'next/link';
import apiServices from '../../services/apiServices';
import { API } from '../../services/apiResource';
import Router from 'next/router'
import { UserContext } from '../../Context/StoreContext';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


export default function Login() {
    const { setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(false)
    const submitFinish = async values => {
        setLoading(true);
        const data = await apiServices.get(API.USERS.get);
        if (data) {
            const dataUser = data.find(user => user.email === values.email && user.password === values.password);
            if (dataUser) {
                setUser({ id: dataUser.id, name: dataUser.name });
                setLoading(false);
                message.success("Login success", 1);
                Router.push('/');
            }
            else {
                setLoading(false);
                message.error("Not found user", 1);
            }
        } else {
            setLoading(false);
            throw Error("failed to fetch!!!")
        }
    }

    return (
        <Row style={{ paddingTop: "13%" }} justify="center">
            <Form {...layout} onFinish={submitFinish}>
                <Form.Item
                    label="email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button loading={loading} type="primary" htmlType="submit">
                        Login
                    </Button>
                    <Link href="/"><a style={{ paddingLeft: "20px" }}>Back to home</a></Link>
                </Form.Item>
            </Form>

        </Row>
    )
}

