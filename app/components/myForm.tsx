"use client"
import React from 'react'
import FormInputs from './formInputs'

const MyForm = () => {
    const toggleShowHide=()=>{
        document.getElementById('myForm')?.classList.toggle("show")
        document.getElementById('myButton')?.classList.toggle('hide')
      }

  return (
    <>
      <button id='myButton' className="bg-red-600 rounded-lg p-3 mx-0 my-auto" onClick={toggleShowHide}>click here</button>
      <div id="myForm" className="w-[100vw] h-[100vh] hidden px-4 font-[iranyekan]">
        {/* beginning of stop button and tozihat */}
            <div className='flex justify-between w-full h-auto pt-4  px-4 pb-5 border-b-2 border-purple-900 '>
            <div className='text-right'>
                    <h1 className='text-black text-lg font-bold mb-2'>فرم درخواست</h1>
                    <p className='text-gray-800 text-sm'>ارسال رزومه برای شغل : تست 2</p>
                </div>
                <button onClick={toggleShowHide} className='text-red-500 bg-white border-red-500 rounded-md border-2 px-4 h-10 text-sm'>لغو درخواست</button>
            </div>
            {/* end of stop button and tozihat */}
            <div className='w-full'>
                <FormInputs/>
            </div>
      </div>
    </>
  )
}

export default MyForm
