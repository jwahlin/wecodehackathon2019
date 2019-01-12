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
app.get('/api/filterOpps', (req, res) => {
  res.send(filterVolunteerOpps());
});

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

let volunteerOpps = [
  {
      'Timestamp': '1/12/2019 11:55:18',
      'Name of the position': 'Photography Volunteer',
      'What program area is this position in?': 'Administration',
      'Where is this opportunity located?': 'Main Office; 97220',
      'Does it involve working with kids?': 'Maybe',
      'Does it require a background check?': 'No',
      'When is the volunteer needed? [Monday]': '',
      'When is the volunteer needed? [Tuesday]': '',
      'When is the volunteer needed? [Wednesday]': '',
      'When is the volunteer needed? [Thursday]': '',
      'When is the volunteer needed? [Friday]': '',
      'When is the volunteer needed? [Saturday]': 'Morning, Midday, Afternoon, Evening',
      'When is the volunteer needed? [Sunday]': 'Morning, Midday, Afternoon, Evening',
      'Do you have a car?': 'Yes' },
  {
      'Timestamp': '1/12/2019 11:55:48',
      'Name of the position': 'Tutor/Homework help',
      'What program area is this position in?': 'Youth',
      'Where is this opportunity located?': 'Africa House; 97220',
      'Does it involve working with kids?': 'Yes',
      'Does it require a background check?': 'Yes',
      'When is the volunteer needed? [Monday]': 'Afternoon',
      'When is the volunteer needed? [Tuesday]': 'Afternoon',
      'When is the volunteer needed? [Wednesday]': 'Afternoon',
      'When is the volunteer needed? [Thursday]': 'Afternoon',
      'When is the volunteer needed? [Friday]': 'Afternoon, Evening',
      'When is the volunteer needed? [Saturday]': 'Flexible',
      'When is the volunteer needed? [Sunday]': 'Flexible',
      'Do you have a car?': 'Yes' },
  {
      'Timestamp': '1/12/2019 11:57:09',
      'Name of the position': 'HR Specialist',
      'What program area is this position in?': 'Employment and Training Services',
      'Where is this opportunity located?': 'Asian Family Center; 97213',
      'Does it involve working with kids?': 'No',
      'Does it require a background check?': 'No',
      'When is the volunteer needed? [Monday]': '',
      'When is the volunteer needed? [Tuesday]': 'Evening',
      'When is the volunteer needed? [Wednesday]': 'Evening',
      'When is the volunteer needed? [Thursday]': 'Evening',
      'When is the volunteer needed? [Friday]': 'Flexible',
      'When is the volunteer needed? [Saturday]': '',
      'When is the volunteer needed? [Sunday]': '',
      'Do you have a car?': 'No' }
];

let volunteer = {
      'Timestamp': '1/12/2019 11:05:39',
      'Name': 'Lily Name',
      'Email': 'lilyname@yahoo.com',
      'Phone number': '3248889605',
      'Zip Code': '971011',
      'Miles': '15 miles',
      'Do you have a car?': 'No',
      'Do you want to work with kids?': 'No',
      'Can you pass a background check?': 'No',
      'Please select any program area that interests you': 'Development, Refugee Career Pathways Program',
      'What times are you available? [Monday]': '',
      'What times are you available? [Tuesday]': '',
      'What times are you available? [Wednesday]': '',
      'What times are you available? [Thursday]': '',
      'What times are you available? [Friday]': '',
      'What times are you available? [Saturday]': 'Morning, Midday, Afternoon',
      'What times are you available? [Sunday]': 'Morning, Midday, Afternoon',
      'Please submit your cover letter or resume': '' };

function filterVolunteerOpps() {
  var matches = []

  // If Volunteer cannot pass background check only show opps that don't require background check.
  if ( "No" == volunteer['Can you pass a background check?'] ) {
    var i;
    for ( i = 0; i < volunteerOpps.length; i++ ) {
      if ( volunteerOpps[i]['Does it require a background check?'] == "No" ) {
        matches.push(volunteerOpps[i])
      }
    }
  } else {
    matches = volunteerOpps;
  }

  console.log(matches)

  return matches;

  // Return volunteer opportunities or a message/error if no matches
}
filterVolunteerOpps()

// function filterVolunteerDist(volZipIn,oppZipIn,maxDistIn) {
//   // TODO: Compare volunteer opportunity to volunteer location for filtering
//   var zipcodes = require('zipcodes');

//   //var maxDist = 10;
//   //var volZip = 97229;
//   //var oppZip = 97214;
//   var volZip = volZipIn;
//   var oppZip = oppZipIn;
//   var maxDist = maxDistIn;

//   var distOK = new Boolean(false);

//   var dist = zipcodes.distance(volZip, oppZip); //In Miles
//     //  console.log("Distance between Volunteer and Opportunity = "||dist);
     
//       console.log("Distance between volunteer and location =  ");
//       console.log(dist);

      
//       distOK = dist <= maxDist;
//       console.log("Is distance within volunteer radius ?");
//       console.log(distOK);


//   // Return true/false if volunteer in range of opp
//   return distOK;
// };
// filterVolunteerDist()

