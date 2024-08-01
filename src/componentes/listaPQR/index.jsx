/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// const endpoint ='http://127.0.0.1:8000/api';
const endpoint ='http://localhost:8000/api';

const ListPQR = () => {
    const [Pqr, setPqr] = useState([]);
    useEffect( ()=>{
      getPqrAll()
    }, [])


    const getPqrAll = async ()=>{
      const response = await axios.get(`${endpoint}/pqrs`)
      setPqr(response.data )
    }
    const DeletePqr =  async(id)=>{
     await axios.get(`${endpoint}/pqr/${id}`)
     getPqrAll()
    }
  
   
  
    return (
      <div className="container">
        <h4 className="light-blue-text">Información PQR</h4>
    
         
            <table className="responsive-table">
            <thead>
              <tr className="light-blue-text cyan lighten-4">
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Correo</th>
                <th>Fecha de Nacimiento</th>
                <th>Tipo de Solicitud</th>
                <th>Mensaje</th>
                <th>acciones</th>
                <th>Respuesta de PQR</th>
              </tr>
            </thead>
            <tbody>
            {Pqr.map((item) => (
                <tr key={item.id} className="light-blue-text">
                  <td className=" light-blue lighten-5">{item.Nombre}</td>
                  <td className=" light-blue lighten-5">{item.Teléfono}</td>
                  <td className=" light-blue lighten-5">{item.Correo}</td>
                  <td className=" light-blue lighten-5">{item.Fecha}</td>
                  <td className=" light-blue lighten-5">{item.Solicitud}</td>
                  <td className=" light-blue lighten-5">{item.Mensaje}</td>
                  <td>
                            <Link to={`/edit/${item.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={ ()=>DeletePqr(item.id) } className='btn btn-danger'>Delete</button>
                        </td>
                        <td className=" light-blue lighten-5">{item.respuesta_PQR}</td>
                </tr>
              ))}
             
            </tbody>
          </table>
     
      </div>
    );
  };



export default ListPQR;
