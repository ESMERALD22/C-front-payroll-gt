import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PayRollCompany from '../../../components/PayRollCompany';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

export const PayRoll = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">BIENVENIDO A NÓMINAS</h1>
        <Button> Nuevo </Button>
      </div>
      <PayRollCompany />
    </Layout>
  );
};

export default PayRoll;
