/* eslint-disable react/prop-types */
import React from "react";

const GalleryCard = ({ sGallery }) => {
  return (
    <div className=" bg-slate-100 border hover:translate-x-1">
      <figure>
        <img className="h-[200px] w-full" src={sGallery.image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{sGallery.name}</h2>
      </div>
    </div>
  );
};

export default GalleryCard;
