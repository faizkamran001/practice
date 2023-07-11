const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/api/users', (req, res) => {
  // Handle user creation logic
  const { name, email } = req.body;
  // ...
  res.status(201).json({ message: 'User created successfully' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
