import logo from './logo.svg';
import './App.css';
import Form from './form.js'


function App() {
  return (
    <div className="App">
      <div class="header">
      <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="fade-in">
      <h1>Get Your Logo Rated in seconds, by AI.</h1>
      <p class="fade-in" id="text">Simply upload your logo using the button below and our machine learning algorithms will analyze your logo, score it based off of fundamental design principles (color scheme, design, shape, e.t.c) and even guess what industry you're in, in seconds.</p>
      </div>
      <Form></Form>
    </div>

  );
}

export default App;
