import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
export const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  let amount = transactions.map((transaction)=>{
    return transaction.amount;
  }).reduce((acc, val)=>{
    return acc+val;
  },0).toFixed(2);
  return (
    <>
        <h4>Your Balance</h4>
        <h1 id="balance">${amount}</h1>
    </>
  )
}
