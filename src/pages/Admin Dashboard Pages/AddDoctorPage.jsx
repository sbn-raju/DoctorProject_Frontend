import React from 'react'
import { GiCaduceus } from "react-icons/gi"
import Input from "../../components/Input Fields/Input";
import CommonButton from '../../components/Buttons/CommonButton';
import { useForm } from 'react-hook-form';

const AddDoctorPage = () => {
  const { register, handleSubmit } = useForm();
  const docterData = (formData) => console.log(formData);

  return (
    <div className='h-auto w-full bg-gray-1 flex flex-col justify-center items-center p-8'>
      <div className='w-full'>
        <div className='flex flex-row items-center'>
          <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Admin!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex justify-center items-center">
            <span className="text-2xl text-red-400 ml-4"><GiCaduceus /></span>
            <p className="text-sm ml-1">Add Docter</p>
          </div>
        </div>        
      </div>

      <div className='w-full shadow-md mt-6 bg-white px-4 py-6 rounded-2xl'>
        <form onSubmit={handleSubmit(docterData)}>
          <div className='grid grid-cols-1 px-10 items-center gap-4'>
            <Input
              label="Docter Name"
              type="text"
              placeholder="Enter Docter Name"
              className="border-[1px] border-green-800 w-full"
              {...register("setName", { required: true })}
            />

            <Input
              label="Username"
              type="text"
              placeholder="Enter Username"
              className="border-[1px] border-green-800 w-full"
              {...register("setUsername", { required: true })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter Password"
              className="border-[1px] border-green-800 w-full"
              {...register("setPassword", { required: true })}
            />

            <div className='w-full flex justify-end mt-2'>
              <button className='bg-green-3 text-white px-4 py-2 font-medium rounded-xl'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddDoctorPage