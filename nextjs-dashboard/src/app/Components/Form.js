
'use client'

import React from 'react';



//Importing the Json forms, schema, Ui and initial data input
import { JsonForms } from '@jsonforms/react';
import schema from './schema.json';
import uiSchema from './uiSchema.json';
import initialData from './data.json';

//Importing the Json forms renderes
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';



export default function Form() {

  //Initializing the state using the imported data.json
    const [data, setData] = React.useState(initialData);

  //The function to calculate the percentage of each country
    function totalHundred (data) {
      //Retrieving each country from the array
      var listePays = data.map((element)=> element.Pays)

      //CHecking how many countries there are in the new array
      const totalPays = listePays.length
      
      //Creating a new array with each country only appearing once 
      const paysUnique = [...new Set(listePays)]
      console.log(paysUnique)

      //For each country loop, 
      paysUnique.forEach(currPays => {
      const numPays = listePays.filter(pays => pays ===currPays) //... find the number of instances it appears in the array...
      console.log(`Pays  ${currPays} represents ${Math.round(numPays.length * 100 / totalPays)}%`) //...create the pourcentage and log in the console

    })
    
   }

   //Each time a country is added (i.e. data is updated), the percentage is calculated again
    React.useEffect(()=> {
      console.log(data)
      totalHundred(data.Tableau)
    }, [{data}]);


  // Return the JSON form
    return (
      <div className='App'>
        <JsonForms
          schema={schema}
          uischema={uiSchema}
          data={data}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={({data, errors})=> setData(data)}
        />
      </div>
    );
  }

