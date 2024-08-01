import Main from "../menu"
import "./index.css"
const Donaciones =()=>{
    return <>
     <Main/>
    <h1 className=" blue lighten-3 center">tu aporte nos ayudas a salvar más vidas!</h1>
     <div className="row container">
       
        <div className="col s12  blue lighten-3 m12 contenido">
       
          <h4>Te invitamos a ser parte de este gran Proyecto de Vida a través de algunas de las siguientes opciones, para que conjuntamente podamos seguir construyendo una vida más justa y digna para estos animales</h4>
        </div>
      </div>
    <h1 className=" blue lighten-3 center">Tipos de Donaciones!</h1>

      <div className="row">
        <div className="col s12 card-panel blue lighten-3 m7 contenido">
          <h5>todas las personas que quieren participar en esta actividad, les recordamos para ese día por favor, si pueden traer su kit de baño individual, es decir, jabón y/o shampoo medicado, toalla, algodón para limpiar los oídos de los perros, guantes de latex, y de ser posible un balde y una coquita para mojar y enjuagar a los animales.</h5>
        </div>
        <div className="col s12  m5 contenido">
        <img className="images"  src="https://img.huffingtonpost.es/files/image_720_480/uploads/2023/06/22/un-perro-de-raza-labrador.jpeg" alt="imagen no disponible" />

        </div>
      </div>
     
      </>
}

export default Donaciones