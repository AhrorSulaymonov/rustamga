import {
  Button,
  Card,
  Flex,
  Input,
  Typography,
  Form as AntForm,
  InputNumber,
  Empty,
  Table,
} from "antd";
import React, { useState } from "react";
const { Title } = Typography;

function Form() {
  const [users, setUsers] = useState([]);
  const [form] = AntForm.useForm();

  const formStyle = {
    padding: "20px",
  };

  const handleSubmit = (values) => {
    console.log(values);
    setUsers([...users, { ...values, id: Date.now() }]);
  };

  const handleSubmitError = (error) => {
    console.log(error);
  };

  return (
    <div>
      <Flex justify="center" style={formStyle}>
        <Card hoverable className="form-wrapper">
          <Title level={3}>New User</Title>
          <AntForm
            form={form}
            onFinish={handleSubmit}
            onFinishFailed={handleSubmitError}
          >
            <Flex vertical>
              <AntForm.Item
                name="name"
                rules={[{ required: true, message: "Please input username!" }]}
              >
                <Input placeholder="Username" />
              </AntForm.Item>

              <AntForm.Item
                name="age"
                rules={[{ required: true, message: "Please input age!" }]}
              >
                <InputNumber placeholder="Age" />
              </AntForm.Item>

              <AntForm.Item
                name="address"
                rules={[{ required: true, message: "Please input address!" }]}
              >
                <Input placeholder="Address" />
              </AntForm.Item>

              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Flex>
          </AntForm>
        </Card>
      </Flex>
      <Flex vertical gap={20} style={{ width: "600px", margin: "0 auto" }}>
        {users.length === 0 ? <Empty /> : null}
        {users.map((user) => (
          <Card key={user.id} hoverable>
            <Title level={4}>Name: {user.name}</Title>
            <p>Age: {user.age}</p>
            <p>Address: {user.address}</p>
          </Card>
        ))}

        <Table
          dataSource={users}
          columns={[
            {
              title: "Name",
              dataIndex: "name",
              key: "name",
            },
            {
              title: "Age",
              dataIndex: "age",
              key: "age",
            },
            {
              title: "Address",
              dataIndex: "address",
              key: "address",
            },
          ]}
        ></Table>
      </Flex>
    </div>
  );
}

export default Form;
