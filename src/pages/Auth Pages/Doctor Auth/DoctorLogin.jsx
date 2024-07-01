import React from "react";
import Input from "../../../components/Input Fields/Input";
import { useForm } from "react-hook-form";
import CommonButton from "../../../components/Buttons/CommonButton";

const DoctorLogin = () => {
  const { register, handleSubmit } = useForm();
  const loginData = (formData) => console.log(formData); 
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F2F2]">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-[400px] h-auto ">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-4">Doctor Login</h2>
        <form onSubmit={handleSubmit(loginData)} className="space-y-8">
          <Input
            label="Username *"
            type="text"
            placeholder="Enter your username"
            {...register("username", {
              required: true,
            })}
            className="border-[1px] border-gray-300 w-full h-12 rounded-[5px] px-4"
          />
          <Input
            label="Password *"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            className="border-[1px] border-gray-300 w-full h-12 rounded-[5px] px-4"
          />
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500 hover:underline"></a>
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
          <CommonButton className="w-full bg-green-4 text-white font-bold py-3 px-4 rounded-2xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition duration-300 ease-in-out">
            Login
          </CommonButton>
        </form>
      </div>
    </div>
  );
};

export default DoctorLogin;
