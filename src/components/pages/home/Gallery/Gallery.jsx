import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const Gallery = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toy-bazaar-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="my-12 bg-slate-100 md:p-12">
      <Marquee>
        {toys.map((toy) => (
          <div key={toy._id}>
            <img className="w-96 h-96" src={toy.imgURL} alt="" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Gallery;
