const http = require("http");
const { Server } = require("socket.io");

const httpServer = http.createServer();

const PORT = process.env.PORT || 3001;

const io = new Server(httpServer, {
  cors: {
    origin: "https://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", async (socket) => {
  console.log("Usuario conectado: ", socket.id);

  socket.on("join_room", (userName) => {
    console.log(`username: ${userName} - Socket: ${socket.id}`);
  });

  socket.on("send-message", (msg) => {
    console.log("Recebido do cliente:", msg);
    io.emit("receive-message", msg);
  });
});

httpServer.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
