const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const contactsRoutes = require("./routes/contacts");
const connectDB = require("./config/db");
const cors = require('cors');

// connect to database
connectDB();

// init middleware
app.use(express.json({ extend: false }));
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contacts", contactsRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
