# WE CODE 2019 Team 1 -  Smash The Patriarchy 

# About our team

We are Sheila, Colleen, Tonja, Jamie and Becca

# Match volunteers with available opportunities for IRCO

# About our app

The brainchild for our project was from one of our team member's attempts to enroll as a volunteer in the existing Volunteer site - (https://irco.org/support/volunteer.html)

We built this project from baseline of the WeCode starter pack (https://github.com/wecodehackathon/kickstart-js). 

Please refer to the kickstart.js details for the prerequisites and install instructions.  Our hackathon work involved adding new functions to the existing base kit for new functionality

We started with designing two Google forms:

1) Google form for the IRCO administrators to detail available volunteer opportunities - 

(https://docs.google.com/forms/d/e/1FAIpQLScuROS0huYrepw1szpVcnI_M2oU1-hbzG_Rz743h6AoBBPPoA/viewform)

2) Google form for the volunteers to enter basic information about their interests and availability:

(https://docs.google.com/forms/d/e/1FAIpQLSecITBTJwdP6395BYvlu7ubWQTZKnQP_QPJ4YwdS-da34vb1Q/viewform)


Next, we designed a function to read the volunteer details and match them with the available opportunities based on:

1) Does the volunteer match basic requirements like being able to pass a background check, or owning a car.
2) Does the volunteer live or work close enough to the available volunteer opportunity?

This code is located in the updated server.js file.

The final result is an updated app.js that renders a web page to the potential volunteer a list of matched opportunities based on their input.

# Next steps

With a single day of programming time,  we've created the updated functions and google docs as a Proof of Concept.  The next steps include:

1) Update the server.js to read directly from the google forms instead of demo data used to mock up the app

2) Update the app.js to control the rendering of the google forms and perform a live lookup in the volunteer opportunities dataset with actual data

3) Load the data from the UI to and from an open-source database to securely store the information from volunteer candidates




