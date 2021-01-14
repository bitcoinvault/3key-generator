import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';

import { pdf } from 'assets';

import { KeyGenerator } from '../keyGenerator/KeyGeneratorContent';

import {
  getLightFontSrc,
  getBoldFontSrc,
  getRegularFontSrc,
} from './keyGeneratorPdf/fontService';

Font.register({ family: 'Font', src: getRegularFontSrc() });
Font.register({ family: 'Font-Bold', src: getBoldFontSrc() });
Font.register({ family: 'Font-Light', src: getLightFontSrc() });

const styles = StyleSheet.create({
  body: {
    paddingTop: 34,
    paddingHorizontal: 32,
    fontFamily: 'Font',
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'Font-Bold',
    marginBottom: 16,
  },
  titleContainer: {
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Font-Bold',
    alignSelf: 'center',
    marginBottom: 28,
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
    fontFamily: 'Font-Light',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
    color: 'rgb(148, 149, 149)',
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
    fontWeight: 'bold',
  },
  image: {
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
  },
  imageContainer: {
    marginTop: 24,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    fontFamily: 'Font-Bold',
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
  },
});

const breakWord = (word: string) => {
  let words = null;
  if (word.length > 30) {
    words = word.match(/.{1,30}/g);
  }
  return words || [word];
};

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
              <Text style={styles.text}>
                {breakWord(publicKey).map((word) => `${word}\n`)}
              </Text>
              <View style={styles.imageContainer}>
                <Text style={styles.caption}>
                  {t('content:publicKeyQrCode')}
                </Text>
                <Image style={styles.image} src={publicKeyImgUrl} />
              </View>
            </View>
            <View style={styles.column}>
              <Text style={styles.subtitle}>{t('pdf:privateKey')}</Text>
              <Text style={styles.caption}>{t('content:phrase')}</Text>
              <View style={styles.chipContainer}>
                {words.map((word: string, index: number) => (
                  <Text key={index} style={styles.chip}>
                    {index + 1}. {word}
                  </Text>
                ))}
              </View>
              <View style={styles.imageContainer}>
                <Text style={styles.caption}>
                  {t('content:privateKeyQrCode')}
                </Text>
                <Image style={styles.image} src={privateKeyImgUrl} />
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
