import { useState } from 'react'
import Formulario from './Formulario.jsx'
import Aula from './Aula.jsx';


function App() {

    let [aulas,setAulas] = useState([]);

    useEffect( () => {
        fetch("http://localhost:4000/aulas")
        .then( respuesta => respuesta.json())
        .then( aulas => setAulas(aulas));
    });

    function addAula({aula}){
        setAulas([...aulas,aula]);
    }

    return (
        <>
            <Formulario/>

            <section>
                {
                    aulas.map( ({id,aula}) => 
                        <Aula key={id} id={id} aula={aula}/>
                    )
                }
            </section>
        </>
    )
}

export default App
