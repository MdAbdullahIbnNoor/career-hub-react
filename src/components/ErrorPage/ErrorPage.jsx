import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='p-80'>
        <h2 className='text-center text-7xl font-extrabold text-red-600 mb-8'>Oppss!!</h2>
        <h5 className='text-center text-2xl font-bold text-gray-600 mb-5'>Error 404: Page not found</h5>
        <Link to="/" className='btn btn-error w-30 font-bold text-white w-32 mx-auto flex '>Go Home</Link>
    </div>
  )
}

export default ErrorPage