const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const moment = require('moment');  // For handling message timestamps

// Create an Express app and HTTP server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Store users in memory (no database)
let users = {};
let admins = []; // List of admin socket IDs

// Serve static files (for client-side HTML, CSS, JS)
app.use(express.static('client'));

// Serve the main HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

// Handle socket connections
io.on('connection', (socket) => {
    console.log('A user connected: ' + socket.id);

    // Handle a new user joining the chat
    socket.on('new-user-joined', (name) => {
        users[socket.id] = { name, isAdmin: false }; // Store user with their socket ID
        console.log(`${name} joined the chat`);

        // Broadcast that the user has joined
        socket.broadcast.emit('user-joined', name);

        // Update user count and send user list to all clients
        io.emit('user-count', Object.keys(users).length);
        io.emit('user-list', Object.values(users)); // Send user list

        // Automatically assign admin for the first user
        if (Object.keys(users).length === 1) {
            users[socket.id].isAdmin = true;
            admins.push(socket.id); // Mark first user as admin
        }

        io.emit('user-list', Object.values(users));  // Update user list
    });

    // Handle sending a message to everyone in the chat
    socket.on('send', (message) => {
        // Add timestamp to the message
        const timestamp = moment().format('HH:mm');

        // Broadcast the message to all clients except the sender
        socket.broadcast.emit('receive', {
            message,
            name: users[socket.id].name,
            timestamp,
        });
    });

    // Handle sending a private message to a specific user
    socket.on('private-message', (recipientName, message) => {
        // Find recipient by name
        const recipient = Object.values(users).find(user => user.name === recipientName);

        if (recipient) {
            // Emit private message to the recipient if they exist
            const timestamp = moment().format('HH:mm');
            socket.to(Object.keys(users).find(id => users[id].name === recipientName))
                .emit('receive-private', { from: users[socket.id].name, message, timestamp });
            console.log(`Private message sent to ${recipientName}`);
        } else {
            console.log(`Recipient ${recipientName} not found`);
        }
    });

    // Handle typing indicator
    socket.on('typing', (isTyping) => {
        if (users[socket.id]) { // Ensure the user exists before accessing their name
            socket.broadcast.emit('typing', { name: users[socket.id].name, isTyping });
        }
    });

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected: ' + socket.id);

        if (users[socket.id]) {
            socket.broadcast.emit('left', users[socket.id].name);
            delete users[socket.id];

            io.emit('user-count', Object.keys(users).length);
            io.emit('user-list', Object.values(users)); // Send updated user list
        }
    });
});

// Start the server
server.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});
