import Nav from './Nav';
import './App.css';
function About() {
  return (
    <div className="App">
      <div className='mic'>
        <img src='jamess.jpg' id='pics'></img>
        <h5>Front-End Developer</h5>
        <h1 className='ja'>James Kayode</h1>
      </div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="web.jpg" class="d-block w-100" alt="..." height={500}></img>
            <div class="carousel-caption d-none d-md-block">
              <h1>Biography</h1>
              <p id='fy'>I'm a Freelancer Front-End Developer with over 6 Month of experience. I'm from Nigeria.
                I code and create web elements for amazing people around the world. I Like work with new people. New people new
                experiences.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="tech.jpg" class="d-block w-100" alt="..." height={500}></img>
            <div class="carousel-caption d-none d-md-block">
              <h1>What i do</h1>
              <p><ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Seo Marketing</li>
                <li>Graphic Design</li>
              </ul></p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="comp.jpg" class="d-block w-100" alt="..." height={500}></img>
            <div class="carousel-caption d-none d-md-block">
              <h1>Awards</h1>
              <p> <ul>
                <li>Best Learner Award</li>
                <li>Best in Computer Studies</li>
                <li>Creative Designer</li>
                <li>Monthly Best Performer</li>
              </ul></p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  );
}

export default About;
