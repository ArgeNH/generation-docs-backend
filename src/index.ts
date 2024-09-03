import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './db/database';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Unable to connect to the database:', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});