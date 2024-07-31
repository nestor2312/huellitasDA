/* eslint-disable react/prop-types */
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import FORM_PQR from '../componentes/pqr';
// import { Link } from 'react-router-dom';
import ListPQR from '../componentes/listaPQR';

const PQR = () => {
  return (<>
      <h5 className="center-align light-blue-text">Atencion de quejas, reclamos, solicitudes y denuncias</h5>
<FORM_PQR></FORM_PQR>
<div className="center-align light-blue-text">
{/* <Link to={'/PQRList'}>
 <button className="btn light-blue darken-1" type="submit">
                Ver PQR
              </button></Link> */}
              <ListPQR></ListPQR>

</div>
  </>
  );
};

export default PQR;
