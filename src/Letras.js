import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras() {
    return (
      <div className="containerLetras">
        {alfabeto.map((x) => <Letra key={x} letras={x} />)}
           
      </div>
    );
  }

  function Letra(props){
    const letra = props.letras;
    let [btletra, setBtletra]= useState('letras')
    return(
        <button className={btletra}>{letra}</button>
    )
  }