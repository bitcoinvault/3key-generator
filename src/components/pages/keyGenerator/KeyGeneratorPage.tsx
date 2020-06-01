import React from 'react';
import { Header } from '../../sections/Header';
import { palette } from '../../../styles';
import { Content } from '../../sections/Content';
import { KeyGeneratorContent } from './KeyGeneratorContent';

export const KeyGeneratorPage = () => {


  return (
    <div style={styles.container}>
      <Header />
      <Content>
        <KeyGeneratorContent />
      </Content>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: palette.background,
    height: '100%'
  }
}