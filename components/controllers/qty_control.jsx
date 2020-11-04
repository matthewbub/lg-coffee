import React, { useState } from 'react';

const QtyControl = (props) => {
  

  const [count, setCount] = useState(0);
  const handleCount = (operator) => {
    if (operator === "+") return setCount(count + 1)
    else {
      if (count === 0) return
      setCount(count - 1)      
    }
    
  }

  const handleSubmit = () => {
    //post req
    console.log(count)

  }

  return (
    <div className="d-flex flex-column">
      <div className="btn-group">
        <button className="btn btn-outline-dark p-1 pr-3 pl-3" style={{height: 'fit-content'}} onClick={() => handleCount("-")}>-</button>
        <p className="d-flex pr-3 pl-3" style={{height: 'fit-content'}}>{count}</p>
        <button className="btn btn-outline-dark p-1 pr-3 pl-3" style={{height: 'fit-content'}} onClick={() => handleCount("+")}>+</button>      
      </div>
      <button className="btn btn-outline-dark" onClick={handleSubmit}>Add To Cart</button> 
    </div>
  );
}

export { QtyControl }