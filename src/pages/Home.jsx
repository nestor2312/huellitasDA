/* eslint-disable react/prop-types */
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Main from '../componentes/menu';

const Home = () => {
  return (<>

<div>
  <Main/>
       <div className="row">
         <div className="col s12 card-panel blue lighten-3 m4 contenido">2</div>
         <div className="col s12 card-panel blue lighten-3 m4 contenido">3</div>
         <div className="col s12 card-panel blue lighten-3 m4 contenido">4</div>
       </div>
 </div>
  
  </>
  );
};

export default Home;
