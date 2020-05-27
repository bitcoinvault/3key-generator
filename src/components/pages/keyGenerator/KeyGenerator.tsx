import React from 'react';
import { Chip } from '../../common/Chip';
import { Button } from '../../common/Button';
import { FlatButton } from '../../common/FlatButton';
import { MultilineInput } from '../../common/MultilineInput';
import { Header } from '../../sections/Header';


export const KeyGenerator = () => {


  return (
    <div>
      <Header />
      <Chip label="1. advanced" />
      <Button label="Generate new key" />
      <FlatButton label="Export as PDF" />
      <MultilineInput />
    </div>
  )
}