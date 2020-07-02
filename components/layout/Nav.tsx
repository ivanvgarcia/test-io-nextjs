import React, { useState } from 'react';
import { HomeOutlined, LoginOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Link from 'next/link';

const { Sider } = Layout;

const SideNav: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      breakpoint="md"
      collapsedWidth="0"
      onBreakpoint={(): void => {
        setCollapsed(!collapsed);
      }}
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div className="logo" />
      <Menu mode="inline">
        <Menu.Item key="/">
          <HomeOutlined />
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>

        <Menu.Item key="/login">
          <LoginOutlined />
          <Link href="/login">
            <a>Login</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideNav;
