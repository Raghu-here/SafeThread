import React from 'react';
import { Layout, Button, Space } from 'antd';
import { UniquePointsSection } from '../components/UniquePointsSection';
import { FooterSection } from '../components/FooterSection';

const { Header } = Layout;

export const UniquePointsPage = () => {
  const palette = {
    cream: '#ffe8d6',
    darkOlive: '#6b705c',
    beige: '#ddbea9',
    sageGreen: '#a5a58d',
  };

  return (
    <Layout>
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
      </Header>

      <UniquePointsSection />

      <FooterSection />
    </Layout>
  );
};
