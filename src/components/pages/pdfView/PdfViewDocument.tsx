import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { GeneratedKey } from '../keyGenerator/KeyGeneratorContent';
import { palette } from '../../../styles';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: palette.background
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

export const PdfViewDocument = (props: GeneratedKey) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>asd</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);