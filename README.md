# Real-Time Collaborative Text Editor

This is a real-time collaborative text editor built using React, Node.js, and Socket.io. Multiple users can simultaneously edit a document and see each other's changes in real-time.

## Features

- Real-time collaboration: Multiple users can edit a document simultaneously and see each other's changes in real-time.
- Rich text editing: The text editor supports rich formatting options like bold, italic, underline, and more.
- Autosave: The document is automatically saved every 2 seconds to prevent data loss.
- Share document: Users can easily share the document with others by copying the document URL.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/real-time-text-editor.git
   ```
2. Install the dependencies:
 ```bash
    cd real-time-text-editor
    npm install
```
3. Start the development server:

   ```bash
   npm start
    ```
4. Open your web browser and visit `http://localhost:3000` to access the application.


## Dependencies

The project uses the following dependencies:
- React: JavaScript library for building user interfaces.
- Node.js: JavaScript runtime environment.
- Socket.IO: Real-time bidirectional event-based communication library.
- Quill: Modern WYSIWYG editor.
- This project utilizes Material-UI, a popular React UI framework, for building the user interface. 
- MongoDB: This project utilizes MongoDB, a popular NoSQL database, for storing the ids, data and document name.

For a complete list of dependencies, please refer to the `package.json` file.

## Usage

- Upon opening the application, a default document named "Google Docs" is loaded.
- To customize the document name, click on the input field at the top of the page and enter a new name.
- To collaborate with others, share the document URL with them.
- Users can make changes to the document using the provided rich text editing toolbar.
- Changes made by one user are instantly reflected in real-time for all connected users.


## License

This project is licensed under the [MIT License](LICENSE).

