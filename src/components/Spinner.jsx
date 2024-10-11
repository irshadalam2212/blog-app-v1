import React from 'react'

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 h-[80vh]'>
      <div class="spinner"></div>
      <p className='text-3xl font-semibold'>Loading...</p>
    </div>
  )
}

export default Spinner
