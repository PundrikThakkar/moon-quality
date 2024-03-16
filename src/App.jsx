import { useState } from "react";
import "./App.css";

function App() {
  const [imgSrc, setImgSrc] = useState("/images/144moon.jpeg");
  const [px, setPx] = useState("144");

  const imgStyle = {
    height: "600px",
    width: "600px",
  };

  const handleChange = (e) => {
    const selectedPx = e.target.value;
    setPx(selectedPx);
    switch (selectedPx) {
      case "144":
        setImgSrc("/images/144moon.jpeg");
        break;
      case "240":
        setImgSrc("/images/240moon.jpeg");
        break;
      case "360":
        setImgSrc("/images/360moon.jpeg");
        break;
      case "480":
        setImgSrc("/images/480moon.jpeg");
        break;
      case "720":
        setImgSrc("/images/720moon.jpeg");
        break;
      case "1080":
        setImgSrc("/images/1080moon.jpg");
        break;
      default:
        setImgSrc("/images/144moon.jpeg");
    }
  };

  return (
    <>
      <div>
        <img src={imgSrc} alt="moon" style={imgStyle} />
      </div>
      <select value={px} name="moon" id="moon" onChange={handleChange}>
        <option value="144">144p</option>
        <option value="240">240p</option>
        <option value="360">360p</option>
        <option value="480">480p</option>
        <option value="720">720p</option>
        <option value="1080">1080p</option>
      </select>
    </>
  );
}

export default App;
