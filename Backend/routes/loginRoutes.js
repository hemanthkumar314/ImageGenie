import express from 'express';
import bcrypt from 'bcrypt';
import {User} from '../mongodb/models/post.js';  

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body; 

    const existingUser = await User.findOne({ $or: [ { email } ,{ username: name }] });
    
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: existingUser.email === email ? 'Email already registered' : 'Username already taken' 
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      username: name,
      email,
      password: hashedPassword
    });

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'No account found. Please sign up.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    console.log(user.username)

    res.status(200).json({ success: true, message: 'Login successful', user: user.username });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;