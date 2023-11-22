import NavBar from '../components/Navbar';
import "../css/Projects.css"
import brainteaser from "../images/am-i-responsive-brainteaser.png"

function Projects() {
  return (
    <div>
    <NavBar />
    <div className='projects'>
      <div className='card'>
        <div className='card-body'>
          <img src={brainteaser} alt="My first project called brainteaser." />
        </div>
        <div className='card-footer mx-auto'>
          <h2>Brainteaser is a mental health awareness page, as a user you can read about several mental diagnoses.</h2>
        </div>
      </div>
      <p>Project2</p>
      <p>Project3</p>
      <p>Project4</p>
      <p>Project5</p>
    </div>
    </div>
  );
}

export default Projects;
  