import img from "../../../public/logo.png"
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { Link, useLocation } from "react-router-dom";
import "./index.css"
const Main = ()=> {
  const location = useLocation();
    return<>
     <nav>
           <div className="nav-wrapper custom-banner  blue lighten-1" >
               <a href="#!" className="brand-logo"><img src={img} width="80" height="64" alt="Los Tejos" /></a>
               <div className="brand-logo center logo">Huellitas de amor</div>
  
                         <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons large">dehaze</i></a>
               <ul className="right hide-on-med-and-down">
                 <li><Link to={'/'} className={location.pathname === '/' ? 'active' : ''}>Inicio</Link></li>
                 <li><Link to={'donaciones'} className={location.pathname === '/donaciones' ? 'active' : ''} >Donaciones</Link></li>
                 <li><Link to={'blog'} className={location.pathname === '/blog' ? 'active' : ''}   >Blog</Link></li>
                 <li><Link to={'pqr'} className={location.pathname === '/pqr' ? 'active' : ''}  >PQRS</Link></li>
                 <li><Link to={'login'}  className={location.pathname === '/login' ? 'active' : ''} >Iniciar sesion</Link></li>
               </ul>
             </div>
           </nav>
        
           <ul className="sidenav" id="mobile-demo">
             <li><Link to={'/'} className={location.pathname === '/' ? 'active' : ''} >Inicio</Link></li>
             <li><Link to={'donaciones'}  className={location.pathname === '/donaciones' ? 'active' : ''} >Donaciones</Link></li>
             <li><Link to={'blog'} className={location.pathname === '/blog' ? 'active' : ''}  >Blog</Link></li>
             <li><Link to={'pqr'} className={location.pathname === '/pqr' ? 'active' : ''} >PQRS</Link></li>
             <li><Link to={'login'}className={location.pathname === '/login' ? 'active' : ''}  >Iniciar sesion</Link></li>
           </ul>
    </>
}
export default Main