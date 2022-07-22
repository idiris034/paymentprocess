import React from 'react'
import WhyusSec from './WhyusSec'

function Whyus() {
  return (
    <div className="col">
          <p className="fs-3 fw-bold">There are 3 reasons for this:</p>
            <WhyusSec whyustext='1) We are good at what we do and we get results. ' />
            <WhyusSec whyustext='2) We put a lot of effort into developing relationships with our clients so we can provide meaningful advice. ' />
            <WhyusSec whyustext='3) We work on a no surprises policys.' />
    </div>
  )
}

export default Whyus