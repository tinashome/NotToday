import './App.css';
import Popup from './Popup';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <div className='background'>
        <div className='container'>
          <div className='title'>NotToday!!</div>
          <Popup></Popup>
        </div>
      </div>
    </div>
  );
}

export default App;
