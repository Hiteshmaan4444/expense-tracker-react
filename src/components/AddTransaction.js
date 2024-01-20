import React, { useContext } from 'react'
import { useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const textHandler = (e)=>{
        setText(e.target.value);
    }
    const {addTransaction, transactions} = useContext(GlobalContext);
  return (
    <> 
        <h3>Add new transaction</h3>
        <form onSubmit= {(e)=>{e.preventDefault(); addTransaction({id: transactions.length+1, text, amount: +amount})}} >
            <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={textHandler} placeholder="Enter text..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount">Amount <br />
                (negative - expense, positive - income)</label>
            <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount..." />
            </div>
            <button className="btn" >Add transaction</button>
        </form>
    </>
  )
}
