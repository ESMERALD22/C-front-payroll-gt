import React from 'react';
import Layout from "@/components/Layout";

export const Dashboard = () => {
  // Obtener el rol y el nombre de la compañía del sessionStorage
  const rol = sessionStorage.getItem('role');
  const name_company = sessionStorage.getItem('company_name');

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl mb-4">Bienvenido</h1>
        {name_company && (
          <h2 className="text-xl mb-2">Compañía: {name_company}</h2>
        )}
        {rol && (
          <h2 className="text-xl">Rol: {rol}</h2>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
