const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

// Membuat aplikasi express
const app = express();

// Menggunakan middleware
app.use(bodyParser.json());
app.use(cors()); // Membolehkan akses dari domain lain (misalnya dari frontend)

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/quizapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Model User untuk MongoDB
const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    password: String
}));

// API login untuk memverifikasi username dan password
app.post('/auth/login', async(req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user) {
            // Membandingkan password yang dimasukkan dengan hash password yang ada di database
            const isPasswordMatch = await bcrypt.compare(password, user.password);

            if (isPasswordMatch) {
                // Login berhasil
                res.json({ success: true, message: 'Login successful!' });
            } else {
                // Password salah
                res.json({ success: false, message: 'Invalid username or password.' });
            }
        } else {
            // Username tidak ditemukan
            res.json({ success: false, message: 'Invalid username or password.' });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Server error occurred during login.',
            error: err.message || 'Unknown error'
        });
    }
});

// API untuk register user baru
app.post('/auth/register', async(req, res) => {
    const { username, password } = req.body;

    try {
        // Mengecek apakah username sudah terdaftar
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Username already taken' });
        }

        // Hash password sebelum disimpan ke database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Membuat user baru
        const newUser = new User({
            username,
            password: hashedPassword
        });

        await newUser.save();
        res.json({ success: true, message: 'User registered successfully!' });

    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error during registration', error: err.message });
    }
});

// Menjalankan server pada port 5000
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});