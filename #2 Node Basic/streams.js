const fs = require('fs')

const readStream = fs.createReadStream('./docs/ninja.txt', { encoding: 'utf8' })
// 1st parameter -> where we want to pass data from, 
//option 2nd parameter make the buffer readable 
const writeStream = fs.createWriteStream('./docs/deleteme.txt')

readStream.on('data', (chunk) => {
    console.log('------new chunk------')
    console.log(chunk)
    writeStream.write('\nNEW Chunk\n')
    writeStream.write(chunk)
})


//piping  和line 8 - 12 相同作用 
//pipe必须是从一个readable file to a writeble file
readStream.pipe(writeStream)