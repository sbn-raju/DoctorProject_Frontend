import React from "react";
import Input from "../../../components/Input Fields/Input";
import { useForm } from "react-hook-form";
import CommonButton from "../../../components/Buttons/CommonButton";

const UserLogin = () => {
  const { register, handleSubmit } = useForm();
  const loginData = (formData) => console.log(formData);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F2F2]">
      <div className="bg-white shadow-2xl rounded-2xl p-12 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-600">Login</h2>
        <form onSubmit={handleSubmit(loginData)} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="phoneNumber">
              Phone number
            </label>
            <Input
              type="number"
              placeholder="Enter your Mobile Number"
              className="border-[1px] border-gray-300 w-full h-12 rounded-lg px-3"
              {...register("phoneNumber", { required: true })}
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
              Password*
            </label>
            <Input
              type="password"
              placeholder="Enter your Password"
              className="border-[1px] border-gray-300 w-full h-12 rounded-lg px-3"
              {...register("password", { required: true, minLength: 6 })}
            />
          </div>
          
          <div className="flex justify-between">
            <a href="#" className="text-blue-500 hover:underline">Register as a new user?</a>
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
          
          <CommonButton className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition duration-300 ease-in-out">
            Login
          </CommonButton>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
