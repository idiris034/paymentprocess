import React from 'react'
import Headings from '../DefaultComp/Headings'
import AmountTable from './AmountTable'
import Form from './Form'

function CardDetails() {
  return (
      <>
      <Headings heading='Check out'/>
      
          <div className="row row-cols-1 row-cols-md-2 mb-3 text-start"> 
          <AmountTable />
          <Form/>
         </div>
         
      </>
  )
}

export default CardDetails