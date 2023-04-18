import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./TransactionEditForm.css"


function TransactionEditForm() {
    let { index } = useParams();

  const [transaction, setTransaction] = useState({
    id: "",
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

 let navigate = useNavigate();

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };



 useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`).then((res) => {
       setTransaction(res.data)
      console.log(res)
    })
}, [])
    // .catch((error)=>{
    //   console.log(error);
    // }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API_name}/transactions/${index}`, transaction)
    .then((res)=>{
      setTransaction(res.data);
      navigate(`/transactions/${index}`)
    })
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={transaction.item_name}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="text"
          name="category"
          value={transaction.amount}
          onChange={handleTextChange}
          required 
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          type="text"
          onChange={handleTextChange}
          checked={transaction.from}
          placeholder="food, entertainment, ..."
        />
        <br />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default TransactionEditForm

