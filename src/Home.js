import './App.css';
function chargebattery() {
  let a;
  a = document.getElementsByClassName(`charge`);
  setTimeout(function () {
    a.innerHTML = "jamess.jpg";
  }, 1000);
  setTimeout(function () {
    a.innerHTML = "james.jpg";
  }, 2000);
  setTimeout(function () {
    a.innerHTML = "n674142.png";
  }, 3000);
  setTimeout(function () {
    a.innerHTML = "paint.jpeg";
  }, 3000);

}

chargebattery()
setInterval(chargebattery, 1000);
function Home() {
  return (
    <div className="App">
      <div className='wond'>
        <div>
          <h5 className='tunde'>Hello, My name is</h5>
          <h1 className='jam'>James Kayode</h1>
          <h3>Front-End Developer</h3>
          <p className='opem'>I design and develop services for customers of all sizes 
            specializing on creating stylish, modern website, web services
            and online stores
          </p>
          <button id='cv'>Download CV</button>
        </div>
        <div>
          <img src='jamess.jpg' id='pics' className='charge'></img>
      </div>
      </div>
    </div>
  );
}

export default Home;
