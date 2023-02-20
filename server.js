// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Middleware*/
/* Dependencies */
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { response, request } = require('express');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// GET Route to retrieve projectData
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};
// POST Route to store date, temp and user input in projectData
const entry = [];
app.post('/addData',function getData(request,response){
  let entry = request.body;
  console.log(entry.temp);

  projectData["temp"] = entry.temp;
  projectData["feel"] = entry.feel;
  projectData["date"] = entry.date;
 
  response.send(projectData);
})
  //projectData.push(entry);
  console.log(projectData);

 
// Setup Server
app.listen(8080, () => {
  console.log('Running server on localhost: localhost:8080 }')
});
