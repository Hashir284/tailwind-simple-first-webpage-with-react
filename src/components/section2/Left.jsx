import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Left = () => {
  return (
    <div>
      <h1 className='font-bold text-5xl w-14 leading-tight mb-8 text-white'>
        Prospective Custome Segmentation
      </h1>
      <p className='text-2xl w-96 text-white'>
        Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups
      </p>
      <div className='mt-36 text-5xl text-white'>
        <FontAwesomeIcon icon={faLocationArrow} />
      </div>
    </div>
  )
}

export default Left
