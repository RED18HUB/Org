import { useState } from "react"
import  "./MiOrg.css"

const MiOrg = (props) => {

    return <section className="orgSeccion">
        <h3>Mi Organización</h3>
        <img src="/img/dd-0.png" alt="add" onClick={props.cambiarMostrar}></img>

    </section>

}


export default MiOrg