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
          {props.season === "summer" ? (
              <Lake name="Timahoe Lake"/>
              ) : props.season === "winter" ? (
              <Resort name="Ski Resort"/>
              ) : (
              <h1>Come back during Summer, or Winter.</h1>
              )
          },
      </div>
    );
}

ReactDOM.render(
    <App season="autumn" />,
    document.getElementById("root")
)