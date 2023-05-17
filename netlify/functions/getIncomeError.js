exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST")
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Not authorized" }),
    };

  const mockData = {
    thresholds: [
      { familySize: 1, amount: 2000 },
      { familySize: 2, amount: 3000 },
      { familySize: 3, amount: 4000 },
      { familySize: 4, amount: 5000 },
      { familySize: 5, amount: 6000 },
      { familySize: 6, amount: 7000 },
      { familySize: 7, amount: 8000 },
      { familySize: 8, amount: 9000 },
      { familySize: 9, amount: 10000 },
      { familySize: 10, amount: 11000 },
      { familySize: 11, amount: 12000 },
      { familySize: 12, amount: 13000 },
      { familySize: 13, amount: 14000 },
    ],
  };

  return {
    statusCode: 200,
    body: '{"thresholds":[{"f:1,"amount":2000},{"famil:2,"amount":3000},{"famize":3,"amt":00},{"famiize":4,"amount":5000},{"familySize":5,"amount":6000},{"familySize":6,"amount":7000},{"familySize":7,"amount":8000},{"familySize":8,"amount":9000},{"familySize":9,"amount":10000},{"familySize":10,"amount":11000},{"familySize":11,"amount":12000},{"familySize":12,"amount":13000},{"familySize":13,"amount":14000}]}',
  };
};
