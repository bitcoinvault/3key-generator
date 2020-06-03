import React from 'react';
import { Chip } from '../../common/Chip';
import { Button } from '../../common/Button';
import { FlatButton } from '../../common/FlatButton';
import { MultilineInput } from '../../common/MultilineInput';
import { Grid } from '@material-ui/core';
import { Label } from '../../common/Label';
import { generateNewKeys } from '../../../service/KeyGenerator';
import { PDFDownloadLink } from '@react-pdf/renderer';
import QRCode from 'qrcode';
import { KeyGeneratorPdf } from './KeyGeneratorPdf';
import { en } from '../../../locale/en';
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

export class KeyGeneratorContent extends React.PureComponent<any, KeyGenerator> {
  constructor(props: any) {
    super(props);
    this.state = {
      privateKey: '',
      publicKey: '',
      words: [],
      publicKeyImgUrl: '',
      privateKeyImgUrl: ''
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
      words: keys.words
    });
    try {
      const publicKeyImgUrl = await QRCode.toDataURL(keys.publicKey);
      const privateKeyImgUrl = await QRCode.toDataURL(keys.privateKey);
      this.setState({
        privateKeyImgUrl,
        publicKeyImgUrl
      })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { privateKey, publicKey, words, privateKeyImgUrl, publicKeyImgUrl } = this.state;
    return (
      <div className="container">
        <h2>{en.content.title}</h2>
        <Grid container justify="center" style={{ marginTop: '3em' }}>
          <Grid item xs={12} sm={10} md={6} lg={6}>
            <div className="height-container">
              <h3>{en.content.publicKey}</h3>
              <Label label={en.content.multiline} />
              <MultilineInput value={publicKey} />
            </div>
            <Label label={en.content.publicKeyQrCode} />
            <img src={publicKeyImgUrl} alt={en.content.publicKey} width={200} />
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={6} className="private-container">
            <div className="height-container">
              <h3>{en.content.privateKey}</h3>
              <Label label={en.content.phrase} />
              <div className="chip-container">
                {words?.map((word, index) => (<Chip label={`${index + 1}. ${word}`} />))}
              </div>
            </div>
            <Label label={en.content.privateKeyQrCode} />
            <img src={privateKeyImgUrl} alt={en.content.privateKey} width={200} />
          </Grid>
        </Grid>
        <div className="buttons-container">
          <Button onClick={this.onGenerateNewKey} label={en.content.generateNewKey} />
          <PDFDownloadLink document={<KeyGeneratorPdf publicKeyImgUrl={publicKeyImgUrl} privateKeyImgUrl={privateKeyImgUrl} publicKey={publicKey} words={words} privateKey={privateKey} />} fileName={en.content.pdfFileName}><FlatButton label={en.content.exportAsPdf} /></PDFDownloadLink>
        </div>
      </div>
    );
  }
}
