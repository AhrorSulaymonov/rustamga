import { Button, Flex, Input } from "antd";
import { useState } from "react";
import AntdUsersManagement from "./components/AntdUsersManagement";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Hello world</h1>
      <p>AntDesign</p>
      <p>MUI</p>
      <p>Shad cn</p>
      <Button type="primary">Hello world</Button>
      <Button type="dashed">Hello world</Button>
      <Button type="link">Hello world</Button>
      <Button>Hello world</Button>
      <Flex>
        <Input type="text" placeholder="Hello world"></Input>
        <Input type="text" placeholder="Hello world"></Input>
      </Flex>

      <Flex vertical style={{ width: "300px", margin: "0 auto" }}>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Age" />
        <Input type="location" placeholder="Location" />
        <Button type="primary">Submit</Button>
      </Flex> */}
      <AntdUsersManagement />
    </>
  );
}

export default App;
