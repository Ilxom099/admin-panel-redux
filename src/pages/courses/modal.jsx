import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {Button, Checkbox, Form, Input, Modal,Switch } from 'antd';
import {addCourse} from "../../redux/reducers/courseReducer";

const App = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const showModal = () => {
        setIsModalOpen(true);
    };

    function onFinish(value){
        dispatch(addCourse(value))
        setIsModalOpen(false)
        form.resetFields();
    }
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };


    return (
        <>
            <Button type="primary" className={"float-end"} onClick={showModal}>
               Add Course
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onCancel={()=>setIsModalOpen(false)}   okButtonProps={{style:{display: 'none'}}} cancelButtonProps={{style:{display: 'none'}}}>
                <Form
                    form={form}
                    layout={"vertical"}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Course Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Kurs nomini qo\'shing!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[
                            {
                                required: true,
                                message: 'Kurs categoryasini qo\'shing!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: 'Kurs narxini qo\'shing!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Status"
                        name="status"
                        rules={[
                            {
                                required: true,
                                message: 'Kurs statusini qo\'shing!',
                            },
                        ]}
                    >
                        <Switch  onChange={onChange} />
                    </Form.Item>

                    <Form.Item>
                        <Button className={"w-100"} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default App;