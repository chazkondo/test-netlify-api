import { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [clients, setClients] = useState([]);
  const [lastNameSearch, setlastNameSearch] = useState("");
  const [firstNameSearch, setFirstNameSearch] = useState("");
  const [birthdaySearch, setBirthdaySearch] = useState("");
  const [zipcodeSearch, setZipcodeSearch] = useState("");
  const [ssnSearch, setSsnSearch] = useState("");
  const [stateSearch, setStateSearch] = useState("");

  useEffect(() => {
    let source = axios.CancelToken.source();
    let config = { cancelToken: source.token };

    if (lastNameSearch !== "") {
      let firstName =
        firstNameSearch !== "" ? "&firstName=" + firstNameSearch : "";
      let birthday = birthdaySearch !== "" ? "&birthday=" + birthdaySearch : "";
      let zipcode = zipcodeSearch !== "" ? "&zipcode=" + zipcodeSearch : "";
      let ssn = ssnSearch !== "" ? "&ssn=" + ssnSearch : "";
      let state = stateSearch !== "" ? "&state=" + stateSearch : "";

      axios
        .post(
          "/.netlify/functions/getClients?lastName=" +
            lastNameSearch +
            firstName +
            birthday +
            zipcode +
            ssn +
            state,
          config
        )
        .then((res) => {
          if (res.data.message === "No matching clients") {
            setClients([]);
          } else {
            setClients(res.data.message);
          }
        })
        .catch((err) => console.log(err, "err"));
    } else {
      setClients([]);
    }

    return () => {
      if (source) {
        source.cancel("unmounted");
        source = null;
      }
      if (config) config = null;
    };
  }, [
    lastNameSearch,
    firstNameSearch,
    birthdaySearch,
    zipcodeSearch,
    ssnSearch,
    stateSearch,
  ]);

  function handleChange(e) {
    setlastNameSearch(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={lastNameSearch}
        onChange={(e) => handleChange(e)}
        placeholder="Type last name here"
      />
      <input
        type="text"
        value={firstNameSearch}
        onChange={(e) => setFirstNameSearch(e.target.value)}
        placeholder="Type first name here"
      />
      <input
        type="text"
        value={birthdaySearch}
        onChange={(e) => setBirthdaySearch(e.target.value)}
        placeholder="Type birthday here yyyy-mm-dd"
      />
      <input
        type="text"
        value={zipcodeSearch}
        onChange={(e) => setZipcodeSearch(e.target.value)}
        placeholder="Type zipcode here #####"
      />
      <input
        type="text"
        value={ssnSearch}
        onChange={(e) => setSsnSearch(e.target.value)}
        placeholder="Type ssn here ###-##-####"
      />
      <input
        type="text"
        value={stateSearch}
        onChange={(e) => setStateSearch(e.target.value)}
        placeholder="Type state here"
      />
      {clients.length ? (
        <ul>
          {clients.map((c) => (
            <li key={c.id}>
              <b>
                {c.first_name} {c.last_name}
              </b>
              <br />
              Birthday: {c.birthday}
              <br />
              Gender: {c.gender}
              <br />
              SSN: {c.ssn}
              <br />
              Address: {c.address}
              <br />
              City: {c.city}
              <br />
              State: {c.state}
              <br />
              Zipcode: {c.zipcode}
              <br />
              id: {c.id}
            </li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default App;
