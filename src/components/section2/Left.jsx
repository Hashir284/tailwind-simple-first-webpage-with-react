import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Left = () => {
  return (
    <div>
      <h1 className='font-bold text-4xl sm:text-5xl xl:w-14 leading-tight mb-8 text-white'>
        Prospective Custome Segmentation
      </h1>
      <p className='sm:text-2xl text-xl  xl:w-96 text-white'>
        Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups
      </p>
      <div className='xl:mt-36 mt-10 xl:m-0 lg:text-5xl text-4xl text-white'>
        <FontAwesomeIcon icon={faLocationArrow} />
      </div>
    </div>
  )
}

export default Left
