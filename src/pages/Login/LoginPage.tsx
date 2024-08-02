import React from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import { LoginService } from "../../Services/LoginService";

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    // TODO : Do validation here for Email and Password
    const data = {
      email: values.email,
      password: values.password,
    };
    login(data);
  };

  const login = async (data: any) => {
    const response = await LoginService.login(data);
    if (response) {
      navigate("/menu");
    } else {
      notification.error({
        message: "Error",
        description: "Invalid Credentials!!! Please Check your Credentials!.",
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-card"]}>
        <h2 className={styles["login-title"]}>Login</h2>
        <Form name="login" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item className={styles["form-item"]} label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
            <Input />
          </Form.Item>

          <Form.Item className={styles["form-item"]} label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
