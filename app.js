import express from 'express';
import employeesRouter from './routers/employees.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello employees!');
});

app.use('/employees', employeesRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal server error');
});

export default app;