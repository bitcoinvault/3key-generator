import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { KeyGenerator } from '../keyGenerator/KeyGeneratorContent';
import { pdf } from 'assets';

Font.register({ family: 'Ubuntu', src: '/fonts/Ubuntu-Regular.ttf' });
Font.register({ family: 'Ubuntu-Bold', src: '/fonts/Ubuntu-Bold.ttf' });
Font.register({ family: 'Ubuntu-Light', src: '/fonts/Ubuntu-Light.ttf' });

const styles = StyleSheet.create({
  body: {
    paddingTop: 55,
    paddingBottom: 15,
    paddingHorizontal: 32,
    fontFamily: 'Ubuntu'
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Bold',
    marginBottom: 16,
  },
  titleContainer: {
    marginBottom: 60
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Ubuntu-Bold',
    alignSelf: 'center',
    marginBottom: 32,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    border: 1,
    borderColor: 'rgb(204, 204, 204)',
    borderRadius: 20,
    marginBottom: 73,
    paddingVertical: 16,
  },
  caption: {
    fontFamily: 'Ubuntu-Light',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
    color: 'rgb(148, 149, 149)'
  },
  chip: {
    fontSize: 10,
    padding: 8,
    backgroundColor: 'rgb(234, 234, 234)',
    borderRadius: 4,
    marginBottom: 16,
    marginRight: 8,
    marginLeft: 8,
    width: 'auto',
    fontWeight: 'bold'
  },
  image: {
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
  },
  imageContainer: {
    marginTop: 55
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    fontFamily: 'Ubuntu-Bold'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 1,
  },
  column: {
    flexGrow: 0,
    flexBasis: 300,
    flexShrink: 1,
  }
});

const breakWord = (word: string) => {
  let words = null;
  if (word.length > 30) {
    words = word.match(/.{1,30}/g)
  }
  return words || [word];
}

interface Props extends KeyGenerator {
  t: any;
}

export const KeyGeneratorPdf = (props: Props) => {
  const { publicKey, publicKeyImgUrl, privateKeyImgUrl, words, t } = props;
  return (
    <Document>
      <Page size="A4" wrap>
        <Image src={pdf.header} />
        <View style={styles.body}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{t('pdf:title')}</Text>
            <Text style={styles.caption}>{t('pdf:nextSteps')}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.subtitle}>{t('pdf:publicKey')}</Text>
              <Text style={styles.caption}>{t('content:multiline')}</Text>
              <Text style={styles.text}>{breakWord(publicKey).map((word) => `${word}\n`)}</Text>
              <View style={styles.imageContainer}>
                <Text style={styles.caption}>{t('content:publicKeyQrCode')}</Text>
                <Image style={styles.image} src={publicKeyImgUrl} />
              </View>
            </View>
            <View style={styles.column}>
              <Text style={styles.subtitle}>{t('pdf:privateKey')}</Text>
              <Text style={styles.caption}>{t('content:phrase')}</Text>
              <View style={styles.chipContainer}>
                {words.map((word: string, index: number) => (<Text key={index} style={styles.chip}>{index + 1}. {word}</Text>))}
              </View>
              <View style={styles.imageContainer}>
                <Text style={styles.caption}>{t('content:privateKeyQrCode')}</Text>
                <Image style={styles.image} src={privateKeyImgUrl} />
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>);
};