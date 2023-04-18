import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Transaction from '../components/Transaction';

function Show() {

  const {index} = useParams();

  return (
    <Transaction index={index} />
  )
}

export default Show