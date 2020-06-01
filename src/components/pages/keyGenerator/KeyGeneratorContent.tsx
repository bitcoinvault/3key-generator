import React from 'react';
import { Chip } from '../../common/Chip';
import { Button } from '../../common/Button';
import { FlatButton } from '../../common/FlatButton';
import { MultilineInput } from '../../common/MultilineInput';
import { typography } from '../../../styles';
import { Grid } from '@material-ui/core';
import { Label } from '../../common/Label';
import { generateNewKeys } from '../../../service/KeyGenerator';
import ReactPDF, {PDFDownloadLink} from '@react-pdf/renderer';
import { PdfViewDocument } from '../pdfView/PdfViewDocument';
const QrCode = require('qrcode-react');

export interface GeneratedKey {
  privateKey: string;
  publicKey: string;
  words: string[];
}

export class KeyGeneratorContent extends React.PureComponent<any, GeneratedKey> {
  constructor(props: any) {
    super(props);
    this.state = {
      privateKey: '',
      publicKey: '',
      words: []
    };
  }

  componentDidMount() {
    this.onGenerateNewKey();
  }

  onGenerateNewKey = () => {
    const keys = generateNewKeys();
    this.setState({
      privateKey: keys.privateKey,
      publicKey: keys.publicKey,
      words: keys.words
    });
  }

  render() {
    const { privateKey, publicKey, words } = this.state;
    return (
      <div style={styles.container}>
        <span style={styles.headline}>Generate ECDSA key</span>
        <Grid container justify="center" style={{ marginTop: '3em' }}>
          <Grid item xs={12} sm={10} md={6} lg={6}>
            <div>
              <div style={styles.heightContainer}>
                <span style={styles.label}>Public key</span>
                <Label label="Multiline" />
                <MultilineInput value={publicKey} />
              </div>
              <Label label="Public key QR code" />
              <QrCode renderAs="svg" value={publicKey} />
            </div>
          </Grid>
          <Grid item xs={12} sm={10} md={6} lg={6}>
            <div>
              <div style={styles.heightContainer}>
                <span style={styles.label}>Private key</span>
                <Label label="Phrase" />
                <div style={styles.chipContainer}>
                  {words?.map((word, index) => (<Chip label={`${index + 1}. ${word}`} />))}
                </div>
              </div>
              <Label label="Private key QR code" />
              <QrCode value={privateKey} />
            </div>
          </Grid>
        </Grid>
        <div style={styles.buttonsContainer}>
          <Button onClick={this.onGenerateNewKey} label="Generate new key" />
          <PDFDownloadLink document={<PdfViewDocument publicKey={publicKey} words={words} privateKey={privateKey} />} fileName="generated_ecdsa_keys.pdf"><FlatButton label="Export as PDF" /></PDFDownloadLink>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center' as const,
  },
  headline: {
    ...typography.headline2,
  },
  label: {
    ...typography.headline3,
  },
  buttonsContainer: {
    width: 320,
    margin: '0 auto',
    marginTop: '2em'
  },
  heightContainer: {
    height: 280,
  },
  chipContainer: {
    'wordWrap': 'break-word' as const,
  }
}