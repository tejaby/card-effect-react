import { useState, useEffect } from "react";
import Cards from "./Cards";
import Load from './Load'
import "../css/appCards.css";

function AppCards() {
  const [usuarios, setUsuarios] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    const request = await fetch("https://reqres.in/api/users?delay=1");
    const response = await request.json();
    setUsuarios(response.data);
    setLoad(true);
  };

  const Card = () => {
    return (
      <div className="container">
        {usuarios.map((usuarios) => (
          <Cards key={usuarios.id} usuarios={usuarios} />
        ))}
      </div>
    );
  };

  return <>{load ? <Card/> : <Load/>}</>
}

export default AppCards;
