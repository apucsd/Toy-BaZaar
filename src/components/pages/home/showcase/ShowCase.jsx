import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const Gallery = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("https://toy-bazaar-server.vercel.app/toys");
      const data = await response.json();
      setToys(data.slice(0, 10));
    };
    loadData();
  }, []);
  // console.log(toys);
  return (
    <div className="my-12  md:p-6">
      <Marquee>
        {toys.map((toy) => (
          <div key={toy._id}>
            <img
              className="md:w-96 md:h-80 h-32 w-full"
              src={toy.imgURL}
              alt=""
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Gallery;
