import React from "react";
export const Card = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-4 w-[320px] h-[499px]">
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-72 h-72 rounded-lg mb-6"
            src="image-qr-code.png"
            alt="QR Code"
          />
          <div className="flex flex-col items-center justify-center w-[250px]">
            <h1 className="text-slate-900 leading-tight text-xl text-center font-bold mb-4">
              Improve your front-end skills by building projects
            </h1>
            <p className="text-slate-500  text-center text-sm">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
