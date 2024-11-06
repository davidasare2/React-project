import React from 'react'

const Newsletter = () => {
return (

<div className='w-fall py-16 text-white'>Newsletter
<div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
    <div className='lg:col-span-2 my-4'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
    <p>Sign up to our newsletter and stay up to date.</p>
    </div>
    <div className='my-4'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md text-black'type='email' placeholder='Enter Email'/>
            <buttom className='bg-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Modify me</buttom>
                    
    </div>
    </div>
    <p>We care about your protection of your data. Read our <spam className='text-[#000df9a]'>Privacy Policy</spam></p>
    
</div>

</div>

)


};
export default Newsletter;