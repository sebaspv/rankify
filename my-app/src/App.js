import logo from './logo.svg';
import home from './home.svg'
import './App.css';
import Form from './form.js'
import RadarChart from './radarg.js'
import File from './fupload.js'



function App() {

  let r=localStorage.getItem("industry");
  setTimeout(function(){
    document.getElementById("ans").innerText="Your Logo looks like you're in the " +r + " industry!";
}, 15000);

  setTimeout(function(){
    document.getElementById("anss").innerText="Check Out Your Logo's Scores!";
}, 19000);




  return (
    <div className="App">
      <div className="headerr">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="App-logo">Rankify</p>
      <p className="navo">About us</p>
      <p className="navo">How It Works</p>
      </div>
      <div className="fade-in">
      <img src={home} className="bg" alt="logo" />
      <h1>Get Your Logo Rated in seconds, by AI.</h1>
      <p class="fade-in" id="text">Simply upload your logo using the button below and our machine learning algorithms will analyze your logo, score it based off of fundamental design principles (color scheme, design, shape, e.t.c) and even guess what industry you're in, in seconds.</p>
      </div>
      <Form></Form>
      <p>Or</p>
      <File></File>
      <p id="confirmation"></p>
      <h3 id="ans"></h3>
      <h1 id="anss"></h1>
      <div class="radar">
      <RadarChart></RadarChart>
      </div>
    </div>

  );
}

export default App;
