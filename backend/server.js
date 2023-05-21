import { Server } from "socket.io";
import { getDocument, updateDocument, updateDocumentName } from "./controller/document.js";
import { mongoose } from "mongoose";
const PORT = 8000;
const io = new Server(PORT, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

const MONGODB_URI="mongodb+srv://kalpanakathait07:FDttncrZAjvDPFCR@cluster0.wr4isnk.mongodb.net/delete?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

io.on('connection', socket => {
  socket.on('get-document', async documentId => {
    const document = await getDocument(documentId);
    socket.join(documentId);
    socket.emit('load-document', document.data);

    socket.on('send-changes', delta => {
      socket.broadcast.to(documentId).emit('receive-changes', delta);
    });

  socket.on('update-document-name', async(newName) =>{
        await updateDocumentName(documentId, newName);
        socket.broadcast.to(documentId).emit('update-document-name', newName)
  })
    socket.on('save-document', async (data, newName) => {
      await updateDocument(documentId, data);
    });
  });
});
