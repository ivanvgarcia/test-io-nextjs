import { NextPage } from 'next';
import Nav from '@components/layout/Nav';
import { Layout as AntLayout, Typography, Row } from 'antd';

const { Header, Footer } = AntLayout;
const { Title } = Typography;

const Layout: NextPage = props => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Nav />

      <AntLayout>
        <Header style={{ display: 'flex' }}>
          <Row align="middle">
            <Title level={4} style={{ margin: 0, color: 'white' }}>
              <img className="logo" src="/images/logo.png" alt="logo" />
            </Title>
          </Row>
        </Header>
        {props.children}
        <Footer style={{ textAlign: 'center' }}>Hivelocity 2020 Created by Hivelocity</Footer>
      </AntLayout>
      <style jsx>{`
        .logo {
          width: 120px;
        }
      `}</style>
    </AntLayout>
  );
};

export default Layout;
