import React , {useState} from 'react';

function App() {
    const [person, setPerson] = useState({
    name: "김민수",
    school: "엘리스대학교"
});

    const handleValue = (event) => {
        const {name, value } = event.target;
        setPerson((person)=>{
            const newPerson = {...person};
            newPerson[name] = value;
            return newPerson
        })
    }

    const handleClick = ()=>{
        alert(`${person.name} 님은 ${person.school}에 다님`)
    }

  return (
    <div className="App">
    <input name = 'name' onChange={handleValue}/>
    <input name = 'school' onChange={handleValue}/>
    <button onClick={handleClick}>버튼</button>
    </div>
  );
}

export default App;
