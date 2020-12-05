import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = ["Big Lake", "Medium Lake", "Small Lake"];

function App(props){
  return(
      <ul>
          {props.lakes.map(lake => <li>{lake}</li>)}
      </ul>
  );
}

ReactDOM.render(
    <App lakes={lakeList}/>,
    document.getElementById("root")
)