import i18n from '../../../../locale/i18n';
import UbuntuBold from './fonts/Ubuntu-Bold.ttf';
import UbuntuRegular from './fonts/Ubuntu-Regular.ttf';
import UbuntuLight from './fonts/Ubuntu-Light.ttf';
import NasuRegular from './fonts/Nasu-Regular.ttf';
import NasuBold from './fonts/Nasu-Bold.ttf';
import MicrosoftYaHei from './fonts/Microsoft-YaHei.ttf';
import NanumGothicRegular from './fonts/NanumGothic-Regular.ttf';
import NanumGothicBold from './fonts/NanumGothic-Bold.ttf';
import NanumGothicLight from './fonts/NanumGothic-Light.ttf';

let currentLanguage = i18n.language || window.localStorage.i18nextLng || 'en';

const UbuntuLanguages = ['en', 'es', 'hi', 'pt'];
const NasuLanguages = ['vi', 'tr', 'ja'];
const NanumLanguages = ['ko'];
const MicrosoftYaHeiLanguages = ['zh'];

export const getBoldFontSrc = () => {
  if (UbuntuLanguages.includes(currentLanguage)) {
    return UbuntuBold;
  } else if (NasuLanguages.includes(currentLanguage)) {
    return NasuBold;
  } else if (NanumLanguages.includes(currentLanguage)) {
    return NanumGothicBold;
  } else if (MicrosoftYaHeiLanguages.includes(currentLanguage)) {
    return MicrosoftYaHei;
  }
  return UbuntuBold;
}

export const getLightFontSrc = () => {
  if (UbuntuLanguages.includes(currentLanguage)) {
    return UbuntuLight;
  } else if (NasuLanguages.includes(currentLanguage)) {
    return NasuRegular;
  } else if (NanumLanguages.includes(currentLanguage)) {
    return NanumGothicLight;
  } else if (MicrosoftYaHeiLanguages.includes(currentLanguage)) {
    return MicrosoftYaHei;
  }
  return UbuntuLight;
}

export const getRegularFontSrc = () => {
  if (UbuntuLanguages.includes(currentLanguage)) {
    return UbuntuRegular;
  } else if (NasuLanguages.includes(currentLanguage)) {
    return NasuRegular;
  } else if (NanumLanguages.includes(currentLanguage)) {
    return NanumGothicRegular;
  } else if (MicrosoftYaHeiLanguages.includes(currentLanguage)) {
    return MicrosoftYaHei;
  }
  return UbuntuRegular;
}