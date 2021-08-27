import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const dataHandler = () => {
    if (people.length > 0) {
      setPeople([]);
    } else {
      setPeople(data);
    }
  };

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id != id);
    setPeople(newPeople);
  };

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={dataHandler}>
        Toggle Items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
