import { Button, Card, Flex, Input, Typography } from "antd";
const { Link, Title, Paragraph, Text } = Typography;
import React from "react";

function AntdUsersManagement(props) {
  return (
    <div>
      <Card
        hoverable
        className="form-wrapper gap-3"
        style={{ width: "600px", margin: "0 auto" }}
      >
        <Title level={3}>New User</Title>
        <Flex vertical gap={20}>
          <Input type="text" placeholder="Name" />
          <Input type="number" placeholder="Age" />
          <Input type="text" placeholder="Address" />
          <Button type="primary">Save</Button>
        </Flex>
      </Card>
    </div>
  );
}

export default AntdUsersManagement;
