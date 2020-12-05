import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake({name}){
    return(
        <div>
            <h1>We are going to visit {name}!</h1>
        </div>
    )
}

function Resort({name}){
    return (
        <div>
            <h1>We are going to a {name}!</h1>
        </div>
    )
}

function App(props){
    return(
      <div>
          {(props.season === "summer") ? <Lake name="Timahoe Lake"/> : <Resort name="Ski Resort"/>},
      </div>
    );
}

ReactDOM.render(
    <App season="summer" />,
    document.getElementById("root")
)