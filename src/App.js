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
  let [classpalavra, setClasspalavra] = useState('palavraforca')
  let [mpalavra, setMpalavra] = useState('')


  function iniciarJogo() {
    console.log('iniciarJogo')
    btstatus=false;
    setBtstatus(btstatus)
    palavra=palavras.sort(()=>(Math.random() - 0.5));
    palavra=palavra[0]
    
    palavra=palavra.split('')
    
    setMpalavra([...palavra])
    console.log(palavra)
    palavra = palavra.map((y)=> letraclickf.includes(y)?y:'_ ')
    setPalavra(palavra)
    
    setLetraclickf([])
    setClicks(0)
    setCont(0)
    console.log(palavra)
    console.log(mpalavra)

  }


  return (
    <div className="Body">
      <Jogo 
      iniciarJogo={iniciarJogo} 
      btescolher={btescolher}
      clicks={clicks}
      palavra={palavra}
      cont={cont}
      classpalavra={classpalavra}
      />
      <Letras
      btstatus={btstatus}
      mpalavra={mpalavra}
      clicks={clicks}
      setClicks={setClicks}
      palavra={palavra}
      setCont={setCont}
      letraclickf={letraclickf}
      setLetraclickf={setLetraclickf}
      setClasspalavra={setClasspalavra}
      setPalavra={setPalavra}
      />
    </div>
  );
}



