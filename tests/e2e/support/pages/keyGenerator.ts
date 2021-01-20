const keyGenerator = {
  header: {
    logo: '[data-testId="bitcoint-vault-logo"]',
    title: '[data-testId="header"]',
  },
  content: {
    title: '[data-testId="content-title"]',
    publicKey: '[data-testId="public-key"]',
    publicKeyQrCode: '[data-testId="public-key-qr-code"]',
    privateKeyPhrase: '[data-testId="private-key-phrase"]',
    privateKeyQrCode: '[data-testId="private-key-qr-code"]',
    exportPdfButton: '[data-testId="export-pdf-button"]',
    generateNewKeyButton: '[data-testId="generate-new-key-button"]',
  },
  footer: {
    copyright: '[data-testId="footer-copyright"]',
    languageButton: '[data-testId="language-picker-select"]',
  },
};

export default keyGenerator;
