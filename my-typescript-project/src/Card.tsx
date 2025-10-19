import React from "react";

const Cards = (props:{name:string,age: number,mobilenumber: number}) => {
    const { name, age, mobilenumber} = props;
    return(
        <div className="App">
          <h1>Name : {name}</h1>
          <h2>Age : {age}</h2>
          <h3>Mobilenumber : {mobilenumber}</h3>
        </div>
    )
}

export default Cards;