import { Button, Card, Flex, Input, Typography } from "antd";
const { Link, Title, Paragraph, Text } = Typography;
import React from "react";

function AntdUsersManagement(props) {
  return (
    <div>
      <Card hoverable className="form-wrapper">
        <Title level={3}>New User</Title>
        <Flex vertical style={{ width: "300px", margin: "0 auto" }}>
          <Input type="text" placeholder="Name" />
          <Input type="number" placeholder="Age" />
          <Input type="text" placeholder="Address" />
          <Button>Save</Button>
        </Flex>
      </Card>
    </div>
  );
}

export default AntdUsersManagement;
