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

// Session setup
app.use(session({
  secret: 'nodesecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // Change to true in production when using HTTPS
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
  time: String,
});
const Appointment = mongoose.model('Appointment', appointmentSchema);

// Updated product schema
const productSchema = new mongoose.Schema({
  name: String, // Product name
  price: Number, // Product price
  quantity: String, // Order quantity
  details: String, // Additional order details
});
const Product = mongoose.model('Product', productSchema);



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
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }); // Use mongoose method to find user
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    req.session.user = user;  // Save the user to session
    res.status(200).json({ message: 'Login successful' });
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

// POST /product - create
app.post('/product', async (req, res) => {
  const { name, price, quantity, details } = req.body; // Updated to match corrected schema

  try {
    const product = new Product({ name, price, quantity, details });
    await product.save();

    res.status(201).json({ message: 'Product ordered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/preorder', async (req, res) => {
  const { name, price, quantity, details } = req.body;

  try {
    const product = new Product({ name, price, quantity, details });
    await product.save();

    res.status(201).json({ message: 'Product ordered successfully', orderId: product._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/appointment', async (req, res) => {
  const { name, date, details,time } = req.body;

  try {
    const appointment = new Appointment({ name, date, details, time });
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