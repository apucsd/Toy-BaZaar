import React, { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);
  console.log(gallery);
  return (
    <div className="my-12 bg-slate-100 p-12">
      <h1 className="text-4xl md:text-5xl text-center font-bold">
        Our Gallery
      </h1>
      <div className="flex flex-wrap justify-center my-12">
        {gallery.map((sGallery) => (
          <GalleryCard key={sGallery.id} sGallery={sGallery}></GalleryCard>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
