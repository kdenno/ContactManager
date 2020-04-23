const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const contactsRoutes = require('./routes/contacts');


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactsRoutes);






app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
