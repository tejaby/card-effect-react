import "../css/cards.css";

function Cards({ usuarios }) {
  return (
    <div>
      <div className="cards">
        <div className="card card-1">
          <div className="card-head">
            <h3>{`${usuarios.first_name} ${usuarios.last_name}`}</h3>
            <img src={usuarios.avatar} />
          </div>
        </div>
        <div className="card card-2">
          <div className="card-body">
            <h3>{usuarios.email}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus reprehenderit earum praesentium nobis temporibus!
              Perferendis, ducimus vero exercitationem numquam repudiandae
              debitis amet minima est quam maxime? Molestiae animi obcaecati
              blanditiis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
