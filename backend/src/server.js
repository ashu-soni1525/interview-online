import express from "express";
import path from "path";
import cors from "cors";
import { serve } from "inngest/express";
import {ENV} from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest } from "./lib/inngest.js";
const app = express();
const __dirname = path.resolve()    ;

// middlewares
app.use(express.json());
app.use(cors({origin:ENV.CLIENT_URL, credentials:true }));
// app.use(express.urlencoded({ extended: true }));


app.use("/api/inngest", serve({client: inngest, functions}));

// health check
app.get("/health", (req, res) => {
  res.status(200).json({
    msg: "welcome to interview-online backend",
    
  });    
});


app.get("/books ", (req, res) => {
  res.status(200).json({
    msg: "welcome to books endpoint ",
  });
});
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")))
  
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend" ,"dist" ,"index.html"));
  });}


const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`✅ Server running on port ${ENV.PORT} 🚀`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
