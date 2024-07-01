import React, { useState } from 'react';
import { userProfile } from '../../constants/index';
import { BsFillPersonVcardFill } from "react-icons/bs";
import CommonButton from '../../components/Buttons/CommonButton';
import { useNavigate } from 'react-router-dom';
import membershipBg from '../../assets/Page Assets/Home/memebership-bg.png';
import logo from '../../assets/Page Assets/Home/New Logo.png';

const MembershipCard = ({handleCloseCard}) => {
  return (
    <div className='min-h-screen fixed inset-0 bg-gray-1 bg-opacity-75 flex justify-center items-center z-[60]'>
      <div 
        className='relative min-w-[300px] p-4 rounded-xl shadow-lg flex flex-col justify-center items-center'
        style={{backgroundImage: `url(${membershipBg})`, backgroundSize: "cover"}}
      >
        <div className='w-full flex items-center'>
          <img src={logo} className='w-6'/>
          <p className='text-white ml-10 font-semibold'>Membership Card</p>
        </div>
        <div className='my-4'>
          <p className='text-slate-300'>Name: <span className='text-white font-medium'>{userProfile.Name}</span></p>
          <p className='text-slate-300'>Age: <span className='text-white font-medium'>{userProfile.Age}</span></p>
          <p className='text-slate-300'>ID no: <span className='text-white font-medium'>2210030440</span></p>
        </div>
        <p className='text-center text-slate-50 font-thin'>Dr.Ramachandra</p>
        <button className='absolute -top-4 -right-4' onClick={handleCloseCard}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

const MyProfilePage = () => {
  const [isMembershipCardOpen, setIsMemebershipCardOpen] = useState(false);

  const handleMembershipCard = () => {
    setIsMemebershipCardOpen(true);
  }

  const handleCloseCard = () => {
    setIsMemebershipCardOpen(false);
  }

  return (
    <div className="h-screen w-full p-6 flex justify-center items-center bg-gray-1">
      <div className="w-full">
        <div className="flex flex-row items-center mb-10 bg-white rounded-2xl px-6 py-3 border-[1px] border-gray-2">
          <h1 className="text-sm md:text-xl">Hello <span className="font-medium">User!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-6"></span>
          
          <div className="flex justify-center items-center ml-3">
            <span className="text-sm ml-0 md:ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
            </span>
            <p className="text-xs md:text-sm ml-1">Profile</p>
          </div>
        </div>

        <div className='mb-8 lg:mb-16 rounded-2xl bg-white shadow-md pb-4'>
          <div className="w-full border-b-[1px] border-red-1 p-4 px-6 md:px-8">
            <div className='flex items-center'>
              <span className="text-green-4 text-xl md:text-2xl"><BsFillPersonVcardFill /></span>
              <span className='ml-2 text-base md:text-lg'>Personal Information</span>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-red-1 p-4 px-6 md:px-8">
            <div className="flex">
              <span className="w-2/5 md:w-3/6 text-xs md:text-base">Name</span>
              {/* <span className="w-3/5 md:w-3/6">{userProfile.Name}</span> */}
              <input type="text" placeholder='Enter your Name' className='text-xs md:text-base px-4 py-1 rounded-md'/>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-red-1 p-4 px-6 md:px-8">
            <div className="flex">
              <span className="w-2/5 md:w-3/6 text-xs md:text-base">Email</span>
              {/* <span className="w-3/5 md:w-3/6">{userProfile.Email}</span> */}
              <input type="text" placeholder='Enter your Email' className='text-xs md:text-base px-4 py-1 rounded-md'/>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-red-1 p-4 px-6 md:px-8">
            <div className="flex">
              <span className="w-2/5 md:w-3/6 text-xs md:text-base">Gender</span>
              {/* <span className="w-3/5 md:w-3/6">{userProfile.Gender}</span> */}
              <input type="text" placeholder='Enter your Gender' className='text-xs md:text-base px-4 py-1 rounded-md'/>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-red-1 p-4 px-6 md:px-8">
            <div className="flex">
              <span className="w-2/5 md:w-3/6 text-xs md:text-base">Membership</span>
              <CommonButton className='bg-white border-[1px] border-green-4 px-2 py-1 md:py-0 rounded-md text-green-4 text-xs md:text-base ml-4' onClick={handleMembershipCard}>View Membership</CommonButton>
            </div>
          </div>
          <div className='flex justify-end pt-4'>
            <div className='flex mx-4 md:mx-10'>
              <CommonButton className='text-xs md:text-base bg-white border-[1px] border-green-4 px-2 py-1 md:py-0 rounded-md text-green-4 flex justify-center items-center mx-2'>
                Edit
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-3 h-3 md:w-4 md:h-4 ml-2 bi bi-pencil-fill" viewBox="0 0 16 16">
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
                </svg>
              </CommonButton>
              <CommonButton className='text-xs md:text-base bg-green-4 px-2 rounded-md text-white mx-2 flex justify-center items-center'>
                Save
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-3 h-3 md:w-4 md:h-4 ml-2 bi bi-bookmark-fill" viewBox="0 0 16 16">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
                </svg>
              </CommonButton>
            </div>
          </div>
        </div>

        <div className="shadow-md bg-white rounded-2xl border-[1px] border-custom-red p-4 px-6 lg:px-8">
          <p className="font-medium mb-2 text-sm md:text-base">Note:</p>
          <p className='text-xs md:text-sm'>
            Your privacy is important to us. We guarantee that your username and personal information will be kept 
            confidential and will not be shared with any third parties. Feel safe knowing your data is secure.
          </p>
        </div>
      </div>
      {isMembershipCardOpen && <MembershipCard handleCloseCard={handleCloseCard} />}
    </div>
  )
}

export default MyProfilePage;