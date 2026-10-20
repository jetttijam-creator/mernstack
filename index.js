require('dotenv').config();
require('./config/env')();
const express = require('express');
const connectDB = require('./config/db');
require('./models/Category');
const productsRouter = require('./routes/products');
const tasksRouter = require('./routes/tasks');
const authRouter = require('./routes/auth');

const app = express();
app.set('trust proxy', 1);
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

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    version: require('./package.json').version,
    uptime: Math.round(process.uptime()),
  });
});

app.use('/api/v1/products', productsRouter);
app.use('/api/v1/tasks', tasksRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/uploads', require('./routes/uploads'));
app.use('/uploads', express.static('uploads'));

app.use(require('./middleware/errorHandler'));

if (require.main === module) {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
  });
}

module.exports = app;
