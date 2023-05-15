import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



export default function Letras({ btstatus, setClicks, palavra, setCont, letraclickf, setLetraclickf, clicks, setClasspalavra, mpalavra, setPalavra, cont }) {




  return (
    <div className="containerLetras">
      {alfabeto.map((x) => <Letra key={x} letra={x} btstatus={btstatus} letraclickf={letraclickf} setLetraclickf={setLetraclickf} setClicks={setClicks} palavra={palavra} setCont={setCont} clicks={clicks} setClasspalavra={setClasspalavra} mpalavra={mpalavra} setPalavra={setPalavra} cont={cont} />)}

    </div>
  );

}

function Letra({ setLetraclickf, letraclickf, btstatus, letra, setClicks, clicks, palavra, setCont, cont, setClasspalavra, setPalavra, mpalavra, setMpalavra }) {




  function letraclick(indice) {
   
    indice = indice.target.innerHTML

    letraclickf.push(indice)
    setLetraclickf([...letraclickf])
    console.log(letraclickf)
    setClicks(letraclickf.length)

    if (mpalavra.includes(indice)) {
      cont++;
      setCont(cont);
    }
    palavra = mpalavra.map((y) => letraclickf.includes(y) ? `${y} ` : '_')
    

    console.log(palavra)
    setPalavra(palavra)
    if (palavra.includes('_')) {
      
      palavra = mpalavra.map((y) => letraclickf.includes(y) ? `${y} ` : '_ ')
      setPalavra(palavra)
    } else {
      setClasspalavra('win')
      palavra = mpalavra.map((y) => letraclickf.includes(y) ? `${y} ` : '_ ')
      setPalavra([...palavra])
      setLetraclickf([...alfabeto])
      
      console.log('win')
    }


    if ((clicks - cont) === 5) {
      setLetraclickf([...alfabeto])
      setClasspalavra('lose')
      mpalavra = mpalavra.map((y) => `${y} `)
      setPalavra([...mpalavra])


    }



  }
  let a = letraclickf.includes(letra);


  return (
    <button disabled={btstatus || a} className={btstatus || a ? 'btdesativado' : 'btativado'} onClick={letraclick}>{letra}</button>
  )
}
