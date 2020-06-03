import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { KeyGenerator } from '../keyGenerator/KeyGeneratorContent';
import { en } from '../../../locale/en';

const breakTheWord = (word: string) => {
  let words = null;
  if (word.length > 90) {
    words = word.match(/.{1,90}/g)
  }
  return words || [word];
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    fontFamily: 'Times-Roman',
  },
  chip: {
    fontSize: 12,
    fontFamily: 'Times-Roman',
    padding: 8,
    backgroundColor: 'rgb(234, 234, 234)',
    borderRadius: 4,
    marginBottom: 16,
    marginRight: 8,
    marginLeft: 8,
    width: '100px',
  },
  image: {
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 200
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});

export const KeyGeneratorPdf = (props: KeyGenerator) => {
  const { publicKey, publicKeyImgUrl, privateKeyImgUrl, words } = props;

  return (
    <Document>
      <Page size="A4" style={styles.body} wrap>
        <Text style={styles.title}>{en.pdf.title}</Text>
        <View>
          <Text style={styles.subtitle}>{en.pdf.publicKey}</Text>
          <Text style={styles.text}>{breakTheWord(publicKey).map((word) => `${word}\n`)}</Text>
          <Image style={styles.image} src={publicKeyImgUrl} />
        </View>
        <View>
          <Text style={styles.subtitle}>{en.pdf.privateKey}</Text>
          <Image style={styles.image} src={privateKeyImgUrl} />
          <View style={styles.chipContainer}>
            {words.map((word: string, index: number) => (<Text style={styles.chip}>{index + 1}. {word}</Text>))}
          </View>
        </View>
      </Page>
    </Document>)
};