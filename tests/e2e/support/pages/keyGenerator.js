const keyGenerator = {
  header: '.header > .label',
  logo: '.logo',
  title: 'h2',
  languageButton:
    '.language-picker .MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiInputBase-input.MuiInput-input',
  phrase: '.chip-container > :nth-child(1n+0)',
  multiline: 'textarea',
  qrPublicKey: '[alt="Public key"]',
  qrPrivateKey: '.private-container > .qrcode-container > img',
  getNewKeyButton: '.styled-text',
  exportPdfButton: '.button',
  allRightReserved: 'h5',
};
export default keyGenerator;
