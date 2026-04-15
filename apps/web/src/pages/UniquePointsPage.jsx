import React from 'react';
import { Layout, Button, Space } from 'antd';
import { UniquePointsSection } from '../components/UniquePointsSection';

const { Header, Footer } = Layout;

export const UniquePointsPage = () => {
  const palette = {
    cream: '#ffe8d6',
    mutedGrey: '#b7b7a4',
    sageGreen: '#a5a58d',
    darkOlive: '#6b705c',
    beige: '#ddbea9',
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

      <Footer style={{ backgroundColor: palette.mutedGrey, height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: palette.darkOlive }}>© 2026 SafeThread. All rights reserved.</span>
      </Footer>
    </Layout>
  );
};
