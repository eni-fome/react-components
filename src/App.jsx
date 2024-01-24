import './App.css';
import Name from './components/Name';
import Description from './components/Description';
import Price from './components/Price';
// import Image from './components/Image';
import image from '../public/iphone15.jpg'


const firstName = "John";
function App() {
  return (
    <div className="App">
        <div className="greeting-message">
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </div>
      <div className="card">
        <img src={image} alt="Product" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title"><Name /></h5>
          <p className="card-text"><Price /></p>
          <p className="card-text"><Description /></p>
        </div>
      </div>
    </div>
  );
}

export default App;
