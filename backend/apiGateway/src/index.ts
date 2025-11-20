import express, { Request, Response } from "express";
import fetch from "node-fetch"; // or axios

const app = express();
const PORT = 5000;

app.use(express.json());

// Example proxy route
app.get("/api/hello", async (req: Request, res: Response) => {
  try {
    // Forward request to backend server
    const response = await fetch("http://localhost:5001/api/hello");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Backend service unreachable" });
  }
});

app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});

