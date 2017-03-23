import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
const FormItem = Form.Item;

class SignInForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, onFormSubmit, csrfToken, hideSignInModal } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        onFormSubmit(values, csrfToken, hideSignInModal);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, type: "email", message: 'Please input your E-mail!' }],
          })(
            <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="E-mail" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a onClick={this.props.showSignUpModal}>register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedSignInForm = Form.create()(SignInForm);

export default WrappedSignInForm;
