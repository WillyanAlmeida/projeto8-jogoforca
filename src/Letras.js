import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let cont=0;


export default function Letras({btstatus, setClicks, palavra, setCont, letraclickf, setLetraclickf}) {
 
  


  return (
    <div className="containerLetras">
      {alfabeto.map((x) => <Letra key={x} letra={x} btstatus={btstatus} letraclickf={letraclickf} setLetraclickf={setLetraclickf} setClicks={setClicks} palavra={palavra} setCont={setCont}/>)}

    </div>
  );

}

function Letra({setLetraclickf, letraclickf, btstatus, letra, setClicks, palavra, setCont}) {
  

 

  function letraclick(indice) {
    indice = indice.target.innerHTML

    letraclickf.push(indice)
    setLetraclickf([...letraclickf])
    console.log(letraclickf)
    setClicks(letraclickf.length)
    if(palavra.includes(indice)){
      cont++;
     setCont(cont);
    }

    }
  let a =letraclickf.includes(letra);


  return (
    <button  disabled={btstatus || a} className={btstatus || a ? 'btdesativado' : 'btativado'} onClick={letraclick}>{letra}</button>
  )
}
