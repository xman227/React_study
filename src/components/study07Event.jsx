import React from 'react';

const Study07Event = ()=> {

    const handleChange = (event) =>{
        console.log(event.target.value);
    }


  return (
    <div className="App">
    <input onChange={handleChange}/>
    
    </div>
  );
}

export default Study07Event;
