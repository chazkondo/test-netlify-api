import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [clients, setClients] = useState([
    {
      firstName: "Steve",
      lastName: "Santaclause",
      birthday: "05131922",
      gender: "male",
      ssn: "xxx-xx-xxxx",
      zipcode: "96822",
      address: "222 Moana Blvd",
      city: "Honolulu",
      state: "Hawaii",
    },
    {
      firstName: "Chaz",
      lastName: "Cherokee",
      birthday: "05171992",
      gender: "male",
      ssn: "xxx-xx-xxxx",
      zipcode: "96811",
      address: "223 Candy Ln",
      city: "Honolulu",
      state: "Hawaii",
    },
  ]);
  const [searchString, setSearchString] = useState("");

  // useEffect(() => {
  //   axios.get("");

  //   return () => {};
  // }, searchString);

  function handleChange(e) {
    setSearchString(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={searchString}
        onChange={(e) => handleChange(e)}
        placeholder="Type here"
      />

      <ul>
        {clients.map((c) => (
          <li>
            {c.firstName} {c.lastName}
            <br />
            {c.zipcode}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
