import React from 'react';
import {Button, Input, Space, Table, Tag} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import Modal from "./modal";
import {deleteCourse} from "../../redux/reducers/courseReducer";




const App = () => {


    const {courses} = useSelector((state) => state.CourseReducer);
    const dispatch = useDispatch();
    function onFinishSearch(e){

    }
    function deleteC(id){

        dispatch(deleteCourse(id))
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (item) => (<div>
                {
                    item ? <Tag color={"geekblue"}  > True </Tag> :
                        <Tag color={"volcano"}  > False </Tag>
                }
            </div>)
        },
        {
            title: 'Action',
            key: 'action',
            render: (item) => (
                <Space size="middle">
                    <Button type={"primary"}> Edit </Button>
                    <Button onClick={()=>deleteC(item.id)} type={"primary"} danger> Delete </Button>
                </Space>
            ),
        },
    ];
    return <div>
        <div className={"row"}>
            <div className="col-6"><h5 className={"text-secondary"}>/courses
                <Input className={"w-50 mx-3"} placeholder="Search..." onChange={(e) => onFinishSearch(e.target.value)} />
            </h5></div>
            <div className="col-6">
                <Modal/>
            </div>
        </div>
        <Table columns={columns} dataSource={courses}/>
    </div>
}
export default App;