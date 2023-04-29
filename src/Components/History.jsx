/* eslint-disable react/prop-types */
import React from 'react'

const History = (props) => {
 const[hoverElementid,setHoverElementid]=React.useState(null)
 function handleHover(id){
  setHoverElementid(id)
}


  const element=props.transArray.map((obj)=>{
   
    const styles={
      borderRight:`5px solid ${+obj.amount>0 ? "rgb(17, 167, 17)" : "rgb(227, 20, 20)"}`
    }
    return (
      // eslint-disable-next-line react/jsx-key
      <div  className="item--info"  onMouseEnter={()=>{handleHover(obj.id)}} onMouseLeave={()=>setHoverElementid(null)}>
    {hoverElementid==obj.id &&   <div className="deleteItem" onClick={()=>{props.deleteItem(obj.id)}} ><i className="fa-solid fa-x" style={{color:"#ffffff"}}></i></div>} 
        <div className="item" style={styles} >
                   <span className='item--text'>{obj.text}</span>
          <span className='item--amount'>{+obj.amount>0 ? "+" : ""}{obj.amount}</span>
        </div>
 
        </div>
    )
  })
  return (
    <div className='history--container'>
      <h3 className='history--heading'>History</h3>
      <div className="history--container_items">
       
          {element}
     
        
      </div>
    </div>
  )
}

export default History