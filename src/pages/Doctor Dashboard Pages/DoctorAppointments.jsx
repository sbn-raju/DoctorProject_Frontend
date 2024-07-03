import React, { useState, useEffect } from 'react';
import { DoctorAppointments as appointments } from '../../constants';
import { Link, useNavigate } from "react-router-dom";
import { BsCalendar2Event } from "react-icons/bs";

const DoctorAppointments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();
  const [selectedAppointments, setSelectedAppointments] = useState([]);
  const [selectedSort, setSelectedSort] = useState("All");
  const [selectedAppointmentType, setSelectedAppointmentType] = useState("Appointments");

  const inCompleteAppointments = appointments.filter((doc) => !doc.isChecked);
  const completedAppointments = appointments.filter((doc) => doc.isChecked);

  const [inCompletedSort, setInCompletedSort] = useState(inCompleteAppointments);
  const [completedSort, setCompletedSort] = useState(completedAppointments);

  useEffect(() => {
    let sortedList;
    if (selectedAppointmentType === "Appointments") {
      sortedList = [...inCompleteAppointments];
    } else {
      sortedList = [...completedAppointments];
    }
  
    if (selectedSort === 'Today') {
      const today = new Date().toDateString();
      sortedList = sortedList.filter(a => new Date(a.date_of_appointment).toDateString() === today);
    } else if (selectedSort === 'Tomorrow') {
      const tmrw = new Date();
      tmrw.setDate(tmrw.getDate() + 1);
      sortedList = sortedList.filter(a => new Date(a.date_of_appointment).toDateString() === tmrw.toDateString());
    }
    
    if (selectedAppointmentType === "Appointments") {
      setInCompletedSort(sortedList);
    } else {
      setCompletedSort(sortedList);
    }
  }, [selectedSort]);

  const stIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = stIndex + rowsPerPage;
  const inCompleteDisplay = inCompletedSort.slice(stIndex, endIndex);
  const completeDisplay = completedSort.slice(stIndex, endIndex);

  let totalPages = 0;

  if (selectedAppointmentType === "Appointments") {
    totalPages = Math.ceil(inCompletedSort.length / rowsPerPage);
  } else {
    totalPages = Math.ceil(completedSort.length / rowsPerPage);
  }

  const handleRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10)); // converting string num to decimal from dropdown menu
    setCurrentPage(1); // reloading to 1st page after rows per page count is changed
  }

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const handlePageClick = (pageNo) => {
    setCurrentPage(pageNo)
  }

  const renderRowsPerPage = () => {
    const opts = [10, 20, 50, 100, 200, 300];
    if (selectedAppointmentType === "Appointments") {
      return opts.filter((option) => option < inCompletedSort.length).map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))
    } else {
      return opts.filter((option) => option < completedSort.length).map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))
    }
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedAppointments(appointments.map(appointment => appointment.id));
    } else {
      setSelectedAppointments([]);
    }
  }

  const handleSelectAppointment = (e, id) => {
    if (e.target.checked) {
      setSelectedAppointments([...selectedAppointments, id]);
    } else {
      setSelectedAppointments(selectedAppointments.filter(selectedId => selectedId !== id));
    }
  }

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    setCurrentPage(1);
  }

  const handleAppointments = (e) => {
    setSelectedAppointmentType(e.target.value);
    setSelectedSort('All');
    setInCompletedSort(inCompleteAppointments);
    setCompletedSort(completedSort);
    setCurrentPage(1);
  }

  const changeStatus = () => {
    // api (axios) call
  }

  return (
    <div className='min-h-screen bg-gray-1 p-8 flex flex-col md:flex-row'>
      <div className='w-full lg:w-9/12 flex flex-col justify-center items-center'>
      <div className='w-full flex justify-between'>
        <div className='flex flex-row items-center'>
          <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Doctor!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex justify-center items-center ml-3">
            <span className="text-sm ml-0 md:ml-4"><BsCalendar2Event /></span>
            <p className="text-sm ml-1">Appointments</p>
          </div>
        </div>

        <div className='flex justify-end items-center'>
          <select 
            className='shadow rounded-2xl p-[6px] h-10 mx-2 md:mx-4'
            onChange={handleSortChange} 
            value={selectedSort}>
              <option value="All">All</option>
              <option value="Today">Today</option>
              <option value="Tomorrow">Tomorrow</option>
          </select>

          <select className='shadow rounded-2xl p-[6px] h-10 mx-2 md:mx-4' onChange={handleAppointments} value={selectedAppointmentType}>
            <option value="Appointments">Appointments</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <div className='mt-6 p-3 px-8 bg-white w-full rounded-2xl shadow-md flex justify-between'>
        <div>
          <input
            type="checkbox"
            id="selectAll"
            className='mx-2'
            onChange={handleSelectAll}
            checked={selectedAppointments.length === appointments.length}
          />
          <label htmlFor="selectAll">Select All</label>
        </div>
        <div className="flex justify-center items-center">
          <button className="mx-2" onClick={() => navigate('/doctor/whatsapp')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#497246" className="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </button>
          <button className="mx-2" onClick={changeStatus}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="#497246" className="bi bi-check2-all" viewBox="0 0 16 16">
              <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
              <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
            </svg>
          </button>
        </div>
      </div>

      {appointments.length !== 0 ? (
        <div className='bg-white shadow-md mt-6 w-full overflow-x-auto admin-scrollbar rounded-2xl'>
          <div className='min-w-[800px] bg-white p-4 px-6 md:px-10 border-b-[1px] border-gray-2 sticky top-0 z-10'>
            <ul className='ml-8 grid grid-cols-5 font-regular text-sm'>
              <li>Name</li>
              <li>Contact</li>
              <li>Date</li>
              <li>Time</li>
              {/* <li>Doctor</li> */}
              <li>Purpose</li>
            </ul>
          </div>
          <div className='min-w-[800px] h-[520px] overflow-auto scrollbar'>
          {selectedAppointmentType === 'Appointments' ? (
            <>
            {inCompleteDisplay.map((appointment, index) => (
              <div key={index} className='flex w-full bg-white p-4 px-6 md:px-8'>
                <input type="checkbox" id={index} className="mr-8" 
                      checked={selectedAppointments.includes(appointment.id)}
                      onChange={(e) => handleSelectAppointment(e, appointment.id)}/>
                <ul className='w-full grid grid-cols-5 text-sm'>
                  <li>{appointment.name}</li>
                  <li>{appointment.phone}</li>
                  <li>{appointment.date_of_appointment}</li>
                  <li>{appointment.time}</li>
                  {/* <li>{appointment.doctor}</li> */}
                  <li>{appointment.purpose}</li>
                </ul>
              </div>
            ))}
            </>
          ) : (
            <>
              {completeDisplay.map((appointment, index) => (
              <div key={index} className='flex w-full bg-white p-4 px-6 md:px-8'>
                <input type="checkbox" id={index} className="mr-8" 
                      checked={selectedAppointments.includes(appointment.id)}
                      onChange={(e) => handleSelectAppointment(e, appointment.id)}/>
                <ul className='w-full grid grid-cols-5 text-sm'>
                  <li>{appointment.name}</li>
                  <li>{appointment.phone}</li>
                  <li>{appointment.date_of_appointment}</li>
                  <li>{appointment.time}</li>
                  {/* <li>{appointment.doctor}</li> */}
                  <li>{appointment.purpose}</li>
                </ul>
              </div>
            ))}
            </>
          )}
          </div>
        </div>
      ) : (
        <div>
          No Data Recorded Yet
        </div>
      )}
      
      <>
        <div className="hidden md:block w-full">
          <div className='w-full my-6 shadow-md bg-white p-3 px-6 rounded-2xl flex justify-between'>
            {selectedAppointmentType === "Appointments" ? (
              <>
                <div className="flex w-1/3">
                  <p className="text-sm">Row Per Page: </p>
                  <select value={rowsPerPage} onChange={handleRowsPerPage} className='bg-gray-200 mx-2 rounded-md'>
                    {renderRowsPerPage()}
                    <option value={inCompletedSort.length}>{inCompletedSort.length}</option>
                  </select>
                </div>
                <div className='flex justify-end items-center w-2/3'>
                  <button className='mx-2' onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                  </button>
                  <div className="overflow-auto whitespace-nowrap admin-scrollbar">
                    <div className=''>
                      {Array.from({length: totalPages}, (_, index) => (
                        <button
                          key={index + 1}
                          className={`w-6 mx-1 rounded-full ${currentPage === index + 1 ? 'bg-green-4 text-white' : 'bg-white text-black'}`}
                          onClick={() => handlePageClick(index + 1)}
                        >
                        {index + 1}
                      </button>
                      ))}
                    </div>
                  </div>
                  <button className='mx-2' onClick={handleNextPage} disabled={endIndex >= inCompletedSort.length}>
                    Next
                  </button>
                </div>
              </>
              ) : (
                <>
                  <div className="flex w-1/3">
                    <p className="text-sm">Row Per Page: </p>
                    <select value={rowsPerPage} onChange={handleRowsPerPage} className='bg-gray-200 mx-2 rounded-md'>
                      {renderRowsPerPage()}
                      <option value={completedSort.length}>{completedSort.length}</option>
                    </select>
                  </div>
                  <div className='flex justify-end items-center w-2/3'>
                    <button className='mx-2' onClick={handlePreviousPage} disabled={currentPage === 1}>
                      Previous
                    </button>
                    <div className="overflow-auto whitespace-nowrap admin-scrollbar">
                      <div className=''>
                        {Array.from({length: totalPages}, (_, index) => (
                          <button
                            key={index + 1}
                            className={`w-6 mx-1 rounded-full ${currentPage === index + 1 ? 'bg-green-4 text-white' : 'bg-white text-black'}`}
                            onClick={() => handlePageClick(index + 1)}
                          >
                          {index + 1}
                        </button>
                        ))}
                      </div>
                    </div>
                    <button className='mx-2' onClick={handleNextPage} disabled={endIndex >= completedSort.length}>
                      Next
                    </button>
                  </div>
                </>
              )}
          </div>
        </div>

        <div className="md:hidden w-full">
        {selectedAppointmentType === "Appointments" ? (
          <div className='my-6 shadow-md bg-white p-3 px-6 rounded-2xl flex justify-between'>
            <button className='mx-2' onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>

            <select value={rowsPerPage} onChange={handleRowsPerPage} className='bg-gray-200 mx-2 rounded-md'>
              {renderRowsPerPage()}
              <option value={inCompleteAppointments.length}>{inCompleteAppointments.length}</option>
            </select>

            <button className='mx-2' onClick={handleNextPage} disabled={endIndex >= inCompleteAppointments.length}>
              Next
            </button>
          </div>
        ) : (
          <div className='my-6 shadow-md bg-white p-3 px-6 rounded-2xl flex justify-between'>
            <button className='mx-2' onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>

            <select value={rowsPerPage} onChange={handleRowsPerPage} className='bg-gray-200 mx-2 rounded-md'>
              {renderRowsPerPage()}
              <option value={completedAppointments.length}>{completedAppointments.length}</option>
            </select>

            <button className='mx-2' onClick={handleNextPage} disabled={endIndex >= completedAppointments.length}>
              Next
            </button>
          </div>
        )}
        </div>
      </>
      </div>

      <div className='h-full w-full lg:w-3/12 mx-4'>
        <div className='flex md:flex-row lg:flex-col justify-end items-center'>
            <div className='bg-white w-full rounded-xl'>
                <div className='px-4 py-2'>
                    <p>Gratitude Box</p>
                </div>
                <hr className='border-[1px] border-gray-2'/>
                <div className='p-4'>
                    <p className='text-[#666666]'>
                        “Your genuine concern and support have meant a lot to me. Thank you for going above and beyond to ensure my well-being.”
                    </p>
                </div>
            </div>
            <div className='bg-white w-full rounded-xl my-10'>
                <div className='px-4 py-2'>
                    <p>Number of souls you have touched.</p>
                </div>
                <hr className='border-[1px] border-gray-2'/>
                <div className='p-4 flex flex-col justify-center items-center'>
                    <div className='border-8 border-white bg-green-4 h-44 w-44 rounded-full flex justify-center items-center text-white shadow-xl'>
                        23456
                    </div>
                    <p className='self-start my-4'>Lot more to go..........</p>
                </div>
            </div>      
        </div>
      </div>
    </div>
  )
}

export default DoctorAppointments;
