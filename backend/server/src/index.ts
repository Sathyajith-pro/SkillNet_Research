import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

// Sample route
app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express + TypeScript!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

