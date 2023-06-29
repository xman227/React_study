import React, {useState} from 'react';


function App() {
    const [count, setCount] = useState(0);



  return (
    <div className="App">
    <span>{count}회 클릭하였습니다.</span>
    <button onClick={
        () =>setCount((current) => current + 1)
            }>버튼</button>
    </div>
  );
}

export default App;
