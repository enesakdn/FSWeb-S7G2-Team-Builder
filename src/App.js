import React, { useState } from "react";
import Form from "./Form";
import Team from "./Team";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [saved, setSaved] = useState([]);
  const [takimUyeleri, setTakimUyeleri] = useState({
    isim: "",
    email: "",
    rol: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSaved([...saved, takimUyeleri]);
    setTakimUyeleri({
      isim: "",
      email: "",
      rol: "",
    });
  };

  const handleChange = (olay) => {
    setTakimUyeleri({
      ...takimUyeleri,
      [olay.target.id]: olay.target.value,
    });
  };

  let butonDisabledMi = true;

  if (
    takimUyeleri.isim !== "" &&
    takimUyeleri.email &&
    takimUyeleri.rol !== ""
  ) {
    butonDisabledMi = false;
  }

  return (
    <div className="App">
      <Form
        takimUyeleri={takimUyeleri}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        butonDisabledMi={butonDisabledMi}
      />
      <Team saved={saved} />
    </div>
  );
};

export default App;
