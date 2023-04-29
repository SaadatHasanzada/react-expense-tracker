import React from 'react'
import './App.css'
import Balance from './Components/Balance'
import History from './Components/History'
import Transaction from './Components/Transaction'

function App() {

  const [transArray, setTransArray] = React.useState([{
    text:"salary",
    amount:"600",
    id:1
  },
 { text:"Azerishiq",
  amount:"-45",
  id:2
}])
function add(value){
setTransArray((prev)=>{
return [...prev,value];
}
)

}

let income=0;
let expence=0;

transArray.map((obj)=>{
if(+obj.amount>0){
 return income+= +obj.amount
}
else{
  return expence+= +obj.amount
}
})


function deleteItem(id){
 const newArr= transArray.filter((el)=>{
return el.id!==id
  })
setTransArray(newArr);
}

  return (
    <div className='container'>
      <h2 className='tracker--heading'>Expense Tracker</h2>
    <Balance income={income} expence={expence} />
       <History transArray={transArray} deleteItem={deleteItem}/>
       <Transaction handleClick={add}/>
    </div>
  )
}

export default App
