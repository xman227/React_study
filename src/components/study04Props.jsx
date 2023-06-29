import React from "react";

//함수명이 Welcome인 컴포넌트를 작성합니다.
function Welcome(props) {
    
    return <h2>안녕,님!</h2>;
}

//컴포넌트를 호출하여 element에 저장합니다.
const element = ()=> {
    return (<div>
    <span>Test</span>
    <Welcome character="행복한">성민</Welcome>
    </div>)
    }

export default element;
