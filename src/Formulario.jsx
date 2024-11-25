import { useState } from 'react'
import { addAula } from '../../back/db';


function Formulario(){

    let [texto,setTexto] = useState("add aula");

    return (
        <form
            onSubmit={ event => {
                event.preventDefault();
                fetch("http://localhost:4000",
                    {
                        method : "POST",
                        body : JSON.stringify({ nombre : texto }),
                        headers : {
                            "Content-type" : "application/json"
                        }
                    }
                )
                .then( respuesta => respuesta.json())
                .then( respuesta => {
                    addAula({ id, nombre : texto })
                })
            }}
        >
            <input type="text" value={texto}
                onChange={ event => { setTexto(event.target.value )}}
            />
            <input type="submit" defaultValue="añadir"/>
        </form>
    )
}

export default Formulario