
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Footer from './componentes/footer';
import Main from './componentes/menu';
import Login from './componentes/login';
import PQR from './pages/PQR';
import ListPQR from './componentes/listaPQR';

import Blog from './pages/Blog';
import Donaciones from './componentes/donaciones';
import EditPQR from './componentes/pqr/editPQR';
// import MainAdmin from './componentes/admin/menu/menu';
import ADminHome from './pages/Admin';
import Adopcion from './componentes/admin/adopcion/adopcion';
import Denuncia from './componentes/admin/denuncia/denuncia';



function App() {


  return (
    <Router>
    <Main/>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/pqr" element={<PQR  />} />
        <Route path="/PQRList" element={<ListPQR />} />
        <Route path="/blog" element={<Blog  />} />
        <Route path="/donaciones" element={<Donaciones />} />
        <Route path='/edit/:id' element={ <EditPQR/> } />
       
      
        <Route path='/admin/inicio' element={ <ADminHome/> } />
        <Route path='/admin/donaciones' element={ <Adopcion/> } />
        <Route path='/admin/denuncias' element={ <Denuncia/> } />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;

