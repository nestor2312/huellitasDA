import img from "../../../../public/logo.png"
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { Link } from "react-router-dom";
// import "./index.css"
const MainAdmin = ()=> {
    return<>
     <nav>
           <div className="nav-wrapper custom-banner  blue lighten-1" >
               <a href="#!" className="brand-logo"><img src={img} width="80" height="64" alt="Los Tejos" /></a>
               <div className="brand-logo center logo">Huellitas de amor </div>
  
                         <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons large">dehaze</i></a>
               <ul className="right hide-on-med-and-down">
                 <li><Link to={'/admin/inicio'}>Inicio</Link></li>
                 <li><Link to={'/admin/denuncias'}>Denuncias</Link></li>
                 <li><Link to={'/admin/donaciones'}>Adopciones</Link></li>
                 <li><Link to={'/admin/pqr'}>PQRS</Link></li>
               
               </ul>
             </div>
           </nav>
        
           <ul className="sidenav" id="mobile-demo">
             <li><Link to={'/'}>Inicio</Link></li>
             <li><Link to={'donaciones'}>Donaciones</Link></li>
             <li><Link to={'blog'}>Blog</Link></li>
             <li><Link to={'pqr'}>PQRS</Link></li>
             <li><Link to={'login'}>Iniciar sesion</Link></li>
           </ul>
    </>
}
export default MainAdmin