/* eslint-disable react/prop-types */
import React from 'react'

const Balance = ({income,expence}) => {

expence*=-1;
const balance=(income-expence).toFixed(2);

  return (
    <div className='balance--container'> 
    <h3>Your balance</h3>
    <span className='balance'>${balance}</span>
    <div className="balance--tracking">
      <div className="income--container">
        <p >INCOME</p>
        <span className='income'>${income.toFixed(2)}</span>
      </div>
      <div className="expence--container">
        <p>EXPENCE</p>
        <span className='expence'>${expence.toFixed(2)}</span>
      </div>
    </div>
    </div>
  )
}

export default Balance