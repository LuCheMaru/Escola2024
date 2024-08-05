import { useState } from 'react'

export default function Contador() {
    const [contador, setContador] = useState(0)
    const [textoBotao, setTextoBotao] = useState('Pato')

    function handleClick(){
        setContador((anterior) =>(
          anterior + 1
        ))
        console.log(contador)
        setTextoBotao(textoBotao === "Ganso" ? "Pato" : "Ganso")
    }

    return (
        <>
            <p>{contador}</p>
            <button  onClick={handleClick}>{textoBotao}</button>
        </>
    )
}