// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));

app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.render('index', { task: null, error: null });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
