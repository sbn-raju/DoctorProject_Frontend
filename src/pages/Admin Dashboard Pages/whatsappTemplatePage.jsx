import React from 'react';
import { whatsappTemplates } from '../../constants';

const WhatsappTemplatePage = () => {
    return (
        <div className='h-auto bg-gray-1 w-full p-10'>
            <form>
                <div className='h-[600px] overflow-y-scroll grid grid-cols-3 gap-4 admin-scrollbar'>
                    {whatsappTemplates.map((msg, index) => (
                        <div className='bg-white p-4 rounded-lg shadow-md m-10 cursor-pointer hover:border-[1px] border-green-2'>
                            <h1 className='text-green-4 my-2'>{msg.Title}</h1>
                            <p className='text-sm'>{msg.Description}</p>
                        </div>
                    ))}
                    <div className='bg-white p-4 rounded-lg shadow-md m-10 cursor-pointer col-span-2'>
                        <h1 className='text-green-4 my-2'>Custom Text</h1>
                        <textarea className='border-[1px] border-green-700 p-4 rounded-xl w-full h-24' placeholder='Enter your message here' />
                    </div>
                </div>
                <div className='w-full flex justify-end my-4'>
                    <button className='bg-green-3 text-white px-4 py-2 font-medium rounded-xl'>Send</button>
                </div>
            </form>
        </div>
    ) 
}

export default WhatsappTemplatePage