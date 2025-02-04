import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage: React.FC =() =>{
    return(
        <div className='w-full h-screen flex justify-center items-center flex-col gap-4 sticky top-0'>
            <h1 className='flex justify-center items-center text-center text-2xl'>I want to keep my personal matters to myself</h1>
            <Link to='/work/manisgrafika' className='py-2 px-4 border'>look at my work</Link>
        </div>
    )
}

export default ErrorPage;