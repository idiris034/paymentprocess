import React from 'react'
import Button from '../DefaultComp/Button'
import {Link} from 'react-router-dom'

function Form() {
  return (

    <div className="col">
            <div className="ps-4 pe-4">
            <div className="mbfa-rotate-270">
                <label for="exampleFormControlInput1" className="form-label">Name On Card</label>
                <input className="form-control form-control-lg border-dark rounded-0" type="text"/>
            </div>
            <div className="mb-2">
                <label for="exampleFormControlInput1" className="form-label">Card Number</label>
                <input className="form-control form-control-lg border-dark rounded-0" type="text"/>
            </div>
            <div className="mb-2">
                <label for="exampleFormControlInput1" className="form-label">Security Code</label>
                <input className="form-control form-control-lg border-dark rounded-0" type="text"/>
            </div>
            <div className="mb-2">
                <label for="exampleFormControlInput1" className="form-label">Expiration Date</label>
                <input className="form-control form-control-lg border-dark rounded-0" type="text"/>
            </div>
              
              <Link to= '/greeting'><Button btn='Complete Checkout'/></Link> 
             <p>By completing your purchase you agree to these Terms of Service.</p>
            </div>
            </div>
  )
}

export default Form