import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const hour = new Date(20,5,5,2).getHours(); 
let greeting = "";
const cssStyle = { };

if(hour>=1 && hour<12){
  greeting = "Good Morning";
  cssStyle.color = 'Green';
} else if(hour>=12 && hour<19){
   greeting = "Good Afternoon";
   cssStyle.color = 'Orange';
} else {
   greeting = "Good Night";
   cssStyle.color = 'Black';
}


render(
  <>
    <div>
       <h1 style={{}}>Hello sir,<span style={cssStyle}>{greeting}</span></h1>
    </div>
  </>
  ,document.getElementById("root")
);