import React, { useState } from 'react';
import './App.css';
import ApiData from './ApiData';
import MenuCard from './Component/MenuCard';
import NavBar from './Component/NavBar';

const uniqueList = [...new Set(ApiData.map((item) => {
  return item.category;
})), "all"]

function App() {
  const [menuData, setmenuData] = useState(ApiData);

  const filterItem = (category) => {
    if (category === "all") {
      setmenuData(ApiData);
      return;
    }

    const updateList = ApiData.filter((item) => {
      return item.category === category;
    });

    setmenuData(updateList);
  }


  return (
    <div>
      <NavBar menuList={uniqueList} filterItem={filterItem} />
      <MenuCard items={menuData} />
    </div>
  )

}

export default App;
