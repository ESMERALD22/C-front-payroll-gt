import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ paths }) => {
  return (
    <nav >
      <div className="flex justify-between px-8">
        <div className="flex space-x-2">
          {paths.map((path, index) => (
            <div key={index}>
              {index < paths.length - 1 ? (
                <Link to={'http://localhost:5173'+path} >
                  {path}
                </Link>
              ) : (
                <span >{path}</span>
              )}
              {index < paths.length - 1 && <span className="mx-1">{'>'}</span>}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
