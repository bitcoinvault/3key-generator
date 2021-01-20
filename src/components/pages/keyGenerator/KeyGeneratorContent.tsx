import React from 'react';
import { Grid } from '@material-ui/core';
import { PDFDownloadLink } from '@react-pdf/renderer';
import QRCode, { QRCodeErrorCorrectionLevel } from 'qrcode';
import { withTranslation, WithTranslation } from 'react-i18next';

import { Chip } from '../../common/Chip';
import { Button } from '../../common/Button';
import { StyledText } from '../../common/StyledText';
import { MultilineInput } from '../../common/MultilineInput';
import { Label } from '../../common/Label';
import { generateNewKeys } from '../../../service/KeyGenerator';

import { KeyGeneratorPdf } from './KeyGeneratorPdf';

import './keyGeneratorContent.scss';

export interface GeneratedKey {
  privateKey: string;
  publicKey: string;
  words: string[];
}

export interface KeyGenerator extends GeneratedKey {
  publicKeyImgUrl: string;
  privateKeyImgUrl: string;
}

class KeyGeneratorContent extends React.PureComponent<WithTranslation, KeyGenerator> {
  constructor(props: WithTranslation) {
    super(props);
    this.state = {
      privateKey: '',
      publicKey: '',
      words: [],
      publicKeyImgUrl: '',
      privateKeyImgUrl: '',
    };
  }

  componentDidMount() {
    this.onGenerateNewKey();
  }

  onGenerateNewKey = async () => {
    const keys = generateNewKeys();
    this.setState({
      privateKey: keys.privateKey,
      publicKey: keys.publicKey,
      words: keys.words,
    });
    try {
      const options = {
        margin: 5,
        errorCorrectionLevel: 'H' as QRCodeErrorCorrectionLevel,
      };
      const publicKeyImgUrl = await QRCode.toDataURL(keys.publicKey, options);
      const privateKeyImgUrl = await QRCode.toDataURL(keys.privateKey, options);
      this.setState({
        privateKeyImgUrl,
        publicKeyImgUrl,
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { privateKey, publicKey, words, privateKeyImgUrl, publicKeyImgUrl } = this.state;
    const { t } = this.props;
    return (
      <div className="container">
        <h2>{t('content:title')}</h2>
        <Grid container justify="center" style={{ marginTop: 40, marginBottom: 40 }}>
          <Grid item xs={12} sm={10} md={6} lg={6} style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="height-container" style={{ height: '100%' }}>
              <h3>{t('content:publicKey')}</h3>
              <Label label={t('content:multiline')} />
              <MultilineInput value={publicKey} />
            </div>
            <div className="qrcode-container">
              <Label label={t('content:publicKeyQrCode')} />
              <img src={publicKeyImgUrl} alt={t('content:publicKey')} width={200} />
            </div>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={6} className="private-container">
            <div className="height-container">
              <h3>{t('content:privateKey')}</h3>
              <Label label={t('content:phrase')} />
              <div className="chip-container">
                {words?.map((word, index) => (
                  <Chip key={index} label={`${index + 1}. ${word}`} />
                ))}
              </div>
            </div>
            <div className="qrcode-container">
              <Label label={t('content:privateKeyQrCode')} />
              <img src={privateKeyImgUrl} alt={t('content:privateKey')} width={200} />
            </div>
          </Grid>
        </Grid>
        <div className="buttons-container">
          <PDFDownloadLink
            document={
              <KeyGeneratorPdf
                t={t}
                publicKeyImgUrl={publicKeyImgUrl}
                privateKeyImgUrl={privateKeyImgUrl}
                publicKey={publicKey}
                words={words}
                privateKey={privateKey}
              />
            }
            fileName={t('content:pdfFileName')}
          >
            <Button label={t('content:exportAsPdf')} />
          </PDFDownloadLink>
          <div onClick={this.onGenerateNewKey} className="flat-button">
            <StyledText label={t('content:generateNewKey')} />
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(KeyGeneratorContent);
