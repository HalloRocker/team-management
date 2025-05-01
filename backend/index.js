const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // To serve images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, Date.now() + ext);
    }
  });
  const upload = multer({ storage: storage });
  

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
  const Member = require('./models/member');

  // POST /api/members
  app.post('/api/members', upload.single('image'), async (req, res) => {
    try {
      const { name, role, email } = req.body;
      const image = req.file.filename;
  
      const newMember = new Member({ name, role, email, image });
      await newMember.save();
      res.status(201).json(newMember);
    } catch (err) {
        console.error("Error in POST /api/members:", err);
        res.status(500).json({ message: err.message });
    }
  });
  
  // GET /api/members
  app.get('/api/members', async (req, res) => {
    const members = await Member.find();
    res.json(members);
  });
  
  // GET /api/members/:id
  app.get('/api/members/:id', async (req, res) => {
    try {
      const member = await Member.findById(req.params.id);
      if (!member) return res.status(404).json({ message: 'Not Found' });
      res.json(member);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
