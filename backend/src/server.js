import express from "express";
import {ENV} from "./lib/env.js";


const app = express();

// middlewares
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// health check
app.get("/health", (req, res) => {
  console.log("Health check endpoint called");
  res.status(200).json({
    msg: "welcome to interview-online backend",
    
  });
});

// port
// const PORT = process.env.PORT || 5000;

app.listen( ENV.PORT, () => {
  console.log(`✅ Server running on port ${ENV.PORT} 🚀`);
});

