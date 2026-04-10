import express from 'express';
import employees from '../db/employees.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(employees);
});

router.get('/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

router.get('/:id', (req, res) => {
  const employee = employees.find(e => e.id === Number(req.params.id));
  if (!employee) return res.status(404).send('Employee not found');
  res.send(employee);
});

router.post('/', (req, res) => {
  const name = req.body && req.body.name;
  if (!name || name.trim() === '') {
    return res.status(400).send('Name is required');
  }
  const newEmployee = { id: employees.length + 1, name };
  employees.push(newEmployee);
  res.status(201).send(newEmployee);
});

export default router;