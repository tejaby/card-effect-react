import { useState, useEffect } from "react";
import Cards from "./Cards";
import "../css/appCards.css";

function AppCards() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    const request = await fetch("https://reqres.in/api/users?delay=1");
    const response = await request.json();
    setUsuarios(response.data);
  };

  return (
    <div className="container">
      {usuarios.map((usuarios) => (
        <Cards key={usuarios.id} usuarios={usuarios} />
      ))}
    </div>
  );
}

export default AppCards;
