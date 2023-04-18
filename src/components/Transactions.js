
import "./Transactions.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Transactions() {
    const [transactions, setTransaction] = useState([])


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions`).then((res) => {
            setTransaction(res.data)
        })
    }, [])

    console.log(transactions)

    return (
        <div className='transactions'>
            <section>
                <table>
                    <tbody>
                    {transactions.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td><Link to={`/transactions/${index}`}>{item.item_name}</Link></td>
                            <td>{item.amount}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                

            </section>
        </div>
    )
}

export default Transactions