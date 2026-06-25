import React from 'react'
import Left from './Left'
import Right from './Right'

const Section2 = () => {
    const card = [
        {
            img: 'cardimage1.jfif',
            paragraph: 'Prime customers that have access to bank credit and are satisfied with the current product',
            btn: 'Satisfied'
        },
        {
            img: 'cardimage2.webp',
            paragraph: 'Prime customers, that have access to bank credit and are not satisfied with the current service',
            btn: 'Undeserved'
        },
        {
            img: 'cardimage3.jfif',
            paragraph: 'Customers from near-prime and sub-prime segments with no access to bank credit',
            btn: 'Undebanked'
        }
    ]

  return (
    <div className='flex justify-between gap-11 flex-col xl:flex-row'>
      <Left />
      <div className='flex gap-5 lg:flex-nowrap gap-y-9 flex-wrap  justify-center'>
        {
            card.map((e, i)=>{
                return <Right card={e} i={i} key={i}/>
            })
        }
      </div>
    </div>
  )
}

export default Section2
