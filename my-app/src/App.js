import logo from './logo.svg';
import home from './home.svg'
import './App.css';
import Form from './form.js'


function App() {
  return (
    <div className="App">
      <div className="headerr">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="navo">About us</p>
      <p className="navo">How It Works</p>
      </div>
      <div className="fade-in">
      <img src={home} className="bg"  alt="logo" />
      <h1>Get Your Logo Rated in seconds, by AI.</h1>
      <p class="fade-in" id="text">Simply upload your logo using the button below and our machine learning algorithms will analyze your logo, score it based off of fundamental design principles (color scheme, design, shape, e.t.c) and even guess what industry you're in, in seconds.</p>
      </div>
      <Form></Form>
    </div>

  );
}

export default App;
