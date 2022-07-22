import React from 'react'
import { Link } from "react-router-dom"
import Button from '../DefaultComp/Button'

function CardElement(props) {
  return (
      <div className="col">
        <div className="card mb-4 rounded-0 border border-dark border-2 shadow-sm">
                <div className="card-body">
                  <p className="fs-4 fw-bold mb-0">{props.ServiceName}</p>
                  <p className="fs-6">{props.ServiceFor}</p>
                  <p className="fw-bold">{props.Price}<span className="badge bg-dark rounded-0">{props.Off}</span></p>
          <h1 className="card-title pricing-card-title display-1 fw-bold mb-4"><span className="fs-4 text-muted">$</span>{props.Price}</h1>
                        <Link to='/method'><Button btn='Proceed'/></Link>  
                      <p>{props.offtonew}</p>
                      <p className="fw-bold text-start mb-1 ms-4">{props.description}</p>
                        <ul className="list-unstyled mt-0 text-start ms-4">
                            <li>{props.detail1}</li>
                            <li>{props.detail2}</li>
                            <li>{props.detail3}</li>
                            <li>{props.detail4}</li>
                            <li>{props.detail5}</li>
                        </ul>
                   <a href={props.link} className="fw-bold text-dark">see details</a>
                </div>
          </div>
      </div>
  )
}

export default CardElement