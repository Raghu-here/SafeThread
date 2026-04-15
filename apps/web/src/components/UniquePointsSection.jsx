import React from 'react';
import { Typography, Card, Table, Row, Col, ConfigProvider } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const UniquePointsSection = ({ id }) => {
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
      <section id={id} style={{ padding: '100px 24px', backgroundColor: palette.cream }}>
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

          <div style={{ backgroundColor: palette.beige, padding: '40px 24px', borderRadius: '24px' }}>
            <Title level={3} style={{ color: palette.darkOlive, marginBottom: '32px', textAlign: 'center' }}>Direct Comparison</Title>
            
            {/* Desktop Table */}
            <div className="hidden md:block">
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

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {dataSource.map((item) => (
                <div key={item.key} style={{ backgroundColor: palette.cream, padding: '24px', borderRadius: '20px', border: `1px solid ${palette.mutedGrey}33` }}>
                  <div style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: palette.mutedGrey, marginBottom: '12px' }}>
                    {item.feature}
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '10px', color: palette.mutedGrey, marginBottom: '4px' }}>SafeThread (Our Edge)</div>
                    <div style={{ color: palette.terracotta, fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {item.safethread} <CheckCircleFilled />
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: palette.mutedGrey, marginBottom: '4px' }}>Traditional Methods</div>
                    <div style={{ color: palette.darkOlive, fontSize: '14px', opacity: 0.7 }}>
                      {item.traditional}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};
