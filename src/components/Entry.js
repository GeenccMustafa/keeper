import React from "react";

function Entry(props){
    return (
    <div className="note">
        <h1> {props.title}</h1>
         {props.content}	
    </div>
    )}

export default Entry;