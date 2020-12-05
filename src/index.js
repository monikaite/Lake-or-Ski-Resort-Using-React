import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
    {id: "1", name:"Big", trailhead: "Big"},
    {id: "2", name:"Medium", trailhead: "Medium"},
    {id: "3", name:"Small", trailhead: "Small"}
];

function App({lakes}){
  return(
      <div>
          {lakes.map(lake => <div>
              <h2>{lake.name}</h2>
              <p>Accessed by: {lake.trailhead}</p>
          </div>)}
      </div>
  );
}

ReactDOM.render(
    <App lakes={lakeList}/>,
    document.getElementById("root")
)