const http = require('http')

// Create server using node HTTP module

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json'})

    let json = {
        name: 'Juan',
        age: 25
    }

    res.write(JSON.stringify(json))
    res.end()
})
.listen(3000)

console.log('Listen port 3000');