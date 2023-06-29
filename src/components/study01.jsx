// style object 사용
// 함수 안에서 자바스크립트 {} 사용


import React from "react";

function Study01(props){

    const style = {
        'span':{},
        'style1':{backgroundColor:'green',color:'yellow'}};

    return (
        <div className="App">
         <div style = {style.style1}>안녕하세요.</div>
        </div>
  );
}

export default Study01;
