require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productsRouter = require('./routes/products');
const tasksRouter = require('./routes/tasks');
const authRouter = require('./routes/auth');

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} — ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.use('/api/v1/products', productsRouter);
app.use('/api/v1/tasks', tasksRouter);
app.use('/api/v1/auth', authRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
});
