/* eslint-disable react/prop-types */
import React from 'react'

const Transaction = (props) => {

  const[formData,setFormData]=React.useState({
    text:"",
    amount:"",
    id:""
  })
  function handleChange(e){
    const {name,value}=e.target;
    setFormData((prev)=>{
return {
  ...prev,
  [name]:value,
  id:Math.floor(Math.random()*1000)
}
    })
  }
  console.log(formData)
function submitData(e){
e.preventDefault();
if(formData.text.length!==0 && formData.amount.length!==0 ){
  props.handleClick(formData)
setFormData({
  text:"",
  amount:""
})
}
else{
  alert("Please fill all inputs")
}

}


  return (
    <div className='transaction--container'>
      <h3>Add new transaction</h3>
<form onSubmit={submitData} className="transaction--form">
  <label htmlFor="text">Text</label>
  <input type="text" id='text' placeholder='Enter text...' onChange={handleChange} value={formData.text} name="text" />
  <label htmlFor="amount">Amount
  <p>(negative-expence, positive-income)</p>
  </label>
  <input type="text" id='amount' placeholder='Enter amount...'  onChange={handleChange} value={formData.amount} name="amount" />
  <button type='submit'>Add transaction</button>
</form>
    </div>
  )
}

export default Transaction