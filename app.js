var http = require('http');
var accountBalance = require('./accountBalance');

http.createServer(function(req, res) {
    res.writeHead(200);
    res.write(accountBalance.accountBalance() + accountBalance.convertRandomToDollars());
    res.end();
}).listen(3000);

console.log("listening on port: 3000");