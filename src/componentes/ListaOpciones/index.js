import "./ListaOpciones.css"
const ListaOpciones = (props) => {
    //usar metodo Map -> arreglo.map((equipo, index )=> {      })
   const equipos = [
    "Programacion",
    "Frond End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Movìl",
    "Invovaciòn y Gestión"
   ]
   const manejarCambio=(e)=>{
    props.actualizarEquipo(e.target.value)
   }
   return <div className="lista-opciones ">
        <label> Equipos </label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden> Seleccionar Equipo</option>
                {equipos.map( ( equipo,index) => {
                   return <option key={index} value={equipo}>{equipo}</option> 
                })
                }

            </select>
        
    </div>
}
export default ListaOpciones