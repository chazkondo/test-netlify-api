exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST")
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Not authorized" }),
    };

  const mockData = {
    1: 3632,
    10: 10058,
    11: 10267,
    12: 10477,
    13: 10687,
    14: 10896,
    15: 11107,
    2: 4749,
    3: 5867,
    4: 6985,
    5: 8102,
    6: 9220,
    7: 9429,
    8: 9639,
    9: 9848,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(mockData),
  };
};
