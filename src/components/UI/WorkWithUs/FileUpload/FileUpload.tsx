import React, { useState } from 'react';
import { CustomInput, FormGroup, FormText, Label } from 'reactstrap';

export default function FileUpload(): JSX.Element {
  const [fileName] = useState('');

  return (
    <FormGroup>
      <Label for="exampleFile">Hoja de vida</Label>
      <CustomInput
        type="file"
        name="file"
        id="exampleFile"
        label={fileName || 'Selecciona tu hoja de vida...'}
      />
      <FormText color="muted">
        Adjunta el PDF de tu hoja de vida para que nosotros la podamos analizar.
      </FormText>
    </FormGroup>
  );
}
