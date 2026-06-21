import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Right = ({card,i}) => {
  return (
    <div className='card relative h-full'> 
      <div className="banner h-full">
        <div className='bg-white z-10 text-black size-10 rounded-full absolute top-6 left-6 flex justify-center items-center text-2xl font-semibold'>{i+1}</div>
        <img className='cardImg w-80 h-full rounded-3xl' style={{filter: 'brightness(70%)'}} src={card.img} alt="" />
      </div>
      <div className='text-white w-56 absolute bottom-4 p-6'>
        <p className='text-base absolute bottom-24'>
          {card.paragraph}
        </p>
        <div className="btn mt-5 flex gap-3">
          <button className='bg-blue p-2 px-5 rounded-xl'>{card.btn}</button>
          <button className='bg-blue size-10 rounded-full'><FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
       </div>
    // <div className='card h-full'> 
    //   <div className="banner h-full">
    //     <img className='w-72 h-full rounded-3xl' src="./image.png" alt="" />
    //   </div>
    //   <div className='text-white w-56'>
    //     <p>Prime customers that have access to bank credit and are satisfied with the current product.</p>
    //     <button className=''>Satisfied</button>
    //   </div>
    // </div>
  )
}

export default Right
