import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 기존의 컴포넌트
//import App from './App';

// 스터디 내용
//import Study01 from './components/study01';
//import Study02 from './components/Study02';
//import Study03SetInterval from './components/study03SetInterval';
//import Study02 from './components/Study02';
//import Study06State from './components/study06State';
import Study04Props from './components/study04Props';


import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Study04Props />
  </React.StrictMode>
);


//study03을 렌더링할때

// setInterval(()=> {
//   root.render(
//     <React.StrictMode>
//       <Study03SetInterval />
//     </React.StrictMode>
//   );
// },
// 1000)





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
