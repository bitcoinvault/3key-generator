import React from 'react';
import './languagePicker.scss';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import i18n, { getUsedLanguage } from '../../../locale/i18n';

interface Language {
  label: string;
  value: string;
}

export const LanguagePicker = () => {
  const languages: Language[] = [
    {
      label: 'English',
      value: 'en'
    },
    {
      label: 'Spanish',
      value: 'es'
    },
    {
      label: 'Hindi',
      value: 'hi'
    },
    {
      label: 'Japanese',
      value: 'ja'
    },
    {
      label: 'Korean',
      value: 'ko'
    },
    {
      label: 'Portuguese',
      value: 'pt'
    },
    {
      label: 'Chinese',
      value: 'zh'
    },
    {
      label: 'Vietnamese',
      value: 'vi'
    },
    {
      label: 'Turkish',
      value: 'tr'
    },
  ];

  const onChange = (event: any) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  }

  const selectedLanguage = getUsedLanguage();

  const isLanguage = languages.map(language => language.value === selectedLanguage).includes(true);

  return (
    <Select className="language-picker" onChange={onChange} value={isLanguage ? selectedLanguage : 'en'}>
      {languages.map(language => <MenuItem key={language.value} value={language.value}>{language.label}</MenuItem>)}
    </Select>
  );
};