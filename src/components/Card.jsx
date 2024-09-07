/* eslint-disable no-unused-vars */
import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className='flex flex-col mt-5 gap-2 shadow-lg rounded-lg'>
        <img src={`/image/${props.image}`} alt={props.name} className='border-t-0 rounded-lg'/>
        <div className='px-2 py-2'>
        <h1 className='font-bold text-xl'>{props.name}</h1>
        <p className='text-slate-300 text-lg'>ระยะเวลา (วัน): {props.time}</p>
        <h1 className='font-bold text-xl'>ราคา {props.price} บาท</h1>
        </div>
    </div>
    </>
  )
}

export default Card