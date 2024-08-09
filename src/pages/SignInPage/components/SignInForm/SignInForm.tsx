import React from "react";
import { Button, Form, Input } from "antd";
import { UserAuthCredentials } from "../../../../types";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

interface SignInFormProps {
  onSubmit: (userSignUpCredentials: UserAuthCredentials) => void;
}

export const SignInForm = ({ onSubmit }: SignInFormProps): JSX.Element => {
  const [form] = Form.useForm<UserAuthCredentials>();

  return (
    <Form
      {...formItemLayout}
      form={form}
      onFinish={onSubmit}
      style={{ maxWidth: "600px", width: "100%" }}
    >
      <Form.Item
        name="email"
        label="Почта"
        rules={[
          {
            type: "email",
            message: "Невалидная почта!",
          },
          {
            required: true,
            message: "Пожалуйста, введите почту!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите пароль!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
