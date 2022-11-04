import React from 'react';

const Banner = () => {
  return (
    <div className="relative ">
      <img
        src="https://www.familyvacationcritic.com/wp-content/uploads/sites/19/2015/07/AriaSky.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        className="h-[300px] sm:h-[400px] lg:h-[400px] w-full xl:[600px] 2xl:h-[700px]"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-brown-600">Not Sure to Go?</p>
        <button
          className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full my-3
         hover:shadow-xl active:scale-90 duration:150">
          I m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
