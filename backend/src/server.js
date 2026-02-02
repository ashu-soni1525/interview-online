import express from "express";
import {ENV} from "./lib/env.js";
import path from "path";
// import cors from "cors";

const app = express();
const __dirname = path.resolve()    ;
// middlewares
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


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

app.listen( ENV.PORT, () => {
  console.log(`✅ Server running on port ${ENV.PORT} 🚀`);
});

