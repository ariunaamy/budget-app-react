import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Transaction.css"
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function Transaction() {
    const [transaction, setTransaction] = useState({})
    let { index } = useParams();
    let navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`).then((res) => {
            setTransaction(res.data)
        })
    }, [])

    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/transactions/${index}`).then((res) => {
            navigate("/transactions")
        })
    }


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
          <div className='buttons'>
              <button><Link to="/transactions">Back</Link></button>
              <button><Link to={`/transactions/${index}/edit`}>Edit</Link></button>
              <button onClick={handleDelete}>Delete</button>
          </div>
    </div>
  )
}

export default Transaction