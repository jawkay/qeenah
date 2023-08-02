
import './App.css';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
       <h1 className='pro'>Projects</h1>
      <div className='wonder'>
        <div id="swift">
          <img src='login.png' height="300px" width="550" className='ssi' ></img> <br></br>
          <button className='seyi'><a href="https://edxghbj.github.io/world/swift" id='busy'>Live Demo</a></button>
          <button className='seyi'><a href="" id='busy'>Source code</a></button>
        </div>
        <div>
          <img src='cac.png' height={300} width={550} className='ssi'></img><br></br>
          <button className='seyi'><a href="https://edxghbj.github.io/world/cac" id='busy'>Live Demo</a></button>
          <button className='seyi'><a href="" id='busy'>Source code</a></button>
        </div>
      </div>
      <div className='wonder'>
        <div id="swift">
          <img src='sim.png' height="300px" width="550" className='ssi' ></img> <br></br>
          <button className='seyi'><a href="https://edxghbj.github.io/world/simplified" id='busy'>Live Demo</a></button>
          <button className='seyi'><a href="" id='busy'>Source code</a></button>
        </div>
        <div>
          <img src='zoom.png' height={300} width={550} className='ssi'></img><br></br>
          <button className='seyi'><a href="https://edxghbj.github.io/world/explore" id='busy'>Live Demo</a></button>
          <button className='seyi'><a href="" id='busy'>Source code</a></button>
        </div>
      </div>

      <div className='wonder'>
        <div id="swift">
          <img src='who.png' height="300px" width="550" className='ssi' ></img> <br></br>
          <button className='seyi'><a href="https://edxghbj.github.io/world/whogohost" id='busy'>Live Demo</a></button>
          <button className='seyi'><a href="" id='busy'>Source code</a></button>
        </div>
        <div>
          <img src='down.png' height={300} width={550} className='ssi'></img><br></br>
          <button className='seyi'><a href="https://edxghbj.github.io/world/download" id='busy'>Live Demo</a></button>
          <button className='seyi'><a href="" id='busy'>Source code</a></button>
        </div>
      </div>

    </div>
  );
}

export default App;
