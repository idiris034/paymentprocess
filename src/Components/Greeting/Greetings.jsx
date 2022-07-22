import React from 'react'
import Button from '../DefaultComp/Button'
import {Link} from 'react-router-dom'

const Greetings = () => {
    return (
  <section className="pt-5 pb-5 mt-0 align-items-center d-flex">
   <div className="container">
      <div className="pt-5 row justify-content-center align-items-center d-flex text-center h-100">
      <div className="col-12 col-md-8  h-50 ">
      <h1 className="display-2  mb-2 mt-5 mb-4"><strong>Thank You</strong> </h1>
      <p className="lead">THANK YOU SO MUCH FOR YOUR ORDER. ENJOY 10% OFF YOUR NEXT PURCHASE WITH 
      CODE THANK YOU.
      </p>
      <Link to='/'> <Button btn='Continue Shopping'/></Link>
      </div>
		 </div>
    </div>
  </section>
  )
}

export default Greetings