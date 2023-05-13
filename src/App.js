import { useState } from 'react';
import Jogo from './Jogo.js';
import Letras from './Letras.js';


export default function App() {
  let [btescolher, setBtescolher]= useState(false)
  let [btstatus, setBtstatus] = useState(true)
  let [clicks, setClicks] = useState(0)
  let [palavra, setPalavra] = useState('');


  function iniciarJogo() {
    console.log('iniciarJogo')
    btstatus=false;
    console.log(btstatus)
    setBtstatus(btstatus)
  }


  return (
    <div className="Body">
      <Jogo 
      iniciarJogo={iniciarJogo} 
      btescolher={btescolher}
      clicks={clicks}
      />
      <Letras
      btstatus={btstatus}
      setClicks={setClicks}
      />
    </div>
  );
}



