const http = require('http');
const fs = require('fs');

// takes in a cb which runs everytime a request comes in our server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    // this printed out '/' and 'GET'
    // '/' is the root of the web
    //root can be /about too. 

    /* //set header content type//
    res.setHeader('Content-Type', 'text/plain');
    res.write('hello, ninjas');
    res.end();
    */
    res.setHeader('Content-Type', 'text/html');

    let path = './views';
    switch (req.url) {
        case '/':
            path += 'index.html'
            break;
        case '/about':
            path += 'about.html';
            break;
            dafault:
            path += '404.html';
            break;
    }
    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            co nsole.log(err)
            res.end()
        } else {
            res.write(data)
            res.end();
        }
    })
});

server.listen(3000, 'localhost', () => {
    //this cb fires when we start listening
    console.log('listening for requests on port 3000')
})