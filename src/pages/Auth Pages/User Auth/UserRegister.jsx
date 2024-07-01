import React, { useState } from 'react';
import Input from "../../../components/Input Fields/Input";
import { useForm } from "react-hook-form";

const ProgressIndicator = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div className={`h-4 w-4 rounded-full ${currentStep >= index ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-gray-700">{step}</span>
        </div>
      ))}
    </div>
  );
};

const UserRegister = () => {
  const { register, handleSubmit } = useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isAccountDetailsVisible, setIsAccountDetailsVisible] = useState(false);
  const steps = ["Personal Details", "Details Verification", "Account Details"];

  const loginData = (formData) => {
    console.log(formData);
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);  
    setIsSignUpVisible(true);  
  };

  const verifyOtp = (formData) => {
    console.log(formData);
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);  
    setIsSignUpVisible(false);
    setIsAccountDetailsVisible(true);  
  };

  const registerAccount = (formData) => {
    console.log(formData);
    
  };

  return (
    <div>
    <div className="flex space-x-10 p-6 max-w-4xl mx-auto bg-[#F2F2F2] rounded-lg shadow-md mt-4 mb-4">
        {!isSignUpVisible && !isAccountDetailsVisible && (
          <form onSubmit={handleSubmit(loginData)} className="w-3/4 space-y-6">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                Name *
              </label>
              <Input
                type="text"
                placeholder="Enter Your name here"
                className="border-[1px] border-green-800 w-full h-10 rounded-[5px] px-3"
                {...register("setName", { required: true })}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="number">
                Phone number *
              </label>
              <Input
                type="text"
                placeholder="Enter Your mobile number"
                className="border-[1px] border-green-800 w-full h-10 rounded-[5px] px-3"
                {...register("setNumber", { required: true })}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Email *
              </label>
              <Input
                type="email"
                placeholder="Enter Your email here"
                className="border-[1px] border-green-800 w-full h-10 rounded-[5px] px-3"
                {...register("setEmail", { required: true })}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="dob">
                Date of Birth *
              </label>
              <Input
                type="date"
                placeholder="Enter Your DOB here"
                className="border-[1px] border-green-800 w-full h-10 rounded-[5px] px-3"
                {...register("setDob", { required: true })}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="gender">
                Gender *
              </label>
              <Input
                type="text"
                placeholder="Choose your gender"
                className="border-[1px] border-green-800 w-full h-10 rounded-[5px] px-3"
                {...register("setGender", { required: true })}
              />
            </div>

            <button className="bg-green-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition duration-300 ease-in-out">
              Register
            </button>
          </form>
        )}

        {isSignUpVisible && !isAccountDetailsVisible && (
          <form onSubmit={handleSubmit(verifyOtp)} className="w-3/4 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-grow">
                  <label className="block text-gray-700 font-medium mb-1" htmlFor="number">
                    Phone number *
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter Your mobile number"
                    className="border-[1px] border-green-800 w-full h-10 rounded-[5px] px-3"
                    {...register("otpNumber", { required: true })}
                  />
                </div>
                <button className="bg-red-500 text-white font-bold mt-6 py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50 transition duration-300 ease-in-out">
                  Get OTP
                </button>
              </div>
              
              <div className="flex space-x-2">
                {[...Array(4)].map((_, index) => (
                  <Input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="border-[1px] border-green-800 w-10 h-10 rounded-[5px] text-center"
                    {...register(`otp${index + 1}`, { required: true })}
                  />
                ))}
              </div>

              <div className="space-y-2 mt-4">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                  Email *
                </label>
                <Input
                  type="email"
                  placeholder="Enter Your email here"
                  className="border-[1px] border-green-800 w-full h-10 rounded-[5px] px-3"
                  {...register("otpEmail", { required: true })}
                />
              </div>

              <button className="bg-green-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition duration-300 ease-in-out mt-4">
                Verify
              </button>
            </div>
          </form>
        )}

        {isAccountDetailsVisible && (
          <form onSubmit={handleSubmit(registerAccount)} className="w-3/4 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Account Details</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="username">
                  Username *
                </label>
                <Input
                  type="text"
                  placeholder="Enter Your username"
                  className="border-[1px] border-green-800 w-full h-10 rounded-[5px] px-3"
                  {...register("setUsername", { required: true })}
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                  Password *
                </label>
                <Input
                  type="password"
                  placeholder="Enter Your password"
                  className="border-[1px] border-green-800 w-full h-10 rounded-[5px] px-3"
                  {...register("setPassword", { required: true })}
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="confirmPassword">
                  Confirm Password *
                </label>
                <Input
                  type="password"
                  placeholder="Confirm Your password"
                  className="border-[1px] border-green-800 w-full h-10 rounded-[5px] px-3"
                  {...register("setConfirmPassword", { required: true })}
                />
              </div>
              
              <button className="bg-green-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition duration-300 ease-in-out mt-4">
                Register
              </button>
            </div>
          </form>
        )}

        <ProgressIndicator steps={steps} currentStep={currentStep} />
      </div>
    </div>
  )
}

export default UserRegister