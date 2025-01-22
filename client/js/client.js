const socket = io('http://localhost:8000'); // Connect to the server

// Get HTML elements
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");
const typingStatus = document.querySelector(".typing-status");
const userCount = document.querySelector(".user-count");
const userListContainer = document.querySelector(".user-list");

let mySocketId = null; // To store the client's socket ID
let currentPrivateMessageRecipient = null; // Track private message recipient
let typingTimeout = {}; // Timeout tracker for typing indicators

// Get the client's socket ID on connection
socket.on('connect', () => {
    mySocketId = socket.id;
});

// Ask user for their name when they first join
const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name);

// Update the number of users online
socket.on('user-count', (count) => {
    userCount.textContent = `Users online: ${count}`;
});

// Update the user list for private messaging
socket.on('user-list', (userList) => {
    userListContainer.innerHTML = '';  // Clear the existing list
    userList.forEach(user => {
        if (user.socketId !== mySocketId) {  // Don't display yourself in the list
            const userElement = document.createElement('div');
            userElement.innerText = user.name;
            userElement.onclick = () => setPrivateRecipient(user.name);
            userListContainer.appendChild(userElement);
        }
    });
});

// Display a message when a new user joins
socket.on('user-joined', (name) => {
    append(`${name} joined the chat`, 'right');
});

// Display a message when a user leaves
socket.on('left', (name) => {
    append(`${name} left the chat`, 'right');
});

// Display a received message from another user
socket.on('receive', (data) => {
    append(`${data.name}: ${data.message}`, 'left', data.timestamp);
});

// Display a received private message
socket.on('receive-private', (data) => {
    append(`Private from ${data.from}: ${data.message}`, 'left', data.timestamp, true);
});

// Show typing indicator for individual users
socket.on('typing', (data) => {
    const typingIndicator = document.getElementById(`typing-${data.name}`);
    if (data.isTyping) {
        if (!typingIndicator) {
            const typingElement = document.createElement('div');
            typingElement.id = `typing-${data.name}`;
            typingElement.classList.add('typing');
            typingElement.innerText = `${data.name} is typing...`;
            messageContainer.appendChild(typingElement);
        }
    } else {
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
});

// Handle message sending
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim(); // Trim to handle blank messages

    // Check if the message is blank or only spaces
    if (message === "") {
        typingStatus.innerHTML = '<span style="color: red;">Message cannot be blank!</span>';
        setTimeout(() => {
            typingStatus.innerHTML = ''; // Clear the warning after 3 seconds
        }, 3000);
        return; // Do nothing if the message is empty
    }

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Get current timestamp

    if (message.startsWith('/p ')) {
        const [command, recipient, ...messageParts] = message.split(' ');
        const privateMessage = messageParts.join(' ');

        socket.emit('private-message', recipient, privateMessage);
    } else {
        socket.emit('send', message);
    }

    append(`You: ${message}`, 'right', timestamp); // Display immediately with timestamp

    messageInput.value = ''; // Clear input field
});

// Send typing status when user is typing
messageInput.addEventListener('input', () => {
    socket.emit('typing', messageInput.value.length > 0);

    // Clear the previous typing timeout if exists
    if (typingTimeout[mySocketId]) {
        clearTimeout(typingTimeout[mySocketId]);
    }

    // Set a new timeout to remove the typing indicator after 1 second of inactivity
    typingTimeout[mySocketId] = setTimeout(() => {
        socket.emit('typing', false); // Emit "typing stopped"
    }, 1000);
});

// Append messages to the chat container
const append = (message, position, timestamp = null, isPrivate = false) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position); // 'left' or 'right'
    
    // If there's a timestamp, show it
    if (timestamp) {
        const timestampElement = document.createElement('span');
        timestampElement.classList.add('timestamp');
        timestampElement.innerText = timestamp;
        messageElement.appendChild(timestampElement);
    }

    if (isPrivate) {
        messageElement.style.backgroundColor = "#FFD700"; // Highlight private messages
        messageElement.innerHTML = `<strong>[Private]</strong> ${messageElement.innerHTML}`;
    }

    messageContainer.append(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight; // Auto-scroll
};

// Set recipient for private messages
function setPrivateRecipient(recipientName) {
    currentPrivateMessageRecipient = recipientName;
    const privateMessage = prompt("Enter your private message:");

    if (privateMessage) {
        socket.emit('private-message', recipientName, privateMessage);
    }
}
    