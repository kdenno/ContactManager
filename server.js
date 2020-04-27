const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const contactsRoutes = require("./routes/contacts");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

// connect to database
connectDB();

// init middleware
app.use(express.json({ extend: false }));
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contacts", contactsRoutes);

// serve static assets in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", () =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
