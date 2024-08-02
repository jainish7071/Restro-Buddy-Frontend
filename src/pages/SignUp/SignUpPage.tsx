import React from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.scss";
import { LoginService } from "../../Services/LoginService";

const SignUpPage = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    if (values.confirmPassword === values.password) {
      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
        password: values.password,
      };
      saveData(data);
      console.log("Success:", data);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const saveData = async (data: any) => {
    try {
      const response = await LoginService.signup(data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles["signup-container"]}>
      <div className={styles["signup-card"]}>
        <h2 className={styles["signup-title"]}>Sign Up</h2>
        <Form name="signup" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item className={styles["form-item"]} label="First Name" name="firstName" rules={[{ required: true, message: "Please Enter your First Name!" }]}>
            <Input />
          </Form.Item>
          <Form.Item className={styles["form-item"]} label="Last Name" name="lastName" rules={[{ required: true, message: "Please Enter your Last Name!" }]}>
            <Input />
          </Form.Item>

          <Form.Item className={styles["form-item"]} label="Phone" name="phone" rules={[{ required: true, message: "Please Enter your Phone Number" }]}>
            <Input />
          </Form.Item>

          <Form.Item className={styles["form-item"]} label="Email" name="email" rules={[{ required: true, message: "Please Enter your email!" }]}>
            <Input />
          </Form.Item>

          <Form.Item className={styles["form-item"]} label="Password" name="password" rules={[{ required: true, message: "Please Enter your password!" }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            className={styles["form-item"]}
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("The two passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign Up
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to="/login">Already have an account? Login</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
