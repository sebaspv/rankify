import logo from './logo.svg';
import './App.css';
import Form from './form.js'

function App() {
  return (
    <div className="App">
      <header class="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div class="fade-in">
      <h1 id="heading">Get Your Logo Rated in seconds, by AI.</h1>
      <p id="text">Simply upload your image using the button below and our machine learning algorithms will analyze your logo, score it based off of fundamental design principles (color scheme, design, shape, e.t.c) and even guess what industry you're in, in seconds.</p>
      </div>

      <Form></Form>
    </div>

  );
}

export default App;
