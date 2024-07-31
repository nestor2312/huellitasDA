import axios from "axios";
import  {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/pqr/'

const EditPQR = () => {
    const [Nombre, setNombre] = useState('')
  const [Teléfono, setTeléfono] = useState('')
  const [Correo, setCorreo] = useState('')
  const [Fecha, setFecha] = useState('')
  const [Solicitud, setSolicitud] = useState('')
  const [Mensaje, setMensaje] = useState('')
  const [respuesta_PQR, setrespuesta_pqr] = useState('')
  // const [archivo, setArchivo] = useState(null);

    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, 
            {Nombre: Nombre,
                Teléfono: Teléfono, 
                Correo: Correo,
                Fecha: Fecha,
                Solicitud: Solicitud,
               //  archivo: archivo,
                 Mensaje: Mensaje,
                 respuesta_PQR: respuesta_PQR
        })
        navigate('/pqr')
    }
    
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setNombre(response.data.Nombre)
            setTeléfono(response.data.Teléfono)
            setCorreo(response.data.Correo)
            setFecha(response.data.Fecha)
            setSolicitud(response.data.Solicitud)
            setMensaje(response.data.Mensaje)
            setrespuesta_pqr(response.data.respuesta_pqr)
           
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
      <>
        <h3>Edit Product</h3>
        <div className="container custom-card">
      <div className="row">
        <form className="col s12" onSubmit={update}>
          <div className="row">
            <div className="input-field col s12 m6">
              <i className="material-icons prefix">account_circle</i>
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
              <i className="material-icons prefix">phone</i>
              <input
                id="icon_telephone1"
                name="telefono"
                type="number"
                className="validate required light-blue-text"
                onChange={ (e)=> setTeléfono(e.target.value)}
                value={Teléfono}
              />
              <label htmlFor="icon_telephone1">Teléfono</label>
            </div>
            <div className="input-field col s12 m6">
              <i className="material-icons prefix">mail_outline</i>
              <input
                id="email"
                name="correo"
                type="email"
                className="validate required light-blue-text"
                onChange={ (e)=> setCorreo(e.target.value)}
             
                value={Correo}
              />
              <label htmlFor="email">Correo</label>
            </div>
            <div className="input-field col s12 m6">
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
            </div>
            <div className="input-field col s12 m6">
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
</div>
            {/* <div className="file-field input-field col s12 m6">
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
            </div> */}
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
            <div className="input-field col s11 m11">
              <i className="material-icons prefix">mode_edit</i>
              <textarea
                id="respuesta_pqr"
                name="respuesta_pqr"
                className="materialize-textarea required light-blue-text"
                data-length="120"
                onChange={ (e)=> setrespuesta_pqr(e.target.value)}
                value={respuesta_PQR}
              ></textarea>
              <label htmlFor="textarea1">Respuesta a la pqr</label>
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
    )
}

export default EditPQR
