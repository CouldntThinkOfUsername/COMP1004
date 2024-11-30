const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Path to the password file (it will be a JSON file)
const passwordFilePath = path.join(__dirname, 'passwords.json');

// Function to read passwords from the file
function readPasswords() {
    if (fs.existsSync(passwordFilePath)) {
        const data = fs.readFileSync(passwordFilePath);
        return JSON.parse(data);
    }
    return []; // Return an empty array if no file exists
}

// Function to write passwords to the file
function writePasswords(passwords) {
    fs.writeFileSync(passwordFilePath, JSON.stringify(passwords, null, 2));
}

// Endpoint to get all saved passwords
app.get('/get-passwords', (req, res) => {
    const passwords = readPasswords();
    res.json(passwords);
});

// Endpoint to save a new password
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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
