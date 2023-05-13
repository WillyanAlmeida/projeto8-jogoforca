import { useState } from 'react';
import Jogo from './Jogo.js';
import Letras from './Letras.js';
import palavras from "./palavras"


export default function App() {
  let [btescolher, setBtescolher]= useState(false)
  let [btstatus, setBtstatus] = useState(true)
  let [clicks, setClicks] = useState(0)
  let [palavra, setPalavra] = useState('');
  let [cont, setCont] = useState(0)
  let [letraclickf, setLetraclickf] = useState([]);


  function iniciarJogo() {
    console.log('iniciarJogo')
    btstatus=false;
    setBtstatus(btstatus)
    palavra=palavras.sort(()=>(Math.random() - 0.5));
    setPalavra(palavra[0])
    setLetraclickf([])
    setClicks(0)
    setCont(0)
    console.log(palavra)

  }


  return (
    <div className="Body">
      <Jogo 
      iniciarJogo={iniciarJogo} 
      btescolher={btescolher}
      clicks={clicks}
      palavra={palavra}
      cont={cont}
      />
      <Letras
      btstatus={btstatus}
      setClicks={setClicks}
      palavra={palavra}
      setCont={setCont}
      letraclickf={letraclickf}
      setLetraclickf={setLetraclickf}
      />
    </div>
  );
}



