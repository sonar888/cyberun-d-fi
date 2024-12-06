
'use client'

import { person } from '@jsonforms/examples';

import schema from './schema.json';
import uiSchema from './uiSchema.json'
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';

import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';

// import "./style.css";

// const schema = schema;
// const uiSchema = uiSchema;
const InitialData ={};

export default function Form() {
    const [data, setData] = useState(InitialData);
    return (
      <div className='App'>
        <JsonForms
          schema={schema}
          uischema={uiSchema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
          // onChange={({ data, errors }) => setData(data)}
        />
      </div>
    );
  }