// Menggunakan import (karena file diatur sebagai ES module)
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Contoh data pengguna
const users = [
    { username: 'user1', password: 'password123' },
    { username: 'user2', password: 'password456' }
];

// Endpoint login
app.post('/auth/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true, message: 'Login successful!' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});