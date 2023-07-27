const fs = require('fs');

const requestHandler =(req, res) =>{
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        fs.readFile("message.txt", {encoding: "utf-8"}, (err, message) => {
            if(err){
                console.log(err);
            }
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write(`<body>${message}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        })
      } 
      else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
          body.push(chunk);
        });
        return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          fs.writeFile("message.txt", message, (err) => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
          })
        });
      }
}

// module.exports = requestHandler;

// module.handler = {
//     handler : requestHandler,
//     someText : 'Some text as example'
// }

exports.handler = requestHandler;
exports.someText = 'Some text as Sample';