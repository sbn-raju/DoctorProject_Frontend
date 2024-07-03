import React, { useState } from 'react';
import AppointmentImg from '../../assets/Page Assets/Home/appointment-img.png';
import AppointmentBg from '../../assets/Page Assets/Home/appointment-bg.png';
import Clock from '../../assets/Page Assets/Home/clock.png';
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
            <img src={AppointmentImg} className='w-full md:w-[650px]' />
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
                    <img className='w-1/2' src={Clock} alt='Clock'/>
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
                  style={{color:'white'}}
                />

                <Input
                  label="Phone Number *"
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="border-[1px] border-green-800 w-full md:w-11/12 h-10 rounded-[5px] mb-[4px]"
                  {...register("setPhoneNumber", { required: true })}
                  style={{color:'white'}}
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
                  style={{color:'white'}}
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
                      <p>No slots available on selected date</p>
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

            <div className='flex justify-center my-4'>
              <CommonButton type='submit' className='bg-white text-green-4 p-2 px-4 w-44 rounded-lg font-medium'>Pay Now</CommonButton>
            </div>
          </form>
        </div>

        <div className='flex flex-col justify-center items-center my-10 p-6'>
          <p className='text-green-700 text-3xl mb-10 mt-5 font-semibold'>Know your Doctor</p>
          <DoctorProfile image={docter} name={"Dr. Ramachandra"} text={"ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు"}/>
          <DoctorProfile image={docter} name={"Dr. Ramachandra"} text={"ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు"}/>
          <DoctorProfile image={docter} name={"Dr. Ramachandra"} text={"ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు"}/>
        </div>
        
        <div className='flex flex-col justify-center items-center my-10 p-6'>
          <div className='w-full md:w-5/6'>
            <div className='my-4 text-center'>
              <p className='font-semibold text-2xl'>FAQs</p>
            </div>
            <div className='w-full mt-4'>
              <FAQ text={"1. What conditions can Naturopathy help with?"} answer={"Naturopathy can help with chronic conditions like arthritis and digestive disorders, as well as mental health issues such as stress and anxiety, using natural remedies and lifestyle changes. It also supports immune system health, helping with frequent colds and infections."}/>
              <FAQ text={"2. What can I expect from a Naturopathic consultation?"} answer={"During a naturopathic consultation, you can expect a comprehensive assessment of your health, including a detailed discussion of your medical history, lifestyle, diet, and any symptoms you're experiencing. The naturopath will then develop a personalized treatment plan, which may include dietary recommendations, lifestyle changes, herbal remedies, and other natural therapies tailored to your specific needs."}/>
              <FAQ text={"3. How long does it take to see results with Naturopathy?"} answer={"The time it takes to see results with naturopathy can vary widely depending on the individual and the condition being treated. Generally, some improvements may be noticed within a few weeks, but more significant or chronic conditions might take several months to show substantial results. Consistency with the recommended lifestyle changes and treatments is key to achieving the best outcomes."}/>
              <FAQ text={"4. Are Naturopathic treatments evidence-based?"} answer={"Naturopathic treatments can be evidence-based, especially when they incorporate dietary changes, exercise, and certain herbal remedies that have been scientifically studied. However, the extent of evidence varies, and some treatments may rely more on traditional use and practitioner experience rather than rigorous scientific research. It’s important to discuss the evidence supporting specific treatments with your naturopath to make informed decisions."}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentPage;

// import React from 'react';
// import AppointmentImg from '../../assets/Page Assets/Home/appointment-img.png';
// import AppointmentBg from '../../assets/Page Assets/Home/appointment-bg.png';
// import Clock from '../../assets/Page Assets/Home/clock.png';
// import docter from '../../assets/Page Assets/Home/docter image.png';
// import Input from "../../components/Input Fields/Input";
// import CommonButton from '../../components/Buttons/CommonButton';
// import { useForm } from 'react-hook-form';
// import { slotDetails, doctorNames, diseasePurpose } from '../../constants';
// import DoctorProfile from '../../components/Main Page Components/AppointmentPage Components/doctorProfile';
// import FAQ from '../../components/Main Page Components/FAQ';

// const AppointmentPage = () => {
//   const { register, handleSubmit } = useForm();
//   const appointmentData = (formData) => console.log(formData);

//   return (
//     <>
//       <div className='w-full h-auto mb-10 bg-white'>
//         <div className='p-4 md:p-10 w-full flex flex-col md:flex-row justify-around items-center'>
//           <div className='w-full text-center md:w-1/2 md:text-start mb-10 md:my-0 pl-4'>
//             <p className='text-amber-900 font-bold text-[25px] md:text-4xl'>డా.రామచంద్ర’s</p>
//             <h1 className='text-green-4 font-bold text-[40px] md:text-[80px] mb-2 leading-tight'>Harmony Heal</h1>
//             <p className='text-red-400 text-base md:text-lg w-full md:w-4/5'>
//               Our platform offers a seamless journey towards well-being through personalized 
//               appointments with experienced naturopathy practitioners
//             </p>
//           </div>
//           <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
//             <img src={AppointmentImg} className='w-full md:w-[650px]' />
//           </div>
//         </div>

//         <div 
//           className='rounded-2xl p-8 md:p-28 max-w-full'
//           style={{backgroundImage: `url(${AppointmentBg})`, backgroundSize: 'cover'}}>
//           <h1 className='text-white text-2xl mb-10 mt-5 font-semibold text-center'>Book your Appointment</h1>
//           <form onSubmit={handleSubmit(appointmentData)} className='w-full flex flex-col justify-center items-center'>
//             <div className='w-full flex flex-col md:flex-row'>

//               <div className='w-full md:w-1/2 order-3 md:order-1'>
//                 <div className='p-8 bg-white rounded-[40px] shadow-lg mt-4 md:mx-5 md:mr-10'>
//                   <div className='flex justify-center items-center'>
//                     <img className='w-1/2' src={Clock} alt='Clock'/>
//                   </div>
//                   <div className='mt-4'>
//                     <p className='text-xs md:text-lg'>
//                       <span className='font-medium'>Instructions:</span><br />
//                       Please arrive 5-10 minutes prior to your scheduled appointment time to allow for 
//                       check-in procedures.<br />
//                       Write down any questions or concerns you have before your appointment to ensure you 
//                       address them during your visit.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className='w-full md:w-1/2 order-1 md:order-2 my-5 flex flex-col md:justify-evenly'>
//                 <Input
//                   label="Name *"
//                   type="text"
//                   placeholder="Enter Your Name"
//                   className="border-[1px] border-green-800 w-full md:w-11/12 h-10 rounded-[5px] mb-[4px]"
//                   {...register("setName", { required: true })}
//                   style={{color:'white'}}
//                 />

//                 <Input
//                   label="Phone Number *"
//                   type="text"
//                   placeholder="Enter Your Phone Number"
//                   className="border-[1px] border-green-800 w-full md:w-11/12 h-10 rounded-[5px] mb-[4px]"
//                   {...register("setPhoneNumber", { required: true })}
//                   style={{color:'white'}}
//                 />
                
//                 <label htmlFor='purpose' className='text-white text-sm self-start'>Choose the Purpose *</label>
//                 <select
//                   id="purpose"
//                   defaultValue="selectPurpose"
//                   className="border-[1px] border-green-800 w-full md:w-11/12 h-10 rounded-[5px] mb-[4px]">
//                     <option value="selectPurpose" disabled hidden>Select a purpose</option>
//                     {diseasePurpose.map((purpose, i) => (
//                       <option key={i} value={purpose.purposeOfVisit}>{purpose.purposeOfVisit}</option>
//                     ))}
//                 </select>
//                 <label htmlFor='doctor' className='text-white text-sm self-start mt-1'>Choose the Doctor *</label>
//                 <select
//                   id="doctor"
//                   defaultValue="selectDoctor"
//                   className="border-[1px] border-green-800 w-full md:w-11/12 h-10 rounded-[5px] mb-[4px]">
//                     <option value="selectDoctor" disabled hidden>Select your doctor</option>
//                     {doctorNames.map((d, i) => (
//                       <option key={i} value={d.name}>{d.name}</option>
//                     ))}
//                 </select>

//                 <Input
//                   label="Date *"
//                   type="date"
//                   placeholder="Select the date for appointment"
//                   className="border-[1px] border-green-800 w-full md:w-11/12 h-10 rounded-[5px] mb-[2px]"
//                   {...register("setDate", { required: true })}
//                   style={{color:'white'}}
//                 />
//               </div>

//               <div className='md:hidden  w-full order-2 md:order-3'>
//                 <p className='text-white'>Available Slots *</p>
//                 <div className='-mx-2 flex flex-wrap h-[90px] overflow-y-scroll admin-scrollbar'>
//                   {slotDetails.map((slot, index) => (
//                     <div key={index} className='m-1 md:m-2 w-auto text-sm bg-white rounded-[5px] p-[1px] px-4 border-[1px] border-green-800'>
//                       {slot.time}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </div>

//             <div className='hidden md:block ml-12 w-full mt-5'>
//               <p className='text-white'>Available Slots *</p>
//               <div className='flex flex-wrap h-[120px] overflow-y-scroll admin-scrollbar'>
//                 {slotDetails.map((slot, index) => (
//                   <div key={index} className='m-2 w-auto text-sm bg-white rounded-[5px] p-[1px] px-4 border-[1px] border-green-800'>
//                     {slot.time}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className='w-full m-4 md:ml-12 flex flex-start'>
//               <Input
//                 type="checkbox"
//                 id="checkbox"
//                 className="mr-2"
//               />
//               <label htmlFor="checkbox" className='mt-6 text-white text-xs md:text-base'>
//                 By checking this box, you agree to our terms and conditions and confirm 
//                 your appointment booking.
//               </label>
//             </div>

//             <div className='flex justify-center my-4'>
//               <CommonButton type='submit' className='bg-white text-green-4 p-2 px-4 w-44 rounded-lg font-medium'>Pay Now</CommonButton>
//             </div>
//           </form>
//         </div>

//         <div className='flex flex-col justify-center items-center my-10 p-6'>
//           <p className='text-green-700 text-3xl mb-10 mt-5 font-semibold'>Know your Doctor</p>
//           <DoctorProfile image={docter} name={"Dr. Ramachandra"} text={"ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు"}/>
//           <DoctorProfile image={docter} name={"Dr. Ramachandra"} text={"ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు"}/>
//           <DoctorProfile image={docter} name={"Dr. Ramachandra"} text={"ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు"}/>
//         </div>
        
//         <div className='flex flex-col justify-center items-center my-10 p-6'>
//           <div className='w-full md:w-5/6'>
//             <div className='my-4 text-center'>
//               <p className='font-semibold text-2xl'>FAQs</p>
//             </div>
//             <div className='w-full mt-4'>
//               <FAQ text={"1. What conditions can Naturopathy help with?"} answer={"Naturopathy can help with chronic conditions like arthritis and digestive disorders, as well as mental health issues such as stress and anxiety, using natural remedies and lifestyle changes. It also supports immune system health, helping with frequent colds and infections."}/>
//               <FAQ text={"2. What can I expect from a Naturopathic consultation?"} answer={"During a naturopathic consultation, you can expect a comprehensive assessment of your health, including a detailed discussion of your medical history, lifestyle, diet, and any symptoms you're experiencing. The naturopath will then develop a personalized treatment plan, which may include dietary recommendations, lifestyle changes, herbal remedies, and other natural therapies tailored to your specific needs."}/>
//               <FAQ text={"3. How long does it take to see results with Naturopathy?"} answer={"The time it takes to see results with naturopathy can vary widely depending on the individual and the condition being treated. Generally, some improvements may be noticed within a few weeks, but more significant or chronic conditions might take several months to show substantial results. Consistency with the recommended lifestyle changes and treatments is key to achieving the best outcomes."}/>
//               <FAQ text={"4. Are Naturopathic treatments evidence-based?"} answer={"Naturopathic treatments can be evidence-based, especially when they incorporate dietary changes, exercise, and certain herbal remedies that have been scientifically studied. However, the extent of evidence varies, and some treatments may rely more on traditional use and practitioner experience rather than rigorous scientific research. It’s important to discuss the evidence supporting specific treatments with your naturopath to make informed decisions."}/>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AppointmentPage;