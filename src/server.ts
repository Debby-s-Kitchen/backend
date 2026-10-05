// Load secrets from .env into process.env
import "dotenv/config";

// Request and Response are "labels" (types) for what Express hands us
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

// Allow your React app (different port) to call this server
app.use(cors());

// Let the server read JSON sent from React (like a plate order)
app.use(express.json());

// Test route: "is the kitchen open?"
// req = the incoming order slip, res = how we reply
app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "Kitchen is open 🍛" });
});

// process.env values are always strings, so we convert to a number
const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});