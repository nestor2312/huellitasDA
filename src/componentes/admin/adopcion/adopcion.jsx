
import { useState, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import M from "materialize-css";
// import "./index.css";
import axios from "axios";

const endpoint ='http://127.0.0.1:8000/api/pqr';

const Adopcion =()=>{

    const [Nombre, setNombre] = useState('')
    const [Teléfono, setTeléfono] = useState('')
    const [Correo, setCorreo] = useState('')
    // const [Fecha, setFecha] = useState('')
    // const [Solicitud, setSolicitud] = useState('')
    const [Mensaje, setMensaje] = useState('')
    const [archivo, setArchivo] = useState(null);
  
  
    const store = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('Nombre', Nombre);
      formData.append('Teléfono', Teléfono);
      formData.append('Correo', Correo);
      // formData.append('Fecha', Fecha);
      // formData.append('Solicitud', Solicitud);
      formData.append('Mensaje', Mensaje);
      if (archivo) formData.append('archivo', archivo);
  
      await axios.post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    };
  
    useEffect(() => {
      M.FormSelect.init(document.querySelectorAll("select"));
      M.CharacterCounter.init(document.querySelectorAll("textarea"));
    }, []);
  
  
  
  

    return <>
    <h1 className="blue darken-3">registrar adopcion de mascota</h1>
<div className="container custom-card">
      <div className="row">
        <form className="col s12" onSubmit={store}>
          <div className="row">
            <div className="input-field col s12 m6">
            
              <input
                id="icon_prefix"
                name="nombre"
                type="text"
                className="validate required light-blue-text"
                onChange={ (e)=> setNombre(e.target.value)}
                value={Nombre}
              />
              <label htmlFor="icon_prefix">Nombre</label>
            </div>
            <div className="input-field col s12 m6">
           
              <input
                id="icon_telephone1"
                name="telefono"
                type="number"
                className="validate required light-blue-text"
                onChange={ (e)=> setTeléfono(e.target.value)}
                value={Teléfono}
              />
              <label htmlFor="icon_telephone1">edad</label>
            </div>
            <div className="input-field col s12 m6">
            
              <input
                id="email"
                name="correo"
                type="email"
                className="validate required light-blue-text"
                onChange={ (e)=> setCorreo(e.target.value)}
             
                value={Correo}
              />
              <label htmlFor="email">descripcion</label>
            </div>
            {/* <div className="input-field col s12 m6">
              <i className="material-icons prefix">event</i>
              <input
                id="fecha_nacimiento"
                name="fechaNacimiento"
                type="date"
                className="validate required light-blue-text"
                onChange={ (e)=> setFecha(e.target.value)}
             
                value={Fecha}
              />
              <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
            </div> */}
            {/* <div className="input-field col s12 m6">
  <i className="material-icons prefix">mail_outline</i>
  <select
    id="solicitud"
    name="solicitud"
    className="validate required light-blue-text"
    onChange={(e) => setSolicitud(e.target.value)}
    value={Solicitud}
  >
    <option value="" disabled selected>Elige una opción</option>
     <option value="Donaciones">Donaciones</option>
     <option value="Denuncias">Denuncias</option>
     <option value="Quejas">Quejas</option>
     <option value="Tips">Tips</option>
  </select>
  <label htmlFor="solicitud">Tipo PQR</label>
</div> */}

             <div className="file-field input-field col s12 m6">
              <div className="btn">
                <span>Archivo</span>
                <input name="archivo" type="file"  onChange={(e) => setArchivo(e.target.files[0])} />
              </div>
              <div className="file-path-wrapper">
                <input
                  className="file-path validate required light-blue-text"
                  type="text"
                  placeholder="Sube tu archivo"
                />
              </div>
            </div> 


            <div className="input-field col s11 m11">
              <i className="material-icons prefix">mode_edit</i>
              <textarea
                id="textarea1"
                name="mensaje"
                className="materialize-textarea required light-blue-text"
                data-length="120"
                onChange={ (e)=> setMensaje(e.target.value)}
                value={Mensaje}
              ></textarea>
              <label htmlFor="textarea1">Mensaje</label>
            </div>
            <div className="col s12 m12">
              <button className="btn light-blue darken-1" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
}
export default Adopcion