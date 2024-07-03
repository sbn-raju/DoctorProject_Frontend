import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { navItems } from "../../constants";
import { Link } from "react-router-dom";
import logo from '../../assets/Page Assets/Home/New Logo.png';
import profileLogo from '../../assets/Page Assets/Home/profile.png';
import Input from "../Input Fields/Input";
import CommonButton from "../Buttons/CommonButton";
import PhoneInput from "../Input Fields/InternationalNumbers";

const OTPCard = ({ phoneNumber, closeOTPCard }) => {

  const length = 6;
  const [otp, setotp] = useState(new Array(length).fill(""))
  const [combinedOTP, setCombinedOTP] = useState("")
  const inputRef = useRef([]);

  useEffect(()=>{
    if(inputRef.current[0]){
      inputRef.current[0].focus()
    }
  }, [])
  const handleChange =(index, e)=>{
    const value = e.target.value
    if(isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length-1)
    setotp(newOtp)

    setCombinedOTP(newOtp.join(""));
    if(value && index < length-1 && inputRef.current[index+1]){
      inputRef.current[index+1].focus()
    }
  }

  const handleClick =()=>{

  }

  const handleKeyDown =(index, e)=>{
    if(e.key==="Backspace" && !otp[index] && index>0 && inputRef.current[index-1]){
      inputRef.current[index-1].focus()
    }
  }

  const handleOTPSubmit =()=>{
    console.log(combinedOTP)
  }

  return (
    <div className="h-screen inset-0 fixed bg-opacity-75 w-full flex flex-col justify-center items-center">
      <div className="bg-white p-10 w-[300px] md:w-[400px] shadow-lg min-h-[200px] flex flex-col text-black">
        <div className="flex justify-between mb-6">
          <h1 className="font-medium text-black">OTP Verification</h1>
          <CommonButton onClick={closeOTPCard}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </CommonButton>
        </div>
        <p>Enter 6-Digit OTP sent to your {phoneNumber}</p>
        <div className="flex justify-evenly space-x-2 mt-2">
          {otp.map((value, index) => (
            // <Input
            //   key={index}
            //   type="text"
            //   value
            //   maxLength="1"
            //   className="border-[1px] border-green-800 w-8 h-8 md:w-10 md:h-10 rounded-[5px] text-center"
            // />
            <input 
              key={index}
              type="text"
              ref={(input)=> (inputRef.current[index] = input)}
              value={value}
              onChange={(e)=> handleChange(index, e)}
              onClick={()=> handleClick()}
              onKeyDown={(e)=> handleKeyDown(index, e)}
              className="border-[1px] border-green-800 w-8 h-8 md:w-10 md:h-10 rounded-[5px] text-center"
            />
          ))}
        </div>
        <CommonButton className="mt-4 bg-green-4 text-white px-4 py-2 rounded-xl" onClick={handleOTPSubmit}>
        Verify
        </CommonButton> 
      </div>
    </div>
  );
};

const AccountBox = ({ closeAccount }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOTPCardOpen, setIsOTPCardOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSendOTP = () => {
    if (phoneNumber.length === 10) {
      setIsOTPCardOpen(true);
      setErrorMsg("");
    } else if (phoneNumber.length > 0 && phoneNumber.length !== 10){
      setErrorMsg("Please enter valid mobile number");
    } else{
      setErrorMsg("Phone number is mandatory")
    }
  };

  const closeOTPCard = () => {
    setIsOTPCardOpen(false);
    closeAccount();
  };

  return (
    <>
      <div className="h-screen bg-black inset-0 fixed bg-opacity-75 w-full flex flex-col justify-center items-center">
        <div className="bg-white p-10 w-[300px] md:w-[400px] shadow-lg min-h-[200px] flex flex-col">
          <div className="flex justify-between mb-6">
            <h1 className="font-medium text-black">Sign In</h1>
            <CommonButton onClick={closeAccount}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            </CommonButton>
          </div>
          <PhoneInput id={"phoneInput"} setPhoneNumber={setPhoneNumber}/>
          {/* <input
            type="text"
            id="phoneInput"
            className="border-[1px] border-green-4 px-4 py-2 my-3 rounded-lg text-black"
            onInput={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            onKeyPress={(e) => {
              if (e.charCode < 48 || e.charCode > 57) {
                e.preventDefault();
              }
            }}
          /> */}
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          <CommonButton className="mt-4 bg-green-4 text-white px-4 py-2 rounded-xl" onClick={handleSendOTP}>
            Send OTP
          </CommonButton>
        </div>
      </div>
      {isOTPCardOpen && <OTPCard phoneNumber={phoneNumber} closeOTPCard={closeOTPCard} />}
    </>
  );
};

const HeaderHome = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAccountBoxOpen, setIsAccountBoxOpen] = useState(false);

  const handleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAccountBox = () => {
    setIsAccountBoxOpen(true);
  };

  const closeAccount = () => {
    setIsAccountBoxOpen(false);
  };

  return (
    <>
      <div className={`px-4 md:px-6 py-3 w-full flex flex-row justify-between items-center sticky top-0 bg-white text-green-1 ${isScrolled ? 'shadow-lg' : 'shadow-none'} z-50`}>
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="LogoImage" className="w-12 h-12 md:w-16 md:h-16 mx-2 md:mx-4" />
          </Link>
          <div className="pl-1 ml-4 md:mr-4">
            <h2 className="font-leagueSpartanRegular text-xl md:text-sm lg:text-lg leading-tight text-green-1">
              Dr.Padma &amp; Dr.Ramachandra
            </h2>
            <p className="font-leagueSpartanRegular text-xl md:text-base lg:text-lg text-green-1">
              Naturopathy
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-grow justify-center items-center space-x-4 md:space-x-6 lg:space-x-10">
          <ul className="flex flex-row text-sm md:text-base lg:text-lg font-leagueSpartanSemiBold space-x-4 md:space-x-6 lg:space-x-10 text-green-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center ml-2 md:ml-4 lg:ml-6">
          <button onClick={handleAccountBox}>
            <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="24.1682" cy="21.8746" rx="23.6399" ry="21.2403" fill="#497246"/>
              <path d="M24.1683 10.4316C25.5665 10.4316 26.9075 10.9397 27.8962 11.8441C28.8849 12.7484 29.4404 13.975 29.4404 15.2539C29.4404 16.5329 28.8849 17.7595 27.8962 18.6638C26.9075 19.5682 25.5665 20.0762 24.1683 20.0762C22.77 20.0762 21.429 19.5682 20.4403 18.6638C19.4516 17.7595 18.8961 16.5329 18.8961 15.2539C18.8961 13.975 19.4516 12.7484 20.4403 11.8441C21.429 10.9397 22.77 10.4316 24.1683 10.4316ZM24.1683 22.4874C29.9939 22.4874 34.7125 24.6453 34.7125 27.3097V29.7208H13.624V27.3097C13.624 24.6453 18.3426 22.4874 24.1683 22.4874Z" fill="white"/>
            </svg>
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={handleDrawer} className="text-3xl md:text-4xl">
            {drawerIsOpen ? <RxCross2 /> : <IoMenu />}
          </button>
        </div>
        {isAccountBoxOpen && <AccountBox closeAccount={closeAccount} />}
      </div>
      {drawerIsOpen && (
        <div className="fixed z-10 w-full h-full top-0 left-0 bg-green-800 transform transition-transform ease-in-out duration-300 md:hidden">
          <div className="flex justify-end p-4">
            <button onClick={handleDrawer} className="text-3xl md:text-4xl text-white">
              <RxCross2 />
            </button>
          </div>
          <ul className="flex flex-col items-center text-lg text-white">
            {navItems.map((item, index) => (
              <li key={index} className="mb-4 border-b-2 border-yellow-500 w-full text-center">
                <a href={item.href} className="block w-full py-2">{item.label}</a>
              </li>
            ))}
            <li className="my-4">
              <button onClick={handleAccountBox}>
                <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="24.1682" cy="21.8746" rx="23.6399" ry="21.2403" fill="#497246"/>
                  <path d="M24.1683 10.4316C25.5665 10.4316 26.9075 10.9397 27.8962 11.8441C28.8849 12.7484 29.4404 13.975 29.4404 15.2539C29.4404 16.5329 28.8849 17.7595 27.8962 18.6638C26.9075 19.5682 25.5665 20.0762 24.1683 20.0762C22.77 20.0762 21.429 19.5682 20.4403 18.6638C19.4516 17.7595 18.8961 16.5329 18.8961 15.2539C18.8961 13.975 19.4516 12.7484 20.4403 11.8441C21.429 10.9397 22.77 10.4316 24.1683 10.4316ZM24.1683 22.4874C29.9939 22.4874 34.7125 24.6453 34.7125 27.3097V29.7208H13.624V27.3097C13.624 24.6453 18.3426 22.4874 24.1683 22.4874Z" fill="white"/>
                </svg>
              </button>
            </li>
          </ul>
          {isAccountBoxOpen && <AccountBox closeAccount={closeAccount} />}
        </div>
      )}
    </>
  );
};

export default HeaderHome;

// import React, { useEffect, useState } from "react";
// import { IoMenu } from "react-icons/io5";
// import { RxCross2 } from "react-icons/rx";
// import { navItems } from "../../constants";
// import LoginButton from "../Buttons/LoginButton";
// import CommonButton from "../Buttons/CommonButton";
// import logo from '../../assets/Page Assets/Home/New Logo.png';
// import Input from "../Input Fields/Input";
// import { Link } from "react-router-dom";
// import profileLogo from '../../assets/Page Assets/Home/profile.png';

// const OTPCard = ({phoneNumber}) => {
//   return (
//     <div className="h-screen bg-gray-1 inset-0 fixed bg-opacity-75 w-full flex flex-col justify-center items-center">
//       <div className="bg-white p-10 w-[300px] md:w-[400px] shadow-lg min-h-[200px] flex flex-col">
//         <div className="flex justify-between mb-6">
//           <h1 className="font-medium text-black">OTP Verfication</h1>
//           <button onClick={closeAccount}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-x-lg" viewBox="0 0 16 16">
//               <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
//             </svg>
//           </button>
//         </div>
//         <p>Enter 6-Digit OTP sent to {phoneNumber}</p>
//         <div className="flex space-x-2">
//           {[...Array(6)].map((_, index) => (
//             <Input
//               key={index}
//               type="text"
//               maxLength="1"
//               className="border-[1px] border-green-800 w-10 h-10 rounded-[5px] text-center"
//               {...register(`otp${index + 1}`, { required: true })}
//             />
//           ))}
//         </div>
//         <button className="mt-4 bg-green-4 text-white px-4 py-2 rounded-xl" onClick={<OTPCard phoneNumber={phoneNumber}/>}>r
//           Send OTP
//         </button>
//       </div>
//     </div>
//   )
// }

// const AccountBox = ({closeAccount}) => {
//   const [phoneNumber, setPhoneNumber] = useState();
//   return (
//     <div className="h-screen bg-gray-1 inset-0 fixed bg-opacity-75 w-full flex flex-col justify-center items-center">
//       <div className="bg-white p-10 w-[300px] md:w-[400px] shadow-lg min-h-[200px] flex flex-col">
//         <div className="flex justify-between mb-6">
//           <h1 className="font-medium text-black">Sign In</h1>
//           <button onClick={closeAccount}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-x-lg" viewBox="0 0 16 16">
//               <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
//             </svg>
//           </button>
//         </div>
//         <input
//           type="tel"
//           id="phoneInput"
//           class="border-[1px] border-green-4 px-4 py-2 my-3 rounded-lg"
//           onInput={(e) => setPhoneNumber(e.target.value)}
//           placeholder="Enter your phone number"
//         />
//         <button className="mt-4 bg-green-4 text-white px-4 py-2 rounded-xl" onClick={<OTPCard phoneNumber={phoneNumber}/>}>
//           Send OTP
//         </button>
//       </div>
//     </div>
//   )
// }

// const HeaderHome = () => {
//   const [drawerIsOpen, setDrawerIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isAccountBoxOpen, setIsAccountBoxOpen] = useState(false);

//   const handleDrawer = () => {
//     setDrawerIsOpen(!drawerIsOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleAccountBox =  () => {
//     setIsAccountBoxOpen(true);
//   }

//   const closeAccount = () => {
//     setIsAccountBoxOpen(false);
//   }

//   return (
//     <>
//       <div className={`px-4 md:px-6 py-3 w-full flex flex-row justify-between items-center sticky top-0 ${isScrolled ? 'bg-green-2 text-white' : 'bg-white text-green-1'} z-50`}>
//         <div className="flex items-center">
//           <Link to="/">
//             <img src={logo} alt="LogoImage" className="w-12 h-12 md:w-16 md:h-16 mx-2 md:mx-4" />
//           </Link>
//           <div className="pl-1 ml-4 md:mr-4">
//             <h2 className="font-regular text-xs md:text-sm lg:text-lg leading-tight">
//               Dr.Padma &amp; Dr.Ramachandra
//             </h2>
//             <p className="font-regular text-xs md:text-base lg:text-lg">
//               Naturopathy
//             </p>
//           </div>
//         </div>
//         <div className="hidden md:flex flex-grow justify-center items-center space-x-4 md:space-x-6 lg:space-x-10">
//           <ul className="flex flex-row text-sm md:text-base lg:text-lg font-medium space-x-4 md:space-x-6 lg:space-x-10">
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <a href={item.href}>{item.label}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="hidden md:flex items-center ml-2 md:ml-4 lg:ml-6">
//           <button className="" onClick={handleAccountBox}>
//             <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <ellipse cx="24.1682" cy="21.8746" rx="23.6399" ry="21.2403" fill="#497246"/>
//               <path d="M24.1683 10.4316C25.5665 10.4316 26.9075 10.9397 27.8962 11.8441C28.8849 12.7484 29.4404 13.975 29.4404 15.2539C29.4404 16.5329 28.8849 17.7595 27.8962 18.6638C26.9075 19.5682 25.5665 20.0762 24.1683 20.0762C22.77 20.0762 21.429 19.5682 20.4403 18.6638C19.4516 17.7595 18.8961 16.5329 18.8961 15.2539C18.8961 13.975 19.4516 12.7484 20.4403 11.8441C21.429 10.9397 22.77 10.4316 24.1683 10.4316ZM24.1683 22.4874C29.9939 22.4874 34.7125 24.6453 34.7125 27.3097V29.7208H13.624V27.3097C13.624 24.6453 18.3426 22.4874 24.1683 22.4874Z" fill="white"/>
//             </svg>
//           </button>
//         </div>
//         <div className="md:hidden">
//           <button onClick={handleDrawer} className="text-3xl md:text-4xl">
//             {drawerIsOpen ? <RxCross2 /> : <IoMenu />}
//           </button>
//         </div>
//         {isAccountBoxOpen && <AccountBox closeAccount={closeAccount} />}
//       </div>
//       {drawerIsOpen && (
//         <div className="fixed z-10 w-full h-full top-0 left-0 bg-green-800 transform transition-transform ease-in-out duration-300 md:hidden">
//           <div className="flex justify-end p-4">
//             <button onClick={handleDrawer} className="text-3xl md:text-4xl text-white">
//               <RxCross2 />
//             </button>
//           </div>
//           <ul className="flex flex-col items-center text-lg text-white">
//             {navItems.map((item, index) => (
//               <li key={index} className="mb-4 border-b-2 border-yellow-500 w-full text-center">
//                 <a href={item.href} className="block w-full py-2">{item.label}</a>
//               </li>
//             ))}
//             <li className="my-4">
//               <button className="" onClick={handleAccountBox}>
//                 <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <ellipse cx="24.1682" cy="21.8746" rx="23.6399" ry="21.2403" fill="#497246"/>
//                   <path d="M24.1683 10.4316C25.5665 10.4316 26.9075 10.9397 27.8962 11.8441C28.8849 12.7484 29.4404 13.975 29.4404 15.2539C29.4404 16.5329 28.8849 17.7595 27.8962 18.6638C26.9075 19.5682 25.5665 20.0762 24.1683 20.0762C22.77 20.0762 21.429 19.5682 20.4403 18.6638C19.4516 17.7595 18.8961 16.5329 18.8961 15.2539C18.8961 13.975 19.4516 12.7484 20.4403 11.8441C21.429 10.9397 22.77 10.4316 24.1683 10.4316ZM24.1683 22.4874C29.9939 22.4874 34.7125 24.6453 34.7125 27.3097V29.7208H13.624V27.3097C13.624 24.6453 18.3426 22.4874 24.1683 22.4874Z" fill="white"/>
//                 </svg>
//               </button>
//             </li>
//           </ul>
//           {isAccountBoxOpen && <AccountBox closeAccount={closeAccount} />}
//         </div>
//       )}
//     </>
//   );
// };

// export default HeaderHome;
