import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2> Choose Your Pricing Plan</h2>

     <div className="container">
      <div className="box">
        <div className="sec-1">
        <h2>Silver Plan</h2>
        <h1>$75/mon</h1>
        <h6>Perfect for biginners</h6>
        <button>Buy Now</button>
        </div>

        <div className="sec-2">
          <ul>
            <li>24/7 Gym Access</li>
            <li>Access to 6 classes/week</li>
          </ul>
        </div>
      </div>

  


      
<div className="box">
        <div className="sec-1">
        <h2>VIP Plan</h2>
        <h1>$150/mon</h1>
        <h6>When only the best will do</h6>
        <button>Buy Now</button>
        </div>

        <div className="sec-2">
          <ul>
            <li>24/7 Gym Access</li>
            <li>Access to 6 classes/week</li>
            <li>Access to 6 classes/week</li>
            <li>Access to 6 classes/week</li>
            <li>Access to 6 classes/week</li>
            <li>Access to 6 classes/week</li>
          </ul>
        </div>
      </div>


<div className="box">
        <div className="sec-1">
        <h2>Golden Plan</h2>
        <h1>$100/mon</h1>
        <h6>For serious enthusiasts</h6>
        <button>Buy Now</button>
        </div>

        <div className="sec-2">
          <ul>
            <li>24/7 Gym Access</li>
            <li>Access to 6 classes/week</li>
            <li>Access to 6 classes/week</li>
            <li>Access to 6 classes/week</li>
            <li>Access to 6 classes/week</li>
          </ul>
        </div>
      </div>


      </div>
    </div>
  );
}

export default App;
