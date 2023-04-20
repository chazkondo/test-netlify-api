import allClients from "../../data/allClients.js";

exports.handler = async (event, context) => {
  if (event.httpMethod !== "GET")
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Not authorized" }),
    };

  const lastName = event.queryStringParameters.lastName;
  const firstName = event.queryStringParameters.firstName;
  const birthday = event.queryStringParameters.birthday;
  const zipcode = event.queryStringParameters.zipcode;
  const state = event.queryStringParameters.state;
  const ssn = event.queryStringParameters.ssn;

  let filteredClients = allClients.filter((person) =>
    person.last_name.toLowerCase().startsWith(lastName.toLowerCase())
  );

  filteredClients = firstName
    ? filteredClients.filter((person) =>
        person.first_name.toLowerCase().startsWith(firstName.toLowerCase())
      )
    : filteredClients;

  filteredClients = birthday
    ? filteredClients.filter((person) => person.birthday === birthday)
    : filteredClients;

  filteredClients = zipcode
    ? filteredClients.filter((person) => person.zipcode === zipcode)
    : filteredClients;

  filteredClients = state
    ? filteredClients.filter(
        (person) => person.state.toLowerCase() === state.toLowerCase()
      )
    : filteredClients;

  filteredClients = ssn
    ? filteredClients.filter(
        (person) => person.state.toLowerCase() === state.toLowerCase()
      )
    : filteredClients;

  return {
    statusCode: 200,
    body: filteredClients.length
      ? JSON.stringify({ message: filteredClients })
      : JSON.stringify({ message: "No matching clients" }),
  };
};
