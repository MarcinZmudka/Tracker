import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
interface Coords {
  latitude: number;
  longitude: number;
}
function App() {
  const ref = useRef<HTMLParagraphElement>(null);
  const list = useRef<Array<String>>();
  list.current = ["początek"];
  const find = ({ coords }: { coords: Coords }) => {
    const { latitude, longitude } = coords;
    if (ref.current && list.current) {
      list.current.push(`</br>${latitude} ${longitude} | ${new Date()}`);
      ref.current.innerHTML = list.current.join();
    }
  };
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const error = (err: PositionError) => {
    if (ref.current) ref.current.innerText = err.message;
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
