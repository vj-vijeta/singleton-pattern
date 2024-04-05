```markdown
# Real-time Chat Application

This repository contains a simple real-time chat application built with WebSocket technology, enabling users to create/join chat rooms and exchange messages in real-time.

## Features

1. **Create/Join Chat Rooms**: Users can create or join chat rooms by entering a unique room ID.
2. **Real-time Messaging**: Users can send and receive messages within a chat room in real-time.
3. **Active User List**: The application displays a list of active users in the chat room.
4. **Optional Features**:
   - **Private Messaging**: Users can send private messages to other users.
   - **Message History**: The chat history persists, allowing users to view past messages even after leaving and rejoining the chat.

## Technology Stack

- **WebSocket**: Facilitates real-time communication between clients and the server.
- **Node.js**: Backend server environment.
- **JavaScript**: Used for both frontend and backend development.
- **HTML/CSS**: Frontend interface for user interaction.

## Installation and Usage

1. Clone the repository:

   ```
   git clone https://github.com/vj-vijeta/singleton-pattern.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the server:

   ```
   node server.js
   ```
```
4. Open `index.html` in a web browser to access the chat interface.

## How to Use

1. Open the chat application in your web browser.
2. Enter a unique room ID and your desired username.
3. Click on the "Join Room" button to enter the chat room.
4. Enter your message in the input field and click "Send Message" to broadcast it to other users in the room.

## Code Structure

- **`index.html`**: Frontend interface for the chat application.
- **`server.js`**: Backend server code responsible for handling WebSocket connections, managing chat rooms, and message broadcasting.

## Design Patterns

- **Observer Pattern**: Implemented to notify clients of new messages or user activities.
- **Singleton Pattern**: Utilized to manage the state of chat rooms efficiently.
- **Adapter Pattern**: Employed to allow the system to work with different client communication protocols (WebSocket, HTTP, etc.).

## Singleton Pattern

The Singleton Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to that instance. It is useful when exactly one object is needed to coordinate actions across the system.

### Implementation in the Chat Application

In the chat application, the Singleton Pattern is utilized to manage the state of chat rooms efficiently. This ensures that only one instance of a chat room exists for a particular room ID, preventing multiple instances of the same chat room from being created unnecessarily.

#### ChatRoom Class

```javascript
class ChatRoom {
  constructor(roomID) {
    this.roomID = roomID;
    this.clients = [];
  }

  static getInstance(roomID) {
    if (!this.instance) {
      this.instance = new ChatRoom(roomID);
    }
    return this.instance;
  }

  // Other methods...
}
```

In the `ChatRoom` class:
- The `getInstance` method ensures that only one instance of `ChatRoom` is created for a given room ID.
- The static property `instance` holds the single instance of `ChatRoom`.
- When `getInstance` is called, it checks if an instance for the specified room ID already exists. If not, it creates a new instance; otherwise, it returns the existing instance.

### Benefits of Singleton Pattern

1. **Resource Sharing**: Since there is only one instance of the class, resources can be shared efficiently among multiple clients.
2. **Global Access**: Provides a global point of access to the instance, making it easy to manage and access from anywhere in the application.
3. **Lazy Initialization**: The instance is created only when it is first requested, improving performance by delaying instantiation until needed.
4. **Prevents Multiple Instances**: Ensures that only one instance of the class exists, preventing duplication and maintaining consistency.

### Usage Considerations

While the Singleton Pattern offers various benefits, it should be used judiciously. Overuse of singletons can lead to tight coupling and difficulty in testing. Therefore, it's essential to evaluate whether a singleton is the most appropriate solution for the given problem.

### Conclusion

In the chat application, the Singleton Pattern ensures that chat rooms are effectively managed with only one instance per room ID, facilitating efficient communication and resource utilization. By adhering to the Singleton Pattern, the application maintains simplicity, consistency, and scalability in managing chat rooms.
```

