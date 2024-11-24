const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config(); // Pastikan dotenv di-load di bagian atas

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware untuk parsing JSON dan melayani file statis
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

// Setup Google Auth menggunakan Client ID dari .env
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // Ambil dari .env

// Endpoint untuk verifikasi token Google Sign-In
app.post('/auth/google', async(req, res) => {
    const { token } = req.body;

    try {
        // Verifikasi ID token yang dikirim dari frontend
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID, // Gunakan variabel dari .env
        });

        // Mendapatkan payload dari token yang berhasil diverifikasi
        const payload = ticket.getPayload();

        console.log('User verified:', payload);

        // Mengirim respons kembali ke frontend dengan data user
        res.status(200).json({
            message: 'User verified',
            user: {
                name: payload.name,
                email: payload.email,
                picture: payload.picture,
            },
        });
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(400).json({ error: 'Invalid token' });
    }
});

// Melayani React frontend setelah build
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});