import React from "react";
export const Card = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-4 w-96 h-96">
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-72 h-72 rounded-lg mb-6"
            src="image-qr-code.png"
            alt="QR Code"
          />
        </div>
        <h1 className="text-center text-xl text-center font-bold">
          Improve your front-end skills by building projects
        </h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </>
  );
};
