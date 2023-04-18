import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Transaction.css"


function Transaction({index}) {
    const [transaction, setTransaction] = useState({})
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`).then((res) => {
            setTransaction(res.data)
        })
    }, [])
  
  return (
    <div className='transaction'>
        <div className='heading'>
        <h2>{transaction.item_name}</h2>
        <h3>{transaction.id}</h3>
        </div>
        <div className='body'>
        <p><strong>Amount: </strong>{transaction.amount}</p>
        <p><strong>Date: </strong>{transaction.date}</p>
        <p><strong>Category: </strong>{transaction.category}</p>
        </div>
    </div>
  )
}

export default Transaction