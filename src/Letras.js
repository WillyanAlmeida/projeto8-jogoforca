import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



export default function Letras({btstatus, setClicks}) {
 
  let [letraclickf, setLetraclickf] = useState([]);


  return (
    <div className="containerLetras">
      {alfabeto.map((x) => <Letra key={x} letra={x} btstatus={btstatus} letraclickf={letraclickf} setLetraclickf={setLetraclickf} setClicks={setClicks}/>)}

    </div>
  );

}

function Letra({setLetraclickf, letraclickf, btstatus, letra, setClicks}) {
  

 

  function letraclick(indice) {
    indice = indice.target.innerHTML

    letraclickf.push(indice)
    setLetraclickf([...letraclickf])
    console.log(letraclickf)
    setClicks(letraclickf.length)
 
    

  }
  let a =letraclickf.includes(letra);


  return (
    <button  disabled={btstatus || a} className={btstatus || a ? 'btdesativado' : 'btativado'} onClick={letraclick}>{letra}</button>
  )
}
