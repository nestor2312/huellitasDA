import "./index.css"
const Footer = ()=>{
    return<>
    <footer className="page-footer custom-banner blue lighten-1 center">
         <div className="container ">
           <div className="row">
           <div className="col s12 card-panel blue lighten-1 m4 ">
           <i className="material-icons">call</i>
            <p className="grey-text text-lighten-4">+57 000 000 00 00</p>
           </div>
         <div className="col s12 card-panel blue lighten-1 m4 ">
         <i className="material-icons">markunread</i>
         <p className="grey-text text-lighten-4">HUellitasDeAmor@gmail.com</p>
         </div>
         <div className="col s12 card-panel blue lighten-1 m4 margin ">
         <i className="fa-brands fa-facebook fa-lg"></i>
         <i className="fa-brands fa-instagram fa-lg"></i>
          <p  className="grey-text text-lighten-4">Redes</p>
        
         </div>           
           </div>
         </div>
         <div className="footer-copyright">
           <div className="container center">
             <p>
           © 2024 Copyright 
             </p>
        
           </div>
         </div>
       </footer>
    </>
}
export default Footer