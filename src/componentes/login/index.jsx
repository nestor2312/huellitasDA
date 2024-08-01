import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import "./index.css"
import { Link } from 'react-router-dom';
import Main from '../menu';
const Login = ()=>{
    return <>
    <Main/>
    <div className="container custom-card   blue lighten-3">
      <h3 className="center-align">Iniciar Sesión</h3>
      <form className="col s12 container">
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate " required />
            <label htmlFor="email" className='color'>Correo Electrónico</label>
          </div>
        </div>
        
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password"  className="validate" required/>
            <label htmlFor="password"  className='color'>Contraseña</label>
          </div>
        </div>
        
        <div className="row">
          <div className="col s12">
             <Link to={`/admin/inicio`} className="btn waves-effect waves-light">  Iniciar Sesión</Link>
           
          </div>
        </div>
      </form>
    </div>

    
    </>
}
export default Login