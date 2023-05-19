import React from "react";
import Marquee from "react-fast-marquee";
const Sponsors = () => {
  return (
    <div className="text-center">
      <h1 className=" text-4xl font-semibold my-8 ">Our top rated sponsors</h1>
      <hr className="border-b-2 my-4 md:w-1/2 mx-auto" />

      <div>
        <Marquee>
          <img
            className="w-40 h-49"
            src="https://static.vecteezy.com/system/resources/previews/010/165/394/original/rpl-letter-technology-logo-design-on-white-background-rpl-creative-initials-letter-it-logo-concept-rpl-letter-design-vector.jpg"
          />
          <img
            className="w-40 h-49"
            src="https://static.vecteezy.com/system/resources/previews/013/360/484/original/rfl-letter-logo-design-in-illustrator-logo-calligraphy-designs-for-logo-poster-invitation-etc-free-vector.jpg"
            alt=""
          />
          <img
            className="w-40 h-49 mx-8"
            src="https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg?size=626&ext=jpg&ga=GA1.2.1678409348.1676707273&semt=ais"
            alt=""
          />
          <img
            className="w-40 h-49"
            src="https://seeklogo.com/images/R/rfl-logo-06966DE099-seeklogo.com.png"
            alt=""
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsors;
