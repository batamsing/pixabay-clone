import React from 'react'
import './loading.css'

function Loading() {
  return (
    <div className='loading-container'>
        <div className='loading-dots'>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
        </div>
    </div>
  )
}

export default Loading