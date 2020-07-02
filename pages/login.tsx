import Router from 'next/router';
import { Form, Typography, Input, Button, Row, Col, Card } from 'antd';
import { LoginOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { login, loadUser } from '@redux/actions/auth';

const { Title } = Typography;

const CardTitle: React.FC = () => (
  <Row align="middle">
    <LoginOutlined style={{ fontSize: '30px' }} />
    <Title style={{ margin: '0 0 0 5px' }}>Login</Title>
  </Row>
);

const Login = () => {
  const isAuthenticated = useSelector((state: RootStateOrAny) => state.auth.isAuthenticated);
  const loading = useSelector((state: RootStateOrAny) => state.auth.loading);
  const dispatch = useDispatch();

  if (isAuthenticated) {
    return Router.push('/');
  }

  const handleSubmit = async (values: any): Promise<void> => {
    dispatch(loadUser);
    await dispatch(login(values));
  };

  const handleFinishFailed = (errorInfo: any): void => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row
      align="middle"
      justify="center"
      gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}
      style={{ height: 500 }}
    >
      <Col xs={20} sm={16} md={12} lg={8}>
        <Card title={<CardTitle />}>
          <Form
            name="login-form"
            onFinish={handleSubmit}
            onFinishFailed={handleFinishFailed}
            className="login-form"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
              hasFeedback
            >
              <Input
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
              hasFeedback
            >
              <Input
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {loading ? 'loading' : 'Log in'}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
