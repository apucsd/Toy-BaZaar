import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import ProductCard from "./ProductCard";

const Categories = () => {
  const [toys, setToys] = useState([]);
  const [bearsToys, setBearsToys] = useState([]);
  const [horses, setHorses] = useState([]);
  const [elephants, setElephants] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabSelect = (index) => {
    setActiveTab(index);
    if (index == 1) {
      const remaining = toys.filter((toy) => toy.category.value == "Bears");
      setBearsToys(remaining);
    }
    if (index == 2) {
      const remaining = toys.filter((toy) => toy.category.value == "Horses");
      setHorses(remaining);
    }
    if (index == 3) {
      const remaining = toys.filter((toy) => toy.category.value == "Elephants");
      setElephants(remaining);
    }
  };

  useEffect(() => {
    fetch("https://toy-bazaar-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div className="my-12">
      <div className="text-center">
        <h2 className="text-5xl font-bold  uppercase lato my-4 border-s-4 p-2 border-blue-400">
          Popular In Store Shop
        </h2>
        <p className="lato my-3">Toys & Games Store goodies for your kids.</p>
      </div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <TabList className="flex uppercase space-x-4 items-center justify-center tabs tabs-boxed p-2 bg-transparent">
          <Tab selectedClassName="text-white w-full text-center bg-[#2BB24C] border border-gray-400 text-sm  px-4 cursor-pointer">
            All Categories
          </Tab>
          <Tab
            selectedClassName="!border-[#2BB24C] text-white w-full text-center bg-[#2BB24C] border border-gray-400 text-sm cursor-pointer"
            className="!py-1.5 !px-4 !border-[#2BB24C] cursor-pointer"
          >
            Bears
          </Tab>
          <Tab selectedClassName="text-white w-full text-center bg-[#2BB24C] border border-gray-400 text-sm py-3 px-4 cursor-pointer ">
            Horses
          </Tab>
          <Tab selectedClassName="text-white w-full text-center bg-[#2BB24C] border border-gray-400 text-sm py-3 px-4 cursor-pointer ">
            Elephants
          </Tab>
        </TabList>
        <hr />

        <TabPanel>
          <div className="grid md:grid-cols-5 gap-2">
            {toys.map((toy) => (
              <ProductCard key={toy._id} toy={toy}></ProductCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-5 gap-2">
            {bearsToys.map((toy) => (
              <ProductCard key={toy._id} toy={toy}></ProductCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-5 gap-2">
            {horses.map((toy) => (
              <ProductCard key={toy._id} toy={toy}></ProductCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-5 gap-2">
            {elephants.map((toy) => (
              <ProductCard key={toy._id} toy={toy}></ProductCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
