import React, { useState, useEffect } from 'react';
import SlidBar from './SlideBar';
import Breadcrumbs from './Breadcrumbs';
import { Separator } from './ui/separator';
import { authService } from '../services/auth-services'; 

const Layout = ({ children }) => {
  const [selectedPaths, setSelectedPaths] = useState([]);
  const [rol, setRol] = useState('');

  useEffect(() => {
    const rolGuardado = sessionStorage.getItem('role')
    setRol(rolGuardado);
  }, []); 
  const handlePathChange = (paths) => {
    setSelectedPaths(paths);
  };

  return (
    <>
      <div className="flex flex-col h-screen px-24 py-16">
        <div className="flex h-full mt-16">
          <div className="w-200px ">
            <SlidBar role={rol} onPathChange={handlePathChange} />
          </div>
          <div className="flex-1 p-8 bg-gray-200" style={{ marginLeft: '20px' }}>
            <Breadcrumbs paths={selectedPaths} />
            <Separator />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
