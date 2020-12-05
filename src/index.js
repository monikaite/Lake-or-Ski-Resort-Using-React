import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake(){
    return(
        <div>
            <h1>We are going to visit a lake!</h1>
        </div>
    )
}

function Resort(){
    return (
        <div>
            <h1>We are going to a Resort!</h1>
        </div>
    )
}

function App(props){
    if(props.season === "summer"){
        return <Lake/>;
    }
    else if(props.season === "winter"){
        return <Resort/>;
    }
}

ReactDOM.render(
    <App season="summer" />,
    document.getElementById("root")
)