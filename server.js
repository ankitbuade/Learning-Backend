const http = require ("http")

const server = http.createServer(function (req, res){
    if (req.url === "/getdata"){
        res.end("no data available")
    }
        res.end("hello world")
})

server.listen(3000)

 