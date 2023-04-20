
import "./Transactions.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Transactions() {
    const [transactions, setTransaction] = useState([]);
  //  const [total, setTotal] = useState(0);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions`).then((res) => {
            setTransaction(res.data)
        })
    }, [])
    
    let total = () => {
        let sum = 0;
        for (let e of transactions){
           sum+= Number(e.amount)
        }
        return sum
    }
    

    console.log(total())
   
    return (
        <div className='transactions'>
            <section>
                <table>
                    <tbody>
                    {transactions ? transactions.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td><Link to={`/transactions/${index}`}>{item.item_name}</Link></td>
                            <td>{item.amount}</td>
                        </tr>
                    )): null}
                    </tbody>
                </table>
            </section>
            <div className="total">
                <h1 className="total">Total: ${total()}</h1> 
            </div>
        </div>
    )
                    
}

export default Transactions