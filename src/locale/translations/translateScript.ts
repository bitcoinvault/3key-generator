export const translateScript = () => {
  const translate: any = {};

  [
    {
      Keys: 'header__title',
      Values: '3密钥生成器',
    },
    {
      Keys: 'header__logoAlt',
      Values: 'bitcoin vault 图标',
    },
    {
      Keys: 'content__title',
      Values: '生成ECDSA 密钥',
    },
    {
      Keys: 'content__publicKey',
      Values: '公共密钥',
    },
    {
      Keys: 'content__multiline',
      Values: '多行',
    },
    {
      Keys: 'content__publicKeyQrCode',
      Values: '公共密钥二维码',
    },
    {
      Keys: 'content__privateKey',
      Values: '私钥',
    },
    {
      Keys: 'content__phrase',
      Values: '短语',
    },
    {
      Keys: 'content__privateKeyQrCode',
      Values: '私钥二维码',
    },
    {
      Keys: 'content__generateNewKey',
      Values: '生成新密钥',
    },
    {
      Keys: 'content__exportAsPdf',
      Values: '以PDF导出',
    },
    {
      Keys: 'content__pdfFileName',
      Values: '已生成的_ecdsa_密钥.pdf',
    },
    {
      Keys: 'footer__title',
      Values: '© 比特币Vault保留所有权利。',
    },
    {
      Keys: 'pdf__title',
      Values: '生成的ECDSA密钥',
    },
    {
      Keys: 'pdf__publicKey',
      Values: '公共密钥',
    },
    {
      Keys: 'pdf__privateKey',
      Values: '私钥',
    },
    {
      Keys: 'pdf__nextSteps',
      Values:
        '此密钥已成功生成。请将其保存在安全位置，请勿与任何人分享密钥。此密钥将用于之后设置您的钱包（在电脑或手机应用中）。',
    },
  ].map((item: any) => {
    if (item.Keys.includes('pdf__')) {
      const name = item.Keys.substring(5);
      translate.pdf = { ...translate.pdf, [name]: item.Values };
    } else if (item.Keys.includes('footer__')) {
      const name = item.Keys.substring(8);
      translate.footer = { ...translate.footer, [name]: item.Values };
    } else if (item.Keys.includes('content__')) {
      const name = item.Keys.substring(9);
      translate.content = { ...translate.content, [name]: item.Values };
    } else if (item.Keys.includes('header__')) {
      const name = item.Keys.substring(8);
      translate.header = { ...translate.header, [name]: item.Values };
    }
  });
};
