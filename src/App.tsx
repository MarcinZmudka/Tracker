import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
interface Coords {
  latitude: number;
  longitude: number;
}
function App() {
  const ref = useRef<HTMLParagraphElement>(null);
  const find = ({ coords }: { coords: Coords }) => {
    const { latitude, longitude } = coords;
    console.log("ASAS");
    if (ref.current)
      ref.current.innerText = `${latitude} ${longitude} | ${new Date()}`;
  };
  const options = {
    enableHighAccuracy: true,
    timeout: 100,
    maximumAge: 0,
  };
  const error = () => {
    if (ref.current) ref.current.innerText = "ERROR";
  };
  navigator.geolocation.watchPosition(find, error, options);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p ref={ref}>here should be your location</p>
      </header>
    </div>
  );
}

export default App;
