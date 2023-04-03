import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-slate-700 flex justify-center items-center p-4'
    >
       <form method='post' action="https://getform.io/f/2787b0df-46e9-4bd9-a556-26ed39a43c0c" className='flex flex-col max-w-[600px] w-full'>
<div className='pb-8'>
    <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-slate-100'>Contact</p>
    <p className='text-slate-100 py-4'>Submit the form below</p>
</div>
<input className='p-2 bg-slate-300' type="text" placeholder='Name' name='name'></input>
<input className='my-4 p-2 bg-slate-300' type="email" placeholder='Email' name='email'></input>
<textarea className='my-4 p-2 bg-slate-300' rows="10" placeholder='Message' name='message'></textarea>
<button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-4 mx-auto flex items-center'>Let's connect!</button>
       </form>
    </div>
  )
}

export default Contact