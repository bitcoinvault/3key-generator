import { crypto } from 'bitcoinjs-lib';
import randombytes from 'randombytes';
import * as bip39 from 'bip39';
import { pbkdf2Sync } from 'pbkdf2';
import * as ecurve from 'ecurve';
import { GeneratedKey } from '../components/pages/keyGenerator/KeyGeneratorContent';
const bigi = require('bigi');

const getBitsFromBytes = (bytes: Buffer) => {
  let bits = '';
  bytes.forEach(bit => {
    let binaryBit = bit.toString(2);
    const missingZeros = 8 - binaryBit.length;
    for (let i = missingZeros; i > 0; i--) {
      binaryBit = '0' + binaryBit;
    }
    bits += binaryBit;
  });
  return bits;
}

const create132BitKeyWithSha256 = (generatedBytes: Buffer, random128bits: string) => {
  const sha256Bits = getBitsFromBytes(crypto.sha256(generatedBytes));
  return sha256Bits.slice(0, 4) + random128bits;
}

const generateWordsFromBytes = (random132bits: string) => {
  const dividedBits = random132bits.match(/.{1,11}/g);
  return dividedBits?.map(bit => {
    const index = parseInt(bit, 2);
    return bip39.wordlists.english[index];
  });
}

export const generateNewKeys = (): GeneratedKey => {
  const generatedBytes = randombytes(16);
  const random128bits = getBitsFromBytes(generatedBytes);
  const random132bits = create132BitKeyWithSha256(generatedBytes, random128bits);
  const generatedWords = generateWordsFromBytes(random132bits);
  const privateKey = pbkdf2Sync(random128bits, random132bits.slice(0, 4), 1, 256, 'sha256');
  const curve = ecurve.getCurveByName('secp256k1');
  const publicKey = curve.G.multiply(bigi.fromBuffer(privateKey)).getEncoded(false).toString('hex');
  return {
    publicKey,
    privateKey: privateKey.toString('hex'),
    words: generatedWords || []
  };
}
