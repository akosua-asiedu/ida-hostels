var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

// Serve static files (like images, CSS, JavaScript) from the current directory
app.use(express.static(path.join(__dirname)));  // This serves everything in the current directory

// Serve index.html when a GET request is made to '/'
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));  // Sends the 'index.html' in the current directory
});

// Handle POST requests (optional, based on your current logic)
app.post('/', function(req, res) {
    var body = '';

    req.on('data', function(chunk) {
        body += chunk;
    });

    req.on('end', function() {
        if (req.url === '/') {
            console.log('Received message: ' + body);  // log the message
        }

        res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
        res.end();
    });
});

// Start the server
app.listen(port, function() {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});
