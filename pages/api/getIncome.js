import Cors from "cors";
import initMiddleware from "../../middleware/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["POST"],
  })
);

export default async (req, res) => {
  await cors(req, res);

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

  const stringified = JSON.stringify(mockData);

  res.status(200).json(stringified);
};
