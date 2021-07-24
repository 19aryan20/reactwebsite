import React, { useState } from "react";
import Search from "./Simg";
import "./index.css";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const App = () => {
  const [img, setimg] = useState();
  const inputevent = (event) => {
    let data = event.target.value;
    setimg(data);
  };
  return (
    <>
      <div id="nav">
        <h1>Welcome To Image</h1>
      </div>
      <h5>*NO RAJ KUNDRA WEBSITE IMG AVAILABLE</h5>
      <div className="single">
        <a href="https://web.whatsapp.com/" target="_blank">
          <WhatsAppIcon id="whatsapp" />
        </a>
        <div className="make">
          <ImageSearchIcon id="icon" />
          <input
            type="text"
            placeholder="Search Image"
            onChange={inputevent}
            id="input"
          />

          <Search img={img} />
        </div>
      </div>
      <div className="fot">
        <h2>Rights are not Reserved</h2>
      </div>
    </>
  );
};

export default App;
