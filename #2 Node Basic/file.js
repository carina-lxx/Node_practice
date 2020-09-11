const fs = require('fs')

// read files
fs.readFile('./docs/ninja.txt', (err, data) => {
    // this function will fire when this is complete
    // first pramater is the path of the file
    if (err) {
        console.log(err);
    }
    console.log(data.toString())
    //没变成string之前是buffer，所以to show data要变成string
})

// write files
fs.writeFile('./docs/ninja.txt', 'hello, world', () => {
    console.log('file was written')
    // 1->path  2->what to write 3->cb func
})

//directions
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder created')
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted')
    })
}


// delete files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}