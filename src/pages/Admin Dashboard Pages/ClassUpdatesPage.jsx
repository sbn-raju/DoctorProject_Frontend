import React from 'react'
import Input from "../../components/Input Fields/Input";
import CommonButton from '../../components/Buttons/CommonButton';
import { useForm } from 'react-hook-form';
import { MdOndemandVideo } from 'react-icons/md';

const ClassUpdatesPage = () => {
  const { register, handleSubmit } = useForm();
  const classData = (formData) => console.log(formData);

  return (
    <div className='h-auto w-full bg-gray-1 flex flex-col justify-center items-center p-8'>
      <div className='w-full'>
        <div className='flex flex-row items-center mb-10'>
          <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Admin!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex justify-center items-center">
            <span className="text-lg ml-4"><MdOndemandVideo /></span>
            <p className="text-sm ml-1">Classes Update</p>
          </div>
        </div>        
      </div>

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
          {/* <div className='flex justify-center md:justify-end self-center px-10 mt-5'>
            <CommonButton type='submit' className='bg-green-300 font-medium rounded-xl h-12 w-24'>Submit</CommonButton>
          </div> */}
        </form>
      </div>

      <div className='bg-white shadow-md rounded-2xl py-4 w-full'>
        <div className='border-b-[1px] border-gray-2'>
          <h1 className='mx-8 pb-2'>Ongoing class details</h1>
        </div>
        <div className='p-8 py-4'>
          <div className='flex justify-between'>
            <p className='font-thin'>Batch: <span className='font-medium'>1</span></p>
            <p className='font-thin'>Date: <span className='font-medium'>12 May 2024</span></p>
            <p className='font-thin'>Time: <span className='font-medium'>7:30-8:30PM</span></p>
          </div>
          <div className=''>
            <form>
              <textarea className='border-[1px] border-green-700 p-4 rounded-xl w-full h-24 mt-8' placeholder='Paste the joining link of the class prior the to the class start.' />
              <div className='w-full flex justify-end mt-2'>
                <button className='bg-green-3 text-white px-4 py-2 font-medium rounded-xl'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassUpdatesPage