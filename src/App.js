import "./App.css";
import contactList from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactList.slice(0, 5));

  function handleAddContacts() {
    let randomElem =
      contactList[Math.floor(Math.random() * contactList.length)];
    setContacts([randomElem, ...contacts]);
  }

  function handleSort() {
    let clone = JSON.parse(JSON.stringify(contacts));
    clone.sort((elem1, elem2) => {
      if (elem1.name > elem2.name) {
        return 1;
      } else if (elem1.name < elem2.name) {
        return -1;
      } else {
        return 0;
      }
    });

    setContacts(clone);
  }

  function handleDelete(id) {
    let filteredContacts = contacts.filter((elem) => {
      return elem.id !== id;
    });
    setContacts(filteredContacts);
  }

  return (
    <div className="App">
      <button onClick={handleSort}> Sort By Name </button>
      <button onClick={handleAddContacts}> Add </button>
      <hr />

      <h1>Iron Contacts</h1>
      {contacts.map((elem, index) => {
        if (index < 5)
          return (
            <table>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won an Oscar</th>
                <th>Won an Emmy</th>
              </tr>
              <td>
                <img
                  src={elem.pictureUrl}
                  alt="img"
                  style={{ width: "100px" }}
                />
              </td>
              <td>{elem.name}</td>
              <td>{Math.round(elem.popularity)}</td>
              <td>{elem.wonOscar ? "Award" : ""}</td>
              <td>{elem.wonEmmy ? "Award" : ""}</td>
              <tr>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(elem.id);
                    }}
                  >
                    Delete Contact
                  </button>
                </td>
              </tr>
            </table>
          );
      })}
    </div>
  );
}

export default App;
