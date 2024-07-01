import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {

  // This is the admin panel sidebar for the simpler navigation
  // UseState for making the button active when it is clicked to navigate to the particular page
  const [activeBtn, setActiveBtn] = useState('');
  const handleBtn = (path) => {
    setActiveBtn(path);
  }
  const isActive = (path) => activeBtn === path;
  return (
    <>
      <aside className="hidden lg:block lg:w-80 bg-gray-1">
        <div className="hidden lg:h-full lg:flex justify-start items-start flex-col text-white bg-green-4 p-10 lg:w-80 rounded-br-3xl rounded-tr-3xl mb-2">
          <div className="w-full flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#000000" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
            <p className="text-sm text-gray-300">Admin</p>
          </div>
          <div className="w-full flex flex-col py-4">
            {/* Admin Class Booking Panel */}
            <Link
              to="/admin/classbooked" 
              onClick={() => handleBtn("classbooked")}
              className={`hover:bg-green-3 ${isActive('classbooked') ? 'bg-green-3' : ''} rounded-2xl p-4 cursor-pointer flex m-1`}>
                <span className="px-2 flex justify-center items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-journal-text" viewBox="0 0 16 16">
                    <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                  </svg>
                </span>
                <p className="text-lg">Class Bookings</p>
            </Link>

            
            {/* Admin Appointments Panel To see the number of Appointments in Total */}
            <Link 
              to="/admin/appointment" 
              onClick={() => handleBtn("appointment")}
              className={`hover:bg-green-3 ${isActive('appointment') ? 'bg-green-3' : ''} rounded-2xl p-4 cursor-pointer flex m-1`}>
                <span className="px-2 flex justify-center items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-ticket-detailed" viewBox="0 0 16 16">
                    <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z"/>
                    <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z"/>
                  </svg>
                </span>
                <p className="text-lg">Appointments</p>
            </Link>


            {/* Admin Youtube And Testimonials panel to upload the iframe of the youtube videos and testimonial youtube videos of the users channels */}
            <Link 
              to="/admin/youtube"
              onClick={() => handleBtn('youtube')} 
              className={`hover:bg-green-3 ${isActive('youtube') ? 'bg-green-3' : ''} rounded-2xl p-4 cursor-pointer flex m-1`}>
                <span className="px-2 flex justify-center items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                  </svg>
                </span>
                <p className="text-lg">YT & Testimonials</p>
            </Link>



            {/* Admin Panel to fetch all the payments done for the Various Purpuses */}
            <Link 
              to="/admin/payment"
              onClick={() => handleBtn('payment')}
              className={`hover:bg-green-3 ${isActive('payment') ? 'bg-green-3' : ''} rounded-2xl p-4 cursor-pointer flex m-1`}>
                <span className="px-2 flex justify-center items-center text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                  </svg>
                </span>
                <p className="text-lg">Payments</p>
            </Link>

            {/* Admin panel to fetch all the user Datas such as Phone number, name and etc */}
            <Link 
              to="/admin/users"
              onClick={() => handleBtn('users')}
              className={`hover:bg-green-3 ${isActive('users') ? 'bg-green-3' : ''} rounded-2xl p-4 cursor-pointer flex m-1`}>
                <span className="px-2 flex justify-center items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-vcard" viewBox="0 0 16 16">
                    <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/>
                  </svg>
                </span>
                <p className="text-lg">User Data</p>
            </Link>


            {/* Admin Panel to set the slots for the Doctor in his free time */}
            <Link 
              to="/admin/slots" 
              onClick={() => handleBtn('slots')}
              className={`hover:bg-green-3 ${isActive('slots') ? 'bg-green-3' : ''} rounded-2xl p-4 cursor-pointer flex m-1`}>
                <span className="px-2 flex justify-center items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16">
                  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z"/>
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1"/>
                </svg>
                </span>
                <p className="text-lg">Set Slots</p>
            </Link>


            {/* Admin Panel to set the Class Date and Timings  */}
            <Link 
              to="/admin/class" 
              onClick={() => handleBtn('class')}
              className={`hover:bg-green-3 ${isActive('class') ? 'bg-green-3' : ''} rounded-2xl p-4 cursor-pointer flex m-1`}>
                <span className="px-2 flex justify-center items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-calendar2-event" viewBox="0 0 16 16">
                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </span>
                <p className="text-lg">Class Updates</p>
            </Link>


            {/* Admin Panel to add the Doctor If any new Doctor Joins  */}
            <Link 
              to="/admin/addDoctor" 
              onClick={() => handleBtn('docter')}
              className={`hover:bg-green-3 ${isActive('dcoter') ? 'bg-green-3' : ''} rounded-2xl p-4 cursor-pointer flex m-1`}>
                <span className="px-2 flex justify-center items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                    <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                  </svg>
                </span>
                <p className="text-lg">Add Docter</p>
            </Link>
          </div>
          <div className="w-full flex flex-col justify-end flex-grow pb-16">
            <p className="text-gray-200 font-medium text-sm ml-[25%]">Version 1.1.0</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;