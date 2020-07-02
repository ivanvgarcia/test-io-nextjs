import React from 'react';

import Head from 'next/head';
import { NextPage } from 'next';

import Slide from '@components/layout/Slide';
import FeatureCard from '@components/card/FeatureCard';
import NextLogo from '@public/svgs/Nextjs-logo.svg';

import { Typography, Carousel, Descriptions, Row, Col } from 'antd';
import { AntDesignOutlined, GithubFilled } from '@ant-design/icons';

const { Title } = Typography;

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <section>
    <Head>
      <title>Hivelocity Deploy: Home</title>
      <meta
        name="description"
        content="Hivelocity application to help facilitate front end deployments."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Carousel autoplay>
      <Slide
        title="Hivelocity Deploy"
        description="Starter React template for front end applications deployed by Hivelocity developers"
      />
      <Slide
        title="About"
        description="Created for quick and efficient front end development using React.js and other modern web technologies and tools."
      />
    </Carousel>

    <div className="heading">
      <Title>Features</Title>
    </div>
    <div className="container">
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col xs={24} md={12} lg={8}>
          <FeatureCard
            title="Made with Next.js"
            description={
              <React.Fragment>
                <p>
                  With Next.js, server rendering React applications has never been easier, no matter
                  where your data is coming from.
                </p>
                <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                  Next.js Documentation
                </a>
              </React.Fragment>
            }
            icon={<NextLogo />}
          />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <FeatureCard
            title="Styled with Ant Design"
            description={
              <React.Fragment>
                <p>
                  A design system for enterprise-level products. Create an efficient and enjoyable
                  work experience. To learn more, check out the documentation:
                </p>
                <a href="https://ant.design/" target="_blank" rel="noopener noreferrer">
                  Ant Design Documentation{' '}
                </a>
              </React.Fragment>
            }
            icon={<AntDesignOutlined />}
          />
        </Col>
        <Col xs={24} md={12} lg={8}>
          <FeatureCard
            title="Automated Deployment"
            description={
              <React.Fragment>
                <p>
                  Configured to deploy automatically using Github actions to Amazon Web Services. To
                  learn more, check out the documentation:
                </p>
                <a
                  href="https://github.com/features/actions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Actions
                </a>
              </React.Fragment>
            }
            icon={<GithubFilled />}
          />
        </Col>
      </Row>
    </div>
    <style jsx>
      {`
        .container {
          max-width: 90%;
          width: 130rem;
          margin: 0 auto;
        }

        .heading {
          margin: 3rem 0;
          text-align: center;
        }
      `}
    </style>
  </section>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;

  return { userAgent };
};

export default Home;
