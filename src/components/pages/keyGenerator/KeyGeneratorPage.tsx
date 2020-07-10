import React from 'react';
import Header from '../../sections/Header';
import { Content } from '../../sections/Content';
import KeyGeneratorContent from './KeyGeneratorContent';
import Footer from '../../sections/Footer';
import './keyGeneratorPage.scss';

export const KeyGeneratorPage = () => {
  return (
    <div className="key-generator-page">
      <Header />
      <Content>
        <KeyGeneratorContent />
      </Content>
      <Footer />
    </div>
  )
}
