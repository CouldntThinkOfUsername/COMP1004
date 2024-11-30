const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (like index.html) from the current directory
app.use(express.static(path.join(__dirname)));

// Parse incoming requests as JSON
app.use(bodyParser.json());

// Path to store the passwords in a JSON file
const passwordFilePath = path.join(__dirname, 'passwords.json');

// Function to read passwords from the JSON file
function readPasswords() {
    try {
        if (fs.existsSync(passwordFilePath)) {
            const data = fs.readFileSync(passwordFilePath);
            console.log('Passwords loaded:', data.toString());
            return JSON.parse(data);
        } else {
            console.log('passwords.json does not exist, returning empty array');
            return [];
        }
    } catch (error) {
        console.error('Error reading passwords:', error);
        return [];
    }
}

// Function to write passwords to the JSON file
function writePasswords(passwords) {
    try {
        fs.writeFileSync(passwordFilePath, JSON.stringify(passwords, null, 2));
        console.log('Passwords saved:', JSON.stringify(passwords, null, 2));
    } catch (error) {
        console.error('Error writing passwords:', error);
    }
}

// Route for getting saved passwords
app.get('/get-passwords', (req, res) => {
    const passwords = readPasswords();
    res.json(passwords);
});

// Route for saving a new password
app.post('/save-password', (req, res) => {
    const { site, username, password } = req.body;

    if (!site || !username || !password) {
        return res.status(400).send('Missing required fields');
    }

    const passwords = readPasswords();
    passwords.push({ site, username, password });
    writePasswords(passwords);

    res.status(200).send('Password saved successfully');
});

// Handle root route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
