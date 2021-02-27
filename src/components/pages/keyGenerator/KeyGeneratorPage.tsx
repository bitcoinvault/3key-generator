import React from 'react';

import Header from '../../sections/Header';
import { Content } from '../../sections/Content';
import Footer from '../../sections/Footer';

import KeyGeneratorContent from './KeyGeneratorContent';
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
  );
};
