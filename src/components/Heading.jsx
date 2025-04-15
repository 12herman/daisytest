import React from 'react'

export default function Heading({headone="head",headtwo="head2",slogan="slogan"}) {
  return (
    <div>
        <h2 className='text-xl md:text-3xl text-center'>{headone} <span className='font-bold text-primary'>{headtwo}</span></h2>
        <p className='text-xl md:text-3xl text-center font-normal text-primary'>{slogan}</p>
    </div>
  )
}
