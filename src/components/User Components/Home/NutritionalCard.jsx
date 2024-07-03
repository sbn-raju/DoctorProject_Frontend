import React from "react";
import NutritionalCardImage from "../../../assets/Page Assets/Home/NutritionalProgram.png";

const NutritionalCard = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="h-[400px] my-10 w-full flex justify-center">
          <div className="shadow-lg relative w-4/5 mt-20 bg-green-3 p-10 rounded-tl-[400px] rounded-[100px]">
            <div className="flex justify-end">
              <div className="w-3/5 text-right">
                <p className="text-white text-[40px] font-gurajadaRegular mb-4 mt-10">
                  డా.రామచంద్ర’s    <span className="font-leagueSpartanMedium">Nutritional Program</span> 
                </p>
                <p className="text-white text-[24px] leading-relaxed font-tenaliRamaKrishnaRegular">
                  "మా డైట్ పేజీకి ఒక్క క్లిక్తో మీ ఆరోగ్య లక్ష్యాలను సాధించడానికి మీకు శక్తినిచ్చే డాక్టర్ రామచంద్ర యొక్క పరివర్తన ఆహార ప్రణాళికను కనుగొనండి."
                </p>
              </div>
            </div>
            <img src={NutritionalCardImage} className="absolute -top-16 left-20 w-[250px]" style={{filter: 'drop-shadow(0px 15px 10px rgba(0, 0, 0, 0.25))'}}/>
            <button 
              className="absolute left-24 bottom-10 bg-green-2 px-16 py-3 rounded-tl-full rounded-br-full shadow-md font-gurajadaRegular"
              style={{filter: 'drop-shadow(0px 15px 10px rgba(0, 0, 0, 0.6))'}}
              onClick={() => window.open('/diet')}>
                సంప్రదించండి
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="h-auto my-10 w-full flex justify-center">
          <div className="shadow-lg relative w-4/5 mt-20 bg-green-3 p-10 rounded-2xl">
            <div className="flex justify-end mt-10">
              <div className="text-center">
                <p className="text-white text-base font-medium mb-4">
                  డా.రామచంద్ర’s    Nutritional Program 
                </p>
                <p className="text-white text-sm leading-6">
                  "మా డైట్ పేజీకి ఒక్క క్లిక్తో మీ ఆరోగ్య లక్ష్యాలను సాధించడానికి మీకు శక్తినిచ్చే డాక్టర్ రామచంద్ర యొక్క పరివర్తన ఆహార ప్రణాళికను కనుగొనండి."
                </p>
                <button 
                  className="mt-2 bg-green-2 px-4 py-1 rounded-tl-full rounded-br-full shadow-md font-medium"
                  onClick={() => window.open('/diet')}>
                    సంప్రదించండి
                </button>
              </div>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={NutritionalCardImage} className="w-36" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NutritionalCard;

