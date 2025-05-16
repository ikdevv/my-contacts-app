const express = require("express");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const contactRoutes = require("./routes/contact.routes");
const imageRoutes = require("./routes/image.routes");
require("dotenv").config();

// initializing app
const app = express();

// cors
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// port
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// db connection
connectDb();

// middlewares
app.use(express.json());
app.set("view engine", "ejs");

// serve static files from images directroy
app.use("/api/images", express.static("images"));

// routes
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use("/api/contacts", contactRoutes);
app.use("/api/images", imageRoutes);
