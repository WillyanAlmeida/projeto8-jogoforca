import forca0 from "./img/forca0.png"

export default function Jogo() {
    return (
        <div className="jogo">
            <div className="imagem-forca">
                <img src={forca0}></img>
            </div>
            <div className="escolher-palavra" >
                <button className="escolher" >Escolher Palavra</button>
            </div>
        </div>
    );
}