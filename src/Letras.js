import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let cont=0;


export default function Letras({btstatus, setClicks, palavra, setCont, letraclickf, setLetraclickf, clicks, setClasspalavra, mpalavra, setPalavra}) {
 
  


  return (
    <div className="containerLetras">
      {alfabeto.map((x) => <Letra key={x} letra={x} btstatus={btstatus} letraclickf={letraclickf} setLetraclickf={setLetraclickf} setClicks={setClicks} palavra={palavra} setCont={setCont} clicks={clicks} setClasspalavra={setClasspalavra} mpalavra={mpalavra} setPalavra={setPalavra}/>)}

    </div>
  );

}

function Letra({setLetraclickf, letraclickf, btstatus, letra, setClicks, clicks, palavra, setCont, setClasspalavra, setPalavra, mpalavra}) {
  

 

  function letraclick(indice) {
    indice = indice.target.innerHTML

    letraclickf.push(indice)
    setLetraclickf([...letraclickf])
    console.log(letraclickf)
    setClicks(letraclickf.length)
    
    palavra = mpalavra.map((y)=> letraclickf.includes(y)?`${y} `:'_ ')
    setPalavra(palavra)
    console.log(palavra)
    
    if(mpalavra.includes(indice)){
      cont++;
     setCont(cont);
    }
    if((clicks-cont)===5){
      setLetraclickf([...alfabeto])
      setClasspalavra('lose')
      mpalavra=mpalavra.map((y)=>`${y} `)
      setPalavra([...mpalavra])
    }
    if(palavra.includes('_ ')){
      
    }else{setLetraclickf([...alfabeto])
      setClasspalavra('win')}

    }
  let a =letraclickf.includes(letra);


  return (
    <button  disabled={btstatus || a} className={btstatus || a ? 'btdesativado' : 'btativado'} onClick={letraclick}>{letra}</button>
  )
}
