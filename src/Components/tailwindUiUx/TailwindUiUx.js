import React from 'react';
import LeftSite from "../tailwindUiUx/LeftSite/LeftSite";
import { Outlet } from 'react-router-dom';
import SosalIcon from './SosalIcon/SosalIcon';

const tailwindUiUx = () => {
  return (
    <div className='w-[100%] h-[100vh] flex'>

      <SosalIcon></SosalIcon>
      
      <LeftSite></LeftSite>

      <Outlet></Outlet>
    </div>
  );
};

export default tailwindUiUx;