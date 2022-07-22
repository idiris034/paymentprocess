import React from 'react'
import AmountDetails from './AmountDetails'

function AmountTable() {
    return (
      <>
          <div class="col">
            <div class="border border-2 border-dark p-4">
                    <AmountDetails ItemName='Original price: '  Pri='$30'/>
                    <AmountDetails ItemName=' Discounts: ' Dis='20%' Pri='$24' />
                    <AmountDetails ItemName='Tax: '  Pri='$2'/>             
                            <hr/>
                     <AmountDetails ItemName='Total:' Pri='$26.0'/>
                   
                </div>
                <p className='fs-5 mt-4'>This is the best payment apps offer compatibility with a wide range of credit and debit 
                cards, quick transfer speed, and support a wide variety of devices. 
                We compared ease of use, lack of payment limitations, fund transfers, and even 
                incentives for consumers. Learn more so you can choose the right option for your device.</p>
        </div>
    </>
  )
}

export default AmountTable