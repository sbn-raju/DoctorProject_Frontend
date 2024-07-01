import React from "react";
import HomeClassCard from "../../../assets/Page Assets/Home/Home Class Card.png";

const ClassCard = () => {
  const openInNewTab = () => {
    window.open('/class');
  };

  return (
    <>
      <div className="hidden md:block">
        <div className="h-[300px] my-10 w-full flex justify-center">
          <div className="shadow-lg relative w-4/5 mt-20 bg-green-3 p-6 lg:p-10 rounded-tl-[400px] rounded-[100px]">
            <div className="flex justify-end">
              <div className="w-3/5 text-right">
                <p className="text-white text-lg lg:text-2xl font-medium mb-4">
                  ప్రకృతే వైద్యుడు<br/>
                  21 days - Naturopathy Workshop
                </p>
                <div className="flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6 mr-2"
                      >
                        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                        <path
                          fillRule="evenodd"
                          d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-white text-xs lg:text-base">Duration: 21 Days</p>
                    </div>
                    <div className="flex items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-6 h-6 mr-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="text-white text-xs lg:text-base">Time: 7:00pm to 8:00pm</p>
                    </div>
                    <div className="flex items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-6 h-6 mr-2"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="text-white text-xs lg:text-base">Telugu తెలుగు</p>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-white text-xs lg:text-base">Fees: 1000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src={HomeClassCard} className="absolute -top-16 left-20 w-48"/>
            <button 
              className="absolute left-24 bottom-10 bg-green-2 px-4 py-1 rounded-tl-full rounded-br-full shadow-md font-medium"
              onClick={() => window.open('/class')}>
                సంప్రదించండి
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="h-auto my-10 w-full flex justify-center">
          <div className="shadow-lg relative w-4/5 mt-20 bg-green-3 p-6 rounded-2xl">
            <div className="flex justify-center mt-10">
              <div className="text-center">
                <p className="text-white text-lg font-medium mb-4">
                  ప్రకృతే వైద్యుడు<br/>
                  21 days - Naturopathy Workshop
                </p>
                <div className="flex justify-end">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6 mr-2"
                      >
                        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                        <path
                          fillRule="evenodd"
                          d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-white text-xs sm:text-base">Duration: 21 Days</p>
                    </div>
                    <div className="flex items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-6 h-6 mr-2"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="text-white text-xs sm:text-base">Time: 7:00pm to 8:00pm</p>
                    </div>
                    <div className="flex items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-6 h-6 mr-2"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p className="text-white text-xs sm:text-base">Telugu తెలుగు</p>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6 mr-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-white text-xs sm:text-base">Fees: 1000</p>
                    </div>
                  </div>
                </div>
                <button 
                  className="mt-2 bg-green-2 px-4 py-1 rounded-tl-full rounded-br-full shadow-md font-medium"
                  onClick={() => window.open('/class')}>
                    సంప్రదించండి
                </button>
              </div>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={HomeClassCard} className="w-36" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCard;
