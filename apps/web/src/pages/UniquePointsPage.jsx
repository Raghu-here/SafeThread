import React from 'react';
import { Layout, Typography, Card, Table, Button, Row, Col, Space, ConfigProvider } from 'antd';
import { MailOutlined, DashboardOutlined, HistoryOutlined, CheckCircleFilled } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const UniquePointsPage = () => {
  const palette = {
    cream: '#ffe8d6',
    beige: '#ddbea9',
    mutedGrey: '#b7b7a4',
    sageGreen: '#a5a58d',
    terracotta: '#cb997e',
    darkOlive: '#6b705c',
  };

  const columns = [
    {
      title: 'Feature',
      dataIndex: 'feature',
      key: 'feature',
    },
    {
      title: 'SafeThread (Our Edge)',
      dataIndex: 'safethread',
      key: 'safethread',
      render: (text) => (
        <span style={{ color: palette.terracotta, fontWeight: 'bold' }}>
          {text} <CheckCircleFilled style={{ marginLeft: 4 }} />
        </span>
      ),
    },
    {
      title: 'Traditional Methods',
      dataIndex: 'traditional',
      key: 'traditional',
    },
  ];

  const dataSource = [
    {
      key: '1',
      feature: 'Recall Stress',
      safethread: 'Low/Supportive',
      traditional: 'High/Anxiety-Inducing',
    },
    {
      key: '2',
      feature: 'Entry Style',
      safethread: 'Fragmented/Non-Linear',
      traditional: 'Sequential/Forced',
    },
    {
      key: '3',
      feature: 'Evidence Integrity',
      safethread: 'Cryptographically Verified',
      traditional: 'Volatile/Editable',
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: palette.sageGreen,
          colorTextBase: palette.darkOlive,
          borderRadius: 16,
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', backgroundColor: palette.cream }}>
        {/* 1. Top Navigation Bar */}
        <Header style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          backgroundColor: palette.cream,
          padding: '0 50px',
          borderBottom: `1px solid ${palette.beige}`
        }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: palette.darkOlive, fontFamily: 'serif' }}>
            SafeThread
          </div>
          
          <Space size="large">
            <Button type="text" style={{ color: palette.darkOlive }}>Dashboard</Button>
            <Button type="text" style={{ color: palette.darkOlive }}>Timeline</Button>
          </Space>

          <Button 
            className="usp-btn"
            style={{ 
              backgroundColor: palette.sageGreen, 
              color: palette.cream, 
              border: 'none',
              height: '40px',
              padding: '0 24px',
              fontWeight: '500'
            }}
          >
            Our Unique Points
          </Button>

          {/* Hover Style Injection */}
          <style>{`
            .usp-btn:hover {
              background-color: ${palette.darkOlive} !important;
              color: ${palette.cream} !important;
            }
          `}</style>
        </Header>

        {/* 2. Our Unique Points & Difference Section */}
        <Content style={{ padding: '80px 50px', backgroundColor: palette.cream }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center', color: palette.darkOlive, marginBottom: '60px', fontFamily: 'serif' }}>
              Why SafeThread is Different: Understanding Trauma-Informed Legal Documentation.
            </Title>

            <Row gutter={[32, 32]} style={{ marginBottom: '80px' }}>
              <Col xs={24} md={8}>
                <Card 
                  style={{ backgroundColor: palette.beige, border: 'none', borderRadius: '24px', height: '100%' }}
                  bodyStyle={{ padding: '32px' }}
                >
                  <Title level={4} style={{ color: palette.darkOlive }}>1. Non-Linear "Brain Dump"</Title>
                  <Paragraph style={{ color: palette.darkOlive, fontSize: '15px' }}>
                    Recall fragments of memory as they surface, without the pressure of sequential storytelling. Trauma-informed UI reduces anxiety.
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card 
                  style={{ backgroundColor: palette.beige, border: 'none', borderRadius: '24px', height: '100%' }}
                  bodyStyle={{ padding: '32px' }}
                >
                  <Title level={4} style={{ color: palette.darkOlive }}>2. Automatic Chronology</Title>
                  <Paragraph style={{ color: palette.darkOlive, fontSize: '15px' }}>
                    Our logic automatically weaves your disjointed entries into a seamless, legally structured timeline.
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card 
                  style={{ backgroundColor: palette.beige, border: 'none', borderRadius: '24px', height: '100%' }}
                  bodyStyle={{ padding: '32px' }}
                >
                  <Title level={4} style={{ color: palette.darkOlive }}>3. Immutable Chain of Custody</Title>
                  <Paragraph style={{ color: palette.darkOlive, fontSize: '15px' }}>
                    Entries are hashed (SHA-256) and cannot be edited. Corrections require new entries, mathematically proving evidence integrity.
                  </Paragraph>
                </Card>
              </Col>
            </Row>

            <div style={{ backgroundColor: palette.beige, padding: '40px', borderRadius: '24px' }}>
              <Title level={3} style={{ color: palette.darkOlive, marginBottom: '32px', textAlign: 'center' }}>Direct Comparison</Title>
              <Table 
                dataSource={dataSource} 
                columns={columns} 
                pagination={false}
                style={{ borderRadius: '16px', overflow: 'hidden' }}
                components={{
                  header: {
                    cell: (props) => (
                      <th {...props} style={{ ...props.style, backgroundColor: palette.beige, color: palette.darkOlive, fontWeight: 'bold', borderBottom: `2px solid ${palette.mutedGrey}` }} />
                    )
                  }
                }}
              />
            </div>
          </div>
        </Content>

        {/* 3. Footer Section */}
        <Footer style={{ backgroundColor: palette.mutedGrey, padding: '60px 50px', color: palette.darkOlive }}>
          <Row gutter={[48, 32]} maxWidth="1200px" style={{ margin: '0 auto' }}>
            <Col xs={24} md={8}>
              <Title level={4} style={{ color: palette.darkOlive, marginBottom: '16px' }}>SafeThread</Title>
              <Text style={{ color: palette.darkOlive, fontStyle: 'italic' }}>
                Preserving the thread of truth.
              </Text>
            </Col>
            
            <Col xs={24} md={8} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Button type="link" style={{ color: palette.darkOlive, padding: 0, textAlign: 'left', height: 'auto' }}>Privacy Policy</Button>
              <Button type="link" style={{ color: palette.darkOlive, padding: 0, textAlign: 'left', height: 'auto' }}>Terms of Service</Button>
              <Button type="link" style={{ color: palette.darkOlive, padding: 0, textAlign: 'left', height: 'auto' }}>Cookie Settings</Button>
            </Col>

            <Col xs={24} md={8}>
              <Space direction="vertical" size="small">
                <Space>
                  <MailOutlined style={{ color: palette.darkOlive }} />
                  <a href="mailto:safethread143@outlook.com" style={{ color: palette.darkOlive, textDecoration: 'underline' }}>
                    safethread143@outlook.com
                  </a>
                </Space>
                <Text style={{ color: palette.darkOlive, opacity: 0.8, display: 'block', marginTop: '16px' }}>
                  © 2026 SafeThread. All rights reserved.
                </Text>
              </Space>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default UniquePointsPage;
