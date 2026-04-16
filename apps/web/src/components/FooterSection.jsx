import React from 'react';
import { Layout, Typography, Row, Col, Button, Space, ConfigProvider } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Title, Text } = Typography;

export const FooterSection = () => {
  const palette = {
    mutedGrey: '#b7b7a4',
    darkOlive: '#6b705c',
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextBase: palette.darkOlive,
        },
      }}
    >
      <Footer style={{ backgroundColor: palette.mutedGrey, padding: '60px 50px', color: palette.darkOlive }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[48, 32]}>
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
                  © {new Date().getFullYear()} SafeThread. All rights reserved.
                </Text>
              </Space>
            </Col>
          </Row>
        </div>
      </Footer>
    </ConfigProvider>
  );
};
