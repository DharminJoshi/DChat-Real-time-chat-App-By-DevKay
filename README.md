# DChat-Real-time-chat-App-By-DevKay

![Node.js](https://img.shields.io/badge/Node.js-v16+-brightgreen) ![Socket.io](https://img.shields.io/badge/Socket.io-v4-blue) ![MIT License](https://img.shields.io/badge/license-MIT-green)

A real-time chat application built with **Node.js**, **Express**, and **Socket.io**. It supports typing indicators, private messaging, and live user list management.

---

## Features

- 🖍 **Real-time Messaging**: Instantly send and receive messages as soon as they are typed, ensuring a smooth and fast chat experience.
- ✉️ **Private Messaging**: Send private messages to specific users, keeping conversations confidential and separate from the main chat.
- 👥 **Live User List**: See who is currently online and participating in the chat, with real-time updates of the active users.
- ⌨️ **Typing Indicators**: View when other users are typing, allowing you to know when someone is preparing a message.
- 🕒 **Timestamped Messages**: Every message is automatically timestamped using Moment.js, giving context to when a message was sent.

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript.
- **Backend**: Node.js, Express, Socket.io.
- **Utilities**: Moment.js for timestamps.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DharminJoshi/DChat-Real-time-chat-App-By-DevKay.git
   ```
2. Navigate to the project directory:
   ```bash
   cd DChat-Real-time-chat-App-By-DevKay
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

---

## Usage

To get started with **DChat-Real-time-chat-App-By-DevKay**, follow these steps to engage in the chat and make full use of the app's features.

### 1. **Join the Chat**
   - Upon loading the app, you'll be prompted to enter your **name**. This helps personalize your experience and allows other users to know who's chatting.
   - Once you've entered your name, you'll be taken to the main chat interface where you can start interacting with others.

### 2. **Send Real-time Messages**
   - Start typing messages in the input field at the bottom of the screen.
   - As you type, your messages are instantly sent to the chat and displayed in real time for all participants.
   - You can freely chat with everyone in the main chatroom, or use **private messaging** for more personal conversations.

### 3. **Private Messaging**
   - To send a **private message** to a specific user, simply type the following command in the message box:
     ```
     /p <username> <message>
     ```
   - Replace `<username>` with the person's name (make sure it's accurate) and `<message>` with your message.
   - Private messages are only visible to the recipient, allowing you to have confidential conversations without everyone in the room seeing them.

### 4. **Viewing Active Users**
   - The app will display a **live user list** on the sidebar (or a dedicated section depending on your layout), showing all the active participants in the chat.
   - The list updates automatically as people join or leave, so you always know who’s online and participating in the conversation.

### 5. **Typing Indicators**
   - While chatting, you will notice **typing indicators** that show when someone else is typing a message.
   - This feature helps keep the chat engaging by letting you know when others are actively participating in the conversation.

### 6. **Message Timestamps**
   - Every message you send will automatically have a **timestamp** next to it, showing the exact time the message was sent. This is particularly useful for tracking conversations in active chats or when discussing time-sensitive topics.

### 7. **Enjoy a Seamless Experience**
   - With the real-time updates, instant messaging, and user-friendly interface, you can enjoy smooth and uninterrupted conversations.
   - The app also supports both mobile and desktop devices, ensuring you can keep chatting no matter where you are.

---

## Folder Structure

```
DChat-RealTime-Chat-App/
├── client/
│   ├── css/
│   │   └── style.css              # Styles for the client-side UI
│   ├── js/
│   │   └── client.js              # Main client-side JavaScript
│   └── index.html                 # Main HTML page
├── index.js                       # Server-side code
├── README.md                      # Detailed description of the project
├── LICENSE                        # License file
├── package.json                   # Dependencies and scripts
├── package-lock.json              # Dependency tree lock file
└── CONTRIBUTING.md                # Guidelines for contributing to the project
```

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your descriptive message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request and describe your changes.

For more details, see the [CONTRIBUTING.md](CONTRIBUTING.md) file.

---

## Screenshots

![image](https://github.com/user-attachments/assets/7a64793e-7265-4f80-92ad-b3305b32849c)


---

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)**. You are free to share, adapt, and modify the project for non-commercial purposes, provided that you give appropriate credit to the original creator (Dharmin Joshi/DevKay). Commercial use of this project is not permitted.

For more details, see the full license: [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).

---

## Copyright Disclaimer:

This project, **DChat-Real-time-chat-App-By-DevKay**, is intended for educational and personal use only. All content, including code, images, and resources, are used under the principle of fair use. The project is a non-commercial, open-source endeavor created for learning purposes and is not associated with any official or commercial entity.

All trademarks, logos, and brand names mentioned or used in this project are the property of their respective owners. This project does not claim ownership of any of these trademarks, logos, or brand names.

The project is provided "as is" without any warranties, express or implied. The creator of this project is not responsible for any direct or indirect consequences arising from its use.

This project belongs to **DharminJoshi/DevKay** and is hosted on GitHub.

---

## Future Enhancements

We are actively working on new features to improve **DChat-Real-time-chat-App-By-DevKay**:
- **OAuth2 Authentication**: Enable secure user login through Google, Facebook, and more.
- **MongoDB Integration**: Store chat history and user data in a scalable database.
- **User Profiles**: Add personalized profiles for each user.
- **Media Sharing**: Allow users to share images, videos, and files.
- **Theme Customization**: Provide light/dark mode and customizable themes.

---

## Contact

For any queries, suggestions, or feedback, feel free to reach out:

- **Developer:** Dharmin Joshi / DevKay
- **Email:** info.dharmin@gmail.com
- **LinkedIn:** [https://www.linkedin.com/in/dharmin-joshi-3bab42232/](https://www.linkedin.com/in/dharmin-joshi-3bab42232/)
- **GitHub:** [https://github.com/DharminJoshi](https://github.com/DharminJoshi)

---

Thank you for using **DChat-Real-time-chat-App-By-DevKay**! We hope it makes your chatting experience seamless and enjoyable. 🚀

---
