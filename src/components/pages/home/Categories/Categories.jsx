import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Categories = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://toy-bazaar-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold lato my-2">Shop by category: </h2>
      <Tabs defaultIndex={1}>
        <TabList className="flex space-x-4 items-center justify-center tabs myBg tabs-boxed p-2 text-white">
          <Tab selectedClassName="">All Categories</Tab>
          <Tab selectedClassName="  ">Bears</Tab>
          <Tab selectedClassName=" ">Horses</Tab>
          <Tab selectedClassName=" ">Elephants</Tab>
        </TabList>
        <hr />

        <TabPanel>
          <div></div>
        </TabPanel>
        <TabPanel>
          <p>Content for Tab 2</p>
        </TabPanel>
        <TabPanel>
          <p>Content for Tab 3</p>
        </TabPanel>
        <TabPanel>
          <p>Content for Tab 3</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
