import React from 'react';
import {Button, Form, Input, notification} from 'antd';
import {useNavigate} from "react-router-dom";


const App = () => {
    const navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification();
    const onFinish = (values) => {
        if (values.login === "Admin" && values.password === "1234") {
            navigate("/cabinet");
        }else {
                api.error({
                    message: `Login yoki Parol Xato  `,
                    description: "Qaytadan urinib ko'ring )",
                    placement: "top"
                });
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (<div className={"row"} style={{height: "100vh"}}>
            {contextHolder}
            <div className="col-4 offset-4  d-flex  align-items-center justify-content-center ">
                <div className="card">
                    <div className="card-body">
                        <Form
                            layout={"vertical"}
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Login"
                                name="login"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item>
                                <Button className={"w-100"} type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;