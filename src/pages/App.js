import './App.css';
import { useState } from 'react';
import beaverImage from '../images/beav_ness.png'
import waterImage from '../images/boat_water.jpg'

function App() {
  const [waterImageSrc, setWaterImageSrc] = useState(waterImage)

  const handleImageClick = () => {
    if (waterImageSrc === waterImage) {
      setWaterImageSrc(beaverImage)
    } else {
      setWaterImageSrc(waterImage) //TODO: make beaver jpg probably or vice versa
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img className="image-medium" alt="Boat on Water with Mountain in Background & Willatuk Serpent & Beaver" src={waterImageSrc} id="toggleImg3" onClick={handleImageClick} />
        </div>
        <h1>Welcome</h1>
        <p>Playin' around with stuff i guess</p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how to dance
        </a>
      </header>
    </div>
  );
}

export default App;
