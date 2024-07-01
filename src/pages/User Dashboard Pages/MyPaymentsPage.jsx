import React from 'react';
import { userProfile, paymentDetails } from '../../constants';
import { MdPayment } from "react-icons/md";
import '../../styles/scrollbar.styles.css';
import appointment from '../../assets/Page Assets/User Dashboard/svg/appointment.svg';

const PaymentItem = ({ payment }) => (
  <div className="py-2 pb-4 px-6 md:px-10 my-4 rounded-2xl border-[1px] border-gray-2 bg-white shadow-md">
    <div className="flex flex-wrap mt-2 gap-4 md:gap-2">
      <div className='w-3/4 grid grid-cols-2'>
        <p className="text-xs md:text-base flex items-center font-medium flex-shrink-0">
          <span className="mr-2 text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#507E4D" className="bi bi-calendar" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
          </span>
          {payment.Date}
        </p>
        <p className="w-1/2 text-xs md:text-base flex items-center font-medium flex-shrink-0">
          <span className="mr-2 text-xl">
            <img src={appointment} className='w-8' />
          </span>
          {payment.Purpose}
        </p>
      </div>
      <p className="w-full font-thin md:font-normal text-sm flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#507E4D" className="bi bi-credit-card-2-front-fill mx-1" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
        </svg>
        Transaction ID: <span className="ml-1 font-medium">{payment.TransactionId}</span>
      </p>
    </div>
  </div>
);

const NoData = () => (
  <div className="flex flex-col justify-center items-center h-screen">
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="#999999" className="bi bi-file-earmark-x" viewBox="0 0 16 16">
      <path d="M6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293z" />
      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
    </svg>
    <p className="text-2xl my-4 text-gray-500">No data to show</p>
  </div>
);

const MyPaymentsPage = () => {
  return (
    <div className="h-screen w-full p-4 md:p-6 flex flex-col items-center bg-gray-100">
      <div className="w-full my-8 flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-2xl md:px-10 py-3">
        <div className="flex items-center">
          <h1 className="text-sm md:text-xl">Hello <span className="font-medium">{userProfile.Name}!!</span></h1>
          <span className="ml-4 border-l border-gray-500 h-6"></span> {/* Vertical Line */}
          <div className="flex justify-center items-center ml-3">
            <span className="text-md ml-4"><MdPayment /></span>
            <p className="text-[10px] md:text-sm ml-1">My Payments</p>
          </div>
        </div>
      </div>

      {paymentDetails.length !== 0 ? (
        <>
          <div className="w-full h-full md:h-3/6 overflow-auto scrollbar">
            {paymentDetails.map((payment, index) => (
              <PaymentItem key={index} payment={payment} />
            ))}
          </div>
          <div className="w-full bg-white rounded-2xl border border-gray-200 my-6 md:my-20 p-2 px-4 md:p-4 shadow-md">
            <p className="my-2 font-medium text-sm md:text-base">Instructions:</p>
            <p className="my-2 text-[10px] md:text-sm">Your privacy is important to us. We guarantee that your username and personal information will be kept confidential and will not be shared with any third parties. Feel safe knowing your data is secure.</p>
          </div>
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
}

export default MyPaymentsPage;

// import React, { useState } from 'react';
// import { userProfile, paymentDetails } from '../../constants';
// import { MdPayment } from "react-icons/md";
// import { FaRectangleList } from "react-icons/fa6";
// import { IoIosArrowDown } from "react-icons/io";
// import '../../styles/scrollbar.styles.css';
// import appointment from '../../assets/Page Assets/User Dashboard/svg/appointment.svg'

// const MyPaymentsPage = () => {
//   return (
//     <div className="h-screen w-full p-4 md:p-6 flex flex-col items-center bg-gray-1">
//       <div className="w-full my-8 flex flex-col md:flex-row items-center bg-white border-[1px] border-gray-2 rounded-2xl md:px-10 py-3">
//         <div className="flex flex-row items-center">
//           <h1 className='text-sm md:text-xl'>Hello <span className="font-medium">{userProfile.Name}!!</span></h1>
//           <span className="ml-4 border-[1px] border-l-gray-500 h-6"></span> {/* Vertical Line */}
//           <div className="flex justify-center items-center ml-3">
//             <span className="text-md ml-4"><MdPayment /></span>
//             <p className="text-[10px] md:text-sm ml-1">My Payments</p>
//           </div>
//         </div>
//       </div>
      
//       { paymentDetails.length !== 0 ? (
//         <>
//           <div className="w-full h-full md:h-3/6 overflow-auto scrollbar">
//             {paymentDetails.map((payment, index) => (
//               <div key={index} className={`py-2 pb-4 px-6 md:px-10 my-4 rounded-2xl border-[1px] border-gray-2 bg-white shadow-md`}>                
//                 <div className='flex items-center'>
//                   <div className="flex flex-wrap mt-2 gap-4">
//                     <p className='text-xs md:text-base flex items-center font-medium'>
//                       <span className='mr-2 text-xl'>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#507E4D" className=" bi bi-calendar" viewBox="0 0 16 16">
//                           <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
//                         </svg>
//                       </span>
//                       {payment.Date}
//                     </p>
//                     <p className='text-xs md:text-base flex items-center font-medium'>
//                       <span className='mr-2 text-xl'>
//                         <img src={appointment} />
//                       </span>
//                       {payment.Purpose}
//                     </p>
//                     <p className='font-thin md:hidden text-sm flex items-center'>
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#507E4D" className="bi bi-credit-card-2-front-fill mx-1" viewBox="0 0 16 16">
//                         <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
//                       </svg>
//                       Transaction ID: <span className="ml-1 font-medium">{payment.TransactionId}</span>
//                     </p>
//                   </div>
//                   <div className='font-thin hidden md:block '>
//                     <p className='text-sm flex items-center'>
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#507E4D" className="bi bi-credit-card-2-front-fill mx-1" viewBox="0 0 16 16">
//                         <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
//                       </svg>
//                       Transaction ID: <span className="ml-1 font-medium">{payment.TransactionId}</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="w-full bg-white rounded-2xl border-[1px] border-gray-2 my-6 md:my-20 p-2 px-4 md:p-4 shadow-md">
//             <p className='my-2 font-medium text-sm md:text-base'>Instructions:</p>
//             <p className='my-2 text-[10px] md:text-sm'>Your privacy is important to us. We guarantee that your username and personal information will be kept confidential and will not be shared with any third parties. Feel safe knowing your data is secure.</p>
//           </div>
//         </>
//       ) : (
//         <div className='flex flex-col justify-center items-center h-screen'>
//           <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="#999999" class="bi bi-file-earmark-x" viewBox="0 0 16 16">
//             <path d="M6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293z"/>
//             <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
//           </svg>
//           <p style={{color:"#999999"}} className='text-2xl my-4'>No data to show</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyPaymentsPage;
