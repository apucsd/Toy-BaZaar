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
      <h2 className="text-2xl font-bold lato my-2">Shop by category: </h2>
      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <TabList className="flex space-x-4 items-center justify-center tabs myBg tabs-boxed p-2 text-white">
          <Tab selectedClassName="">All Categories</Tab>
          <Tab selectedClassName="  ">Bears</Tab>
          <Tab selectedClassName=" ">Horses</Tab>
          <Tab selectedClassName=" ">Elephants</Tab>
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
