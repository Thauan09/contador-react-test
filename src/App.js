import { useState } from "react"

export default function App() {

    const [numero, setNumero] = useState(0)


    function aumentar() {
        setNumero(numero + 1)
        console.log(numero)
    }

    function diminuir() {
        setNumero(numero - 1)
        console.log(numero)
    }

    return <section>
        <h1>Contador</h1>
        <p>{numero}</p>
        <button onClick={diminuir}>menos</button>
        <button onClick={aumentar}>mais</button>
    </section>
}