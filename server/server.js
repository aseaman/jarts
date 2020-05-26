const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('connected');
});

app.get('/tree', (req, res) => {
    console.log('at root');
});

http.listen(process.env.PORT || 8080, () => console.log('listening'));
