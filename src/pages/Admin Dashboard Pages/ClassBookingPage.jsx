import React, { useEffect, useState } from 'react'
import { classBookings } from '../../constants'
import { BsCalendar2Event } from "react-icons/bs";
import '../../styles/scrollbar.styles.css'
import { IoMdPerson } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const ClassBookingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [classData, setClassData] = useState([]);
  const [selectedBookings, setSelectedBookings] = useState([]);
  const navigate = useNavigate();
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
    const opts = [10, 20, 50, 100, 200, 300];
    return opts.filter((option) => option < classBookings.length).map((opt) => (
      <option key={opt} value={opt}>{opt}</option>
    ))
  }

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedBookings(classBookings.map(booking => booking.id));
    } else {
      setSelectedBookings([]);
    }
  }

  const handleSelectBookings = (e, id) => {
    if (e.target.checked) {
      setSelectedBookings([...selectedBookings, id]);
    } else {
      setSelectedBookings(selectedBookings.filter(selectedId => selectedId !== id));
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
      </div>

      <div className='mt-6 p-3 px-8 bg-white w-full rounded-2xl shadow-md flex justify-between'>
        <div>
          <input
            type="checkbox"
            id="selectAll"
            className='mx-2'
            onChange={handleSelectAll}
            checked={selectedBookings.length === classBookings.length}
          />
          <label htmlFor="selectAll">Select All</label>
        </div>
        <div className="flex justify-center items-center" onClick={() => navigate('/admin/whatsapp')}>
          <button className="mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#497246" className="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </button>
        </div>
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
          <div className='min-w-[800px] h-[520px] overflow-auto scrollbar'>
            {classData.map((classD, index) => (
              <div key={index} className='flex w-full bg-white p-4 px-6 md:px-8 form-check'>
                <input type="checkbox" id={index} className="mr-8" 
                    checked={selectedBookings.includes(classD.id)}
                    onChange={(e) => handleSelectBookings(e, classD.id)}/>
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