import React, { useState } from 'react';
import AppointmentImg from '../../assets/Page Assets/Home/appointment-img.png';
import AppointmentBg from '../../assets/Page Assets/Home/appointment-bg.png';
import clockImage from '../../assets/Page Assets/Home/clock.png';
import docter from '../../assets/Page Assets/Home/docter image.png';
import Input from "../../components/Input Fields/Input";
import CommonButton from '../../components/Buttons/CommonButton';
import { useForm } from 'react-hook-form';
import { slotDetails, doctorNames, diseasePurpose } from '../../constants';
import DoctorProfile from '../../components/Main Page Components/AppointmentPage Components/doctorProfile';
import FAQ from '../../components/Main Page Components/FAQ';

const AppointmentPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [slots, setSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [error, setError] = useState('');

  const appointmentData = (formData) => {
    if (!formData.setDate) {
      setError('Please select a date first');
      return;
    }
    setError('');
    console.log(formData);
    fetchSlots(formData.setDate);
  };

  const fetchSlots = async (date) => {
    // Placeholder function for API call
    console.log(`Fetching slots for date: ${date}`);
    setSlots(slotDetails); // Simulating API response
    // Example API call (replace with actual API endpoint)
    // const response = await fetch(`/api/slots?date=${date}`);
    // const data = await response.json();
    // setSlots(data);
  };

  return (
    <>
      <div className='w-full h-auto mb-10 bg-white'>
        <div className='p-4 md:p-10 w-full flex flex-col md:flex-row justify-around items-center'>
          <div className='w-full text-center md:w-1/2 md:text-start mb-10 md:my-0 pl-4'>
            <p className='text-amber-900 font-bold text-[25px] md:text-4xl'>డా.రామచంద్ర’s</p>
            <h1 className='text-green-4 font-bold text-[40px] md:text-[80px] mb-2 leading-tight'>Harmony Heal</h1>
            <p className='text-red-400 text-base md:text-lg w-full md:w-4/5'>
              Our platform offers a seamless journey towards well-being through personalized 
              appointments with experienced naturopathy practitioners
            </p>
          </div>
          <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
            <img src={AppointmentImg} className='w-full md:w-[650px]' alt="Appointment" />
          </div>
        </div>

        <div 
          className='rounded-2xl p-8 md:p-28 max-w-full'
          style={{backgroundImage: `url(${AppointmentBg})`, backgroundSize: 'cover'}}>
          <h1 className='text-white text-2xl mb-10 mt-5 font-semibold text-center'>Book your Appointment</h1>
          <form onSubmit={handleSubmit(appointmentData)} className='w-full flex flex-col justify-center items-center'>
            <div className='w-full flex flex-col md:flex-row'>

              <div className='w-full md:w-1/2 order-3 md:order-1'>
                <div className='p-8 bg-white rounded-[40px] shadow-lg mt-4 md:mx-5 md:mr-10'>
                  <div className='flex justify-center items-center'>
                    <img className='w-1/2' src={clockImage} alt='Clock'/>
                  </div>
                  <div className='mt-4'>
                    <p className='text-xs md:text-lg'>
                      <span className='font-medium'>Instructions:</span><br />
                      Please arrive 5-10 minutes prior to your scheduled appointment time to allow for 
                      check-in procedures.<br />
                      Write down any questions or concerns you have before your appointment to ensure you 
                      address them during your visit.
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-full md:w-1/2 order-1 md:order-2 my-5 flex flex-col md:justify-evenly'>
                <Input
                  label="Name *"
                  type="text"
                  placeholder="Enter Your Name"
                  className="border-[1px] border-green-800 w-full md:w-11/12 h-10 rounded-[5px] mb-[4px]"
                  {...register("setName", { required: true })}
                />

                <Input
                  label="Phone Number *"
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="border-[1px] border-green-800 w-full md:w-11/12 h-10 rounded-[5px] mb-[4px]"
                  {...register("setPhoneNumber", { required: true })}
                />
                
                <label htmlFor='purpose' className='text-white text-sm self-start'>Choose the Purpose *</label>
                <select
                  id="purpose"
                  defaultValue="selectPurpose"
                  className="border-[1px] border-green-800 w-full md:w-11/12 h-10 rounded-[5px] mb-[4px]"
                  {...register("setPurpose", { required: true })}
                >
                    <option value="selectPurpose" disabled hidden>Select a purpose</option>
                    {diseasePurpose.map((purpose, i) => (
                      <option key={i} value={purpose.purposeOfVisit}>{purpose.purposeOfVisit}</option>
                    ))}
                </select>
                <label htmlFor='doctor' className='text-white text-sm self-start mt-1'>Choose the Doctor *</label>
                <select
                  id="doctor"
                  defaultValue="selectDoctor"
                  className="border-[1px] border-green-800 w-full md:w-11/12 h-10 rounded-[5px] mb-[4px]"
                  {...register("setDoctor", { required: true })}
                >
                    <option value="selectDoctor" disabled hidden>Select your doctor</option>
                    {doctorNames.map((d, i) => (
                      <option key={i} value={d.name}>{d.name}</option>
                    ))}
                </select>

                <Input
                  label="Date *"
                  type="date"
                  placeholder="Select the date for appointment"
                  className="border-[1px] border-green-800 w-full md:w-11/12 h-10 rounded-[5px] mb-[2px]"
                  {...register("setDate", { required: true, onChange: (e) => setSelectedDate(e.target.value) })}
                />
                {error && <p className='text-red-500'>{error}</p>}
              </div>

              {selectedDate && (
                <div className='md:hidden w-full order-2 md:order-3'>
                  {slots.length !== 0 ? (
                    <>
                      <p className='text-white'>Available Slots *</p>
                      <div className='-mx-2 flex flex-wrap h-[90px] overflow-y-scroll admin-scrollbar'>
                        {slots.map((slot, index) => (
                          <div key={index} className='m-1 md:m-2 w-auto text-sm bg-white rounded-[5px] p-[1px] px-4 border-[1px] border-green-800'>
                            {slot.time}
                          </div>
                        ))}
                      </div>
                    </>
                    ) : (
                      <p className='text-white'>No slots available on selected date</p>
                    )}
                </div>
              )}

            </div>

            {selectedDate && (
              <div className='hidden md:block ml-12 w-full mt-5'>
                {slots.length !== 0 ? (
                  <>
                    <p className='text-white'>Available Slots *</p>
                    <div className='-mx-2 flex flex-wrap h-[90px] overflow-y-scroll admin-scrollbar'>
                      {slots.map((slot, index) => (
                        <div key={index} className='m-1 md:m-2 w-auto text-sm bg-white rounded-[5px] p-[1px] px-4 border-[1px] border-green-800'>
                          {slot.time}
                        </div>
                      ))}
                    </div>
                  </>
                  ) : (
                    <p className='text-white'>No slots available on the selected date, please select another date</p>
                  )}
              </div>
            )}

            <div className='w-full m-4 md:ml-12 flex flex-start'>
              <Input
                type="checkbox"
                id="checkbox"
                className="mr-2"
              />
              <label htmlFor="checkbox" className='mt-6 text-white text-xs md:text-base'>
                By checking this box, you agree to our terms and conditions and confirm 
                your appointment booking.
              </label>
            </div>

            <div className='flex justify-center md:justify-start w-full md:w-[10%]'>
              <CommonButton type="submit" className="bg-white text-green-800 hover:bg-green-800 hover:text-white" buttonText="BOOK" />
            </div>
          </form>
        </div>
      </div>

      <DoctorProfile />
      <FAQ />
    </>
  );
};

export default AppointmentPage;
