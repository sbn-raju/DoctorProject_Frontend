import React, { useState } from 'react'
import Input from "../../components/Input Fields/Input";
import CommonButton from '../../components/Buttons/CommonButton';
import { useForm } from 'react-hook-form';
import { MdOndemandVideo } from 'react-icons/md';
import { upcomingClassDetails, ongoingClassDetails } from '../../constants';


const ClassUpdatesPage = () => {
  const { register, handleSubmit } = useForm();
  const classData = (formData) => console.log(formData);
  const [classTabType, setClassTabType] = useState('setClass');
  const [ongoingClass, setOngoingClass] = useState([]);
  const [upcomingClasses, setUpcomingClasses] = useState([]);

  return (
    <div className='min-h-screen w-full bg-gray-1 flex flex-col justify-center items-center px-8 py-4'>
      <div className='flex flex-row items-center mb-10 w-full'>
        <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Admin!!</span></h1>
        
        {/* Vertical Line */}
        <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
        
        <div className="flex justify-center items-center">
          <span className="text-lg ml-4"><MdOndemandVideo /></span>
          <p className="text-sm ml-1">Classes Update</p>
        </div>
      </div> 

      <div className='w-full flex justify-center items-center mb-6'>
        <button className={`w-1/2 py-2 shadow-md mx-2 rounded-xl text-medium ${classTabType === 'setClass' ? 'bg-green-3 text-white' : 'bg-white text-green-3'}`} onClick={() => setClassTabType('setClass')}>Set Class</button>
        <button className={`w-1/2 py-2 shadow-md mx-2 rounded-xl text-medium ${classTabType === 'classDetail' ? 'bg-green-3 text-white' : 'bg-white text-green-3'}`} onClick={() => setClassTabType('classDetail')}>Class Details</button>
      </div>

      { classTabType === 'setClass' ? (
        <>
          <div className='shadow-md w-full mb-8 bg-white px-4 py-8 rounded-2xl'>
            <form onSubmit={handleSubmit(classData)}>
              <div className='grid grid-cols-1 md:grid-cols-2 px-10 items-center gap-4'>
                <Input
                  label="Start Date"
                  type="date"
                  placeholder="Select Start Date"
                  className="border-[1px] border-green-800 w-full"
                  {...register("setStartData", { required: true })}
                />

                <Input
                  label="End Date"
                  type="time"
                  placeholder="Select End Date"
                  className="border-[1px] border-green-800 w-full"
                  {...register("setEndDate", { required: true })}
                />

                <Input
                  label="Set Time"
                  type="time"
                  placeholder="Select Time"
                  className="border-[1px] border-green-800 w-full"
                  {...register("setSlotTime", { required: true })}
                />

                <div className='flex justify-center md:justify-end self-center'>
                  <CommonButton type='submit' className='bg-green-4 text-white rounded-xl p-2 w-24'>Submit</CommonButton>
                </div>
                        
              </div>
            </form>
          </div>
          <div className='bg-white shadow-md p-4 rounded-2xl w-full'>
            <p className='my-2 font-medium text-lg'>Instructions:</p>
            <p className='my-2 text-sm'>Your privacy is important to us. We guarantee that your username and personal information will be kept confidential and will not be shared with any third parties. Feel safe knowing your data is secure.</p>
          </div>
        </>
      ) : (
        <>
          { ongoingClassDetails.length !== 0 ? (
            <div className='bg-white shadow-md rounded-2xl py-4 w-full h-[300px]'>
              <div className='border-b-[1px] border-gray-2'>
                <h1 className='mx-8 pb-2'>Ongoing class details</h1>
              </div>
              <div className='p-8 py-4'>
                <div className='flex justify-between'>
                  <p className='font-thin'>Batch: <span className='font-medium'>1</span></p>
                  <p className='font-thin'>Date: <span className='font-medium'>12 May 2024</span></p>
                  <p className='font-thin'>Time: <span className='font-medium'>7:30-8:30PM</span></p>
                </div>
                <div className='w-full'>
                  <form>
                    <textarea className='border-[1px] border-green-700 p-4 rounded-xl w-full h-24 mt-8' placeholder='Paste the joining link of the class prior the to the class start' />
                    <div className='w-full flex justify-between mt-2'>
                      <button className='text-red-500 border-[1px] border-white hover:border-red-500 rounded-xl py-2 px-4'>Terminate Class</button>
                      <button className='bg-green-3 text-white px-4 py-2 font-medium rounded-xl'>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className='bg-white shadow-md rounded-2xl py-4 w-full h-[300px] mt-6'>
              <div className='border-b-[1px] border-gray-2'>
                <h1 className='mx-8 pb-2'>Ongoing class details</h1>
              </div>
              <div className='p-8 py-4 flex justify-center items-center h-full'>
                <p className='text-[#666666] text-lg'>No Classes to show</p>
              </div>
            </div>
          )}

          { upcomingClassDetails.length !== 0 ? (
            <div className='bg-white shadow-md rounded-2xl py-4 w-full mt-6 h-[200px]'>
              <div className='border-b-[1px] border-gray-2'>
                <h1 className='mx-8 pb-2'>Upcoming class details</h1>
              </div>
              <div className='p-8 py-4'>
                <div className='flex justify-between'>
                  <p className='font-thin'>Batch: <span className='font-medium'>1</span></p>
                  <p className='font-thin'>Date: <span className='font-medium'>12 May 2024</span></p>
                  <p className='font-thin'>Time: <span className='font-medium'>7:30-8:30PM</span></p>
                </div>
                <div className='w-full mt-8'>
                  <div className='w-full flex justify-between mt-2'>
                    <p>Kindly stop taking booking on the day of the class, make sure you are prior of atleast 5 hours before class timings</p>
                    <button className='bg-green-3 text-white px-4 py-2 font-medium rounded-xl'>Stop Bookings</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='bg-white shadow-md rounded-2xl py-4 w-full h-[200px] mt-6'>
              <div className='border-b-[1px] border-gray-2'>
                <h1 className='mx-8 pb-2'>Upcoming class details</h1>
              </div>
              <div className='p-8 py-4 flex justify-center items-center h-full'>
                <p className='text-[#666666] text-lg'>No Classes to show</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ClassUpdatesPage