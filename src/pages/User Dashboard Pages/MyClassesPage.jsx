import React, {useState} from 'react';
import { userProfile, classDetails } from '../../constants';
import { BsCalendar2Event } from "react-icons/bs";
import { FaClock, FaPhone } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import CommonButton from '../../components/Buttons/CommonButton';

const MyClassesPage = () => {
  // const [detailsVisible, setDetailsVisible] = useState(Array(classDetails.length).fill(false));

  // const toggleDetailsVisibility = (index) => {
  //   setDetailsVisible(visibility => visibility.map((item, i) => i === index ? !item : item));
  // };

  return (
    <div className="h-screen w-full p-4 md:p-6 flex flex-col items-center bg-gray-1">
      <div className="w-full my-8 flex flex-col md:flex-row items-center bg-white border-[1px] border-gray-2 rounded-2xl md:px-10 py-3">
        <div className="flex flex-row items-center">
          <h1 className='text-sm md:text-xl'>Hello <span className="font-semibold">{userProfile.Name}!!</span></h1>
          <span className="ml-4 border-[1px] border-l-gray-500 h-6"></span> {/* Vertical Line */}
          <div className="flex justify-center items-center ml-4">
            <span className="text-md ml-4"><BsCalendar2Event /></span>
            <p className="text-[10px] md:text-sm ml-1">My Classes</p>
          </div>
        </div>
      </div>

      { classDetails.length !== 0 ? (
        <>
          <div className="w-full h-3/6 overflow-auto scrollbar">
            {classDetails.map((classItem, index) => (
              <div key={index} className={`mb-5 p-4 px-10 rounded-2xl border-[1px] border-gray-2 bg-white shadow-md`}>
                <div className='w-full flex flex-row'>
                  <div className='w-11/12 md:w-9/12 flex flex-col gap-4 md:gap-2'>
                    <div className='grid grid-cols-2'>
                      <p className='text-xs md:text-base flex items-center md:font-medium'>
                        <span className='mr-2 text-xl'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#507E4D" className=" bi bi-calendar" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                          </svg>
                        </span>
                        {classItem.Date}
                      </p>
                      <p className='text-xs md:text-base flex items-center md:font-medium'>
                        <span className='mr-2 text-xl'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#507E4D" className="bi bi-clock-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                          </svg>
                        </span>
                        {classItem.Time}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 mt-2">
                      <p className='mr-3 text-xs md:text-sm flex justify-start items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#507E4D" className="bi bi-graph-up" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
                        </svg>
                        <span className='font-medium ml-2'>: {classItem.Batch}</span>
                      </p>
                      <p className='mr-3 text-xs md:text-sm flex justify-start items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#507E4D" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                        <span className='text-xs md:text-base md:font-medium ml-2'>{classItem.Status}</span>
                      </p>
                    </div>
                  </div>

                  <div className='w-1/12 md:w-3/12 md:px-4 flex justify-center items-center'>
                    <CommonButton className='bg-green-4 rounded-md px-2 py-1 md:px-8 text-white text-xs md:text-base'>
                      Join
                    </CommonButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full bg-white rounded-2xl border-[1px] border-gray-2 my-6 md:my-20 p-2 px-4 md:p-4 shadow-md">
            <p className='my-2 font-medium text-sm md:text-base'>Instructions:</p>
            <p className='my-2 text-[10px] md:text-sm'>Your privacy is important to us. We guarantee that your username and personal information will be kept confidential and will not be shared with any third parties. Feel safe knowing your data is secure.</p>
          </div>
        </>
      ) : (
        <div className='flex flex-col justify-center items-center h-screen'>
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="#999999" className="bi bi-file-earmark-x" viewBox="0 0 16 16">
            <path d="M6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293z"/>
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
          </svg>
          <p style={{color:"#999999"}} className='text-2xl my-4'>No data to show</p>
        </div>
      )}
    </div>
  );
}

export default MyClassesPage;
