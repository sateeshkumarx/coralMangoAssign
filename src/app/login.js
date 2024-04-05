import React, { useState } from "react";
import { Card } from "antd";
import { Input, Button } from "antd";

const Login = ({ logincheck }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const handleLogin = () => {
    if (email == "demo@coralmango.com" && password == "demo123") {
      setShowMessage(false);
      logincheck(true);
    } else {
      setShowMessage(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",

        alignItems: "center",
      }}
    >
      <Card style={{ width: 300 }}>
        <Input
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Input.Password
          placeholder="input password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button onClick={handleLogin}>Submit</Button>
        {showMessage ? <p>Bad Credentials.</p> : ""}
      </Card>
    </div>
  );
};
export default Login;
