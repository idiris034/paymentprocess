import React from 'react';
import CardSelection from './CardSelection';
import Whyus from './Whyus';
import Headings from '../DefaultComp/Headings';

function Method() {
  return (
    <>
       <Headings heading='Select Your Card'/>
       <div className="row row-cols-1 row-cols-md-2">
          <CardSelection />  
          <Whyus />
       </div>
      </>
    
  )
}

export default Method