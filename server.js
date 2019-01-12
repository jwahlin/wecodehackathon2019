const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// To Do List / Faux data store
let toDoList = [
  'Create an awesome hackathon project!',
  'Don\'t forget to take a break'
];

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ toDoList });
});

app.post('/api/addItem', (req, res) => {
  // displays in the terminal
  console.log(req.body);
  toDoList.push(req.body.post);
  res.send('Item added!');
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

function filterVolunteerOpps() {
  // TODO: Get volunteer profile, parse CSV
  // TODO: Filter volunteer opportunities by volunteer profile

  // TODO: goal create function that returns array of objects when given a csv

  // var matches = []
  // csv
  // .fromPath("fake-volunteer-opps.csv", {headers : true})
  // .on("data", function(data){
        
  //   // If Volunteer cannot pass background check only show opps that don't require background check.

  //   // Filter by background check
  //   if("No" == data['Does it require a background check?']) {
  //     matches.push(data)
  //   }


    
  // })
  // .on("end", function(){
  //     console.log("done");
  //     console.log(matches)

  // });
  
  // Return volunteer opportunities or a message/error if no matches
}
filterVolunteerOpps()
