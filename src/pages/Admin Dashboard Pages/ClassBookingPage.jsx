import React, { useEffect, useState } from 'react'
import { classBookings } from '../../constants'
import { BsCalendar2Event } from "react-icons/bs";
import '../../styles/scrollbar.styles.css'
import { IoMdPerson } from 'react-icons/io';

const ClassBookingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [classData, setClassData] = useState([]);

  const totalPages = Math.ceil(classBookings.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const currentClasses = classBookings.slice(startIndex, endIndex);
  useEffect(() => {
    // const currentClasses = classBookings.slice(startIndex, endIndex);
    setClassData(currentClasses);
  }, [currentPage, rowsPerPage]);

  const handleRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  }

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const handlePageClick = (pageNo) => {
    setCurrentPage(pageNo);
  }

  const renderRowsPerPage = () => {
    const opts = [5, 10, 20, 50, 100, 200, 300];
    return opts.filter((option) => option < classBookings.length).map((opt) => (
      <option key={opt} value={opt}>{opt}</option>
    ))
  }

  const handleChange = (e) => {
    const {name, checked} = e.target;
    if(name == "selectAll"){
      let tempClasses = currentClasses.map((classD) => {
        return {...classD, isChecked: checked}
      })
      setClassData(tempClasses);
    }else{
      let tempClasses = classData.map((classD) => {
        classD.Name === name ? {...classD, isChecked: checked} : classD
      })
      setClassData(tempClasses);
    }
  }

  return (
    <div className='h-auto w-full bg-gray-1 flex flex-col justify-center items-center px-8'>
      <div className='w-full flex justify-between mt-6'>
        <div className='flex flex-row items-center'>
          <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Admin!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex justify-center items-center ml-3">
            <span className="text-sm ml-0 md:ml-4"><BsCalendar2Event /></span>
            <p className="text-sm ml-1">Class Bookings</p>
          </div>
        </div>

        <div className='flex justify-end items-center'>
          <select defaultValue="Sort" className='shadow rounded-2xl px-[6px] h-10 mx-2 md:mx-4'>
            <option value="Sort">Sort</option>
            <option value="Date">Date</option>
            <option value="Time">Time</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>
      </div>

      <form className='w-full form'>
        <div className='mt-6 p-3 px-8 bg-white w-full rounded-2xl shadow-md flex'>
          <input
            type="checkbox"
            name="selectAll"
            className='mx-2'
            id="selectAll"
            onChange={handleChange}
          />
          <label htmlFor="selectAll">Select All</label>
        </div>

        {classBookings.length !== 0 ? (
          <div className='bg-white shadow-md mt-6 w-full overflow-x-auto admin-scrollbar rounded-2xl'>
            <div className='min-w-[800px] bg-white p-4 px-6 md:px-10 border-b-[1px] border-gray-2'>
              <ul className='ml-8 grid grid-cols-6 text-black font-regular text-sm'>
                <li>Name</li>
                <li>Contact</li>
                <li>Batch</li>
                <li>Gender</li>
                <li>Age</li>
                <li>City</li>
              </ul>
            </div>
            <div className='min-w-[800px] h-[270px] overflow-auto scrollbar'>
              {classData.map((classD, index) => (
                <div key={index} className='flex w-full bg-white p-4 px-6 md:px-8 form-check'>
                  <input 
                    type="checkbox"
                    className="mr-8 form-check-input"
                    name={classD.Name}
                    checked={classD.isChecked || false}
                    onChange={handleChange}
                  />
                  <ul className='w-full grid grid-cols-6 text-sm form-check-label'>
                    <li>{classD.Name}</li>
                    <li>{classD.PhoneNumber}</li>
                    <li>{classD.Batch}</li>
                    <li>{classD.Gender}</li>
                    <li>{classD.Age}</li>
                    <li>{classD.City}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            No Data Recorded Yet
          </div>
        )}
      </form>

      <>
        <div className="hidden md:block w-full">
          <div className='w-full my-6 shadow-md bg-white p-3 px-6 rounded-2xl flex justify-between'>
            <div className="flex w-1/3">
              <p className="text-sm">Row Per Page: </p>
              <select value={rowsPerPage} onChange={handleRowsPerPage} className='bg-gray-200 mx-2 rounded-md'>
                {renderRowsPerPage()}
                <option value={classBookings.length}>{classBookings.length}</option>
              </select>
            </div>
            <div className='flex justify-end items-center w-2/3'>
              <button className='mx-2' onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
              </button>
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
              <button className='mx-2' onClick={handleNextPage} disabled={endIndex >= classBookings.length}>
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden w-full">
          <div className='my-6 shadow-md bg-white p-3 px-6 rounded-2xl flex justify-between'>
            <button className='mx-2' onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>

            <select value={rowsPerPage} onChange={handleRowsPerPage} className='bg-gray-200 mx-2 rounded-md'>
              {renderRowsPerPage()}
              <option value={classBookings.length}>{classBookings.length}</option>
            </select>

            <button className='mx-2' onClick={handleNextPage} disabled={endIndex >= classBookings.length}>
              Next
            </button>
          </div>
        </div>
      </>
    </div>
  )
}

export default ClassBookingPage