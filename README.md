# github profile finder

The logic of this app is very similar as the dictionary app:

* The app has two pages, the home page and the saved profiles page.
* In the home page, the app allows users to search for a GitHub user profile by entering a username.
* In the home page, the app displays the user's profile information, such as the user's name, username, bio, and the number of followers and following if the user exists.
* In the home page, the app allows users to save a profile that has been searched for by clicking the save button. Once the save button is clicked, the app will save the profile information, and display a check mark in the place of the save button.
* In the saved profiles page, the app displays a list of saved profiles, with each profile showing the user's avatar, username, and two buttons - viewing button and delete button. The viewing button, once clicked, will take the user to the home page and display the profile information of the saved profile. The delete button, once clicked, will delete the target saved profile from the list.

The codebase of the frontend is in the `/frontend` folder, and the codebase of the backend is in the `/backend` folder. 
Before starting the project, you need to install the dependencies by running `npm install`. To start the project, you can run `npm start`.

if dependencies are installed already, can just use the script and run ./start.sh
