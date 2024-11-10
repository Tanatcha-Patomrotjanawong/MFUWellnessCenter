const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // Allow React frontend to connect
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'nodesecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
  },
}));

// Database connection
mongoose.connect('mongodb://localhost:27017/wellnessproject', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', () => console.log('Failed to connect to MongoDB'));
db.once('open', () => console.log('Connected to MongoDB'));

// User schema and model for MongoDB
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

// Appointment schema and model for MongoDB
const appointmentSchema = new mongoose.Schema({
  name: String,
  date: Date,
  details: String,
});
const Appointment = mongoose.model('Appointment', appointmentSchema);

// POST /register
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST /login
// POST /login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db.collection('users').findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    req.session.user = user;  // Save the user to session
    res.status(200).json({ message: 'Login successful' }); // Send success message without redirect
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// POST /logout
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error logging out' });
    }
    res.status(200).json({ message: 'Logged out successfully' });
  });
});

// POST /appointment - Create new appointment
app.post('/appointment', async (req, res) => {
  const { name, date, details } = req.body;

  try {
    const appointment = new Appointment({ name, date, details });
    await appointment.save();

    res.status(201).json({ message: 'Appointment scheduled successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
