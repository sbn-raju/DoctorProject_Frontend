import React from "react";
import posterImage from "../../assets/Page Assets/Home/serviceImg.png";
import ClassCard from "../../components/User Components/Home/ClassCard";
import AppointmentCards from "../../components/User Components/Home/AppointmentCards";
import { CardsHolder } from "../../components/User Components/Services/CardsHolder";


const ServicesPage = () => {
  return (
    <>
      {/* Poster */}
      <div className="bg-white">
        <div className='p-4 md:p-20 w-full flex flex-col md:flex-row justify-around items-center'>
          <div className='w-full text-center md:w-1/2 md:text-start mb-10 md:my-0 pl-4'>
            <h2 className="text-2xl font-bold text-green-4 mb-6">
              మా సేవలు
            </h2>
            <p className='text-base md:text-lg w-full'>
              ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు
              వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే
              ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ,
              లేపనాలు కానీ ఏమీ వుండవు. ఈ ట్రీట్మెంట్స్ మందుల్లేకుండా జబ్బులు
              తగ్గించడానికి ఉపయోగపడతాయి. ఈ వైద్య విధానంలో ట్రీట్మెంట్స్ –
              వాటర్ థెరపీ, ఫాస్టింగ్ థెరపీ, డైట్ థెరపీ, యోగా థెరపీ, మసాజ్
              థెరపీ, మడ్ థెరపీ, సన్ లైట్ థెరపీ మొదలగు థెరపీలు వుంటాయి.
            </p>
          </div>
          <div className='w-full md:w-1/2 flex justify-center'>
            <img src={posterImage} className='w-[200px] md:w-[500px]' />
          </div>
        </div>

        {/* Card Holders */}
        <CardsHolder />

        {/* Card of Appointment Booking */}
        <AppointmentCards />
        <div className="mt-10"></div>
      </div>

      {/* Card of Appointment */}
      <div className="mt-20">
        <ClassCard />
      </div>
    </>
  );
};

export default ServicesPage;
