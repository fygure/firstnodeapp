// const { readFile, readFileSync } = require('fs');
// const txt = readFileSync('./hello.txt', 'utf8');
// console.log(txt);
// Another way below


// readFile('./hello.txt', 'utf8', (error, txt) => 
// {
//     console.log(txt)
// });



// const { EventEmitter } = require('events');
// const { readFile } = require('fs');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('lunch', () => 
// {
//     console.log('sushi')
// })

// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');


// //console.log(process.platform);
// //console.log(process.env.USER);

// process.on('exit', function()
// {
//     // do something!
//     console.log('exiting . . .')

// })

/* 
    Typical fullstack web app. Server will live on a URL.

    When a user makes a request to this URL in the browser,
    the server will respond with some html.

    In the code, we first create an instance of an express app.

    An express app allows us to create different URLs and endpoints
    that a user can navigate to in the browser.

    Then we define code for the server to handle those requests.

    When a user navigates to a request in the browser, it is called a get request.
    (requesting data from server, not modify or update server)



*/

const express = require('express');
const { readFile } = require('fs');

const app = express();


//First argument - URL the user will navigate to.
app.get('/', (request, response) => 
{

    //Error catching
    readFile('./home.html', 'utf8', (err, html) => {

        if (err) {
            response.status(500).send('sorry, out of order')
        }

        response.send(html);

    })

});


/* 
    dont get in callback hell
    use promises instead of callbacks
    instead of importing read files from fs, we import from fs.promises
*/ 

//Alternate way
// app.get('/', async (request, response) => {

//     response.send( await readFile('./home.html', 'utf8') );

// });





// Now, tell express app to start listening to incoming requests.
// Define a port (comes from node environment variable)

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))
app.set('trust proxy', true);

// how do we deploy to the cloud so people can actually use it?

