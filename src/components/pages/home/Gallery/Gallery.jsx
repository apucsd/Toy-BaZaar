import React from "react";

const Gallery = () => {
  return (
    <div className=" lg:px-32 lg:pt-24">
      <h1 className="text-center font-bold text-3xl mb-6">Our Gallery</h1>
      <div className=" flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div
            data-aos="flip-left"
            data-aos-duration="2000"
            className="md:w-1/2 p-1 md:p-2"
          >
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://plus.unsplash.com/premium_photo-1683705132888-8dd65f57f276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVkZHklMjBiZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            />
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="2000"
            className="md:w-1/2 p-1 md:p-2"
          >
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://plus.unsplash.com/premium_photo-1681843744738-4cbf67272cd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
          </div>
          <div
            data-aos="flip-left"
            data-aos-duration="2000"
            className="w-full p-1 md:p-2"
          >
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://plus.unsplash.com/premium_photo-1664373232774-76c137581cc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRlZGR5JTIwYmVhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div
            data-aos="flip-right"
            data-aos-duration="2000"
            className="w-full p-1 md:p-2"
          >
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1608189617989-7914461e9f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlZGR5JTIwYmVhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            />
          </div>
          <div
            data-aos="flip-left"
            data-aos-duration="2000"
            className="w-1/2 p-1 md:p-2"
          >
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1664924520071-f1c1ab17d77f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlcGhhbnRzJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            />
          </div>
          <div
            data-aos="flip-left"
            data-aos-duration="2000"
            className="w-1/2 p-1 md:p-2"
          >
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1548576987-af36a2e04bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvcnNlJTIwdG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
