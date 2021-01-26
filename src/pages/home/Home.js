import Navbar from '../../components/Navbar';
import '../home/style.css';
import { Link } from 'react-router-dom';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';

function Home() {
    
    return(
        <div>
             <Navbar />
            
              <div className="container-jumbotron">
                 <div className="jumbotron">
                    <h2>Loricode</h2> 
                     <Link to="/course" className="link-button">Cursos Gratis</Link>
                 </div>
              </div>

              <div className="container-card">  
                 <div className="row">
                    
                    <div className="col-3">
                    <div className="card">
                        <img src={img1} alt="img" className="card-img"/>
                       <div className="card-body">
                        <h4><b>Seguridad</b></h4> 
                          <p>Implementacion de roles en paginas web</p> 
                         </div>
                      </div>     
                    </div> 

                    <div className="col-3">
                    <div className="card">
                    <img src={img2} alt="img" className="card-img"/>
                       <div className="card-body">
                        <h4><b>Programacion</b></h4> 
                          <p>Programacion orientada a objetos</p> 
                         </div>
                      </div>    
                    </div> 

                    <div className="col-3">
                      <div className="card">
                      <img src={img3} alt="img" className="card-img"/>
                       <div className="card-body">
                        <h4><b>Historia</b></h4> 
                          <p>histroria de los lenguajes de programacion</p> 
                         </div>
                      </div>           
                    </div> 

                 </div>
              </div>



        </div>
    );
}


export default Home;