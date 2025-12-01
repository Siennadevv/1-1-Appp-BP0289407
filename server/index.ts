import express from "express";

const app = express();
app.use(express.json());

// Test route
app.get("/api/page1", (req, res) => {
  res.send("Server is running Hello sienna ");
});

// Start server
app.listen(4000, () => {
  console.log("Backend running on http://localhost:4000");
});
