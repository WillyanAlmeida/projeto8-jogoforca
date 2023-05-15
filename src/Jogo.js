import { useState } from "react"
import forca0 from "./img/forca0.png"
import forca1 from "./img/forca1.png"
import forca2 from "./img/forca2.png"
import forca3 from "./img/forca3.png"
import forca4 from "./img/forca4.png"
import forca5 from "./img/forca5.png"
import forca6 from "./img/forca6.png"
import palavras from "./palavras"


let cont = 0;
let erro = 0;

let i=0

export default function Jogo({iniciarJogo, btescolher, clicks, palavra, cont, classpalavra}) {
    const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
   
    return (
        <div className="jogo">
            <div className="imagem-forca">
                <img src={forca[clicks-cont]}></img>
            </div>
            <div className="direita">
                <div className="escolher-palavra" >
                    <button className="escolher" disabled={btescolher} onClick={iniciarJogo} >Escolher Palavra</button>
                </div>
                <div >
                    <div>
                    <span className={classpalavra}>{palavra}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
