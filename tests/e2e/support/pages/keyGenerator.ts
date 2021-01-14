const keyGenerator = {
  header: '.header > .label',
  logo: '[alt="bitcoin vault logo"]',
  title: 'h2',
  languageButton: '[role="button"][aria-haspopup="listbox"]',
  phrase: '.chip-container > :nth-child(1n+0)',
  multiline: 'textarea',
  qrPublicKey: '[alt="Public key"]',
  qrPrivateKey: '.private-container > .qrcode-container > img',
  getNewKeyButton: 'div.flat-button h4.styled-text',
  exportPdfButton: '.button',
  allRightReserved: 'h5',
};

export default keyGenerator;
