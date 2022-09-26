# Notico

Notico is a social media app with mock backend. A user can login/logout and signup to a profile. Create, like, comment, edit, delete a post. Like/Edit a comment.Bookmark posts. The user can follow/ unfollow other users. A user can edit their profile. etc.. 


Tech Stack: Redux-Toolkit, ReactJS, Material UI.

## Installation

* First clone the Repo.
* ```cd folder```.
* ``` npm install ``` to install node_modules and package-lock.json
* ```npm start``` to start the server. 

## App Components
* HomePage
* Login/Signup Page
* Bookmark
* Comment Page
* User Profile
* Edit Profile
* Single Post page

### Home Page
This page fetches posts and users from the databse renders. If the user is logged in. The user can view their likes,post actions etc..


Home Page:
![Home Page](./screenshots/Screenshot%202022-09-26%20092143.png)


### Login/Signup
The user can login to their existing accout or create a new account. A unique JWT token is generated and stored in the local storage. Any API requests (like,comment,delete etcc...) is done through the JWT token stored in local storage. 


Login :


![Login](./screenshots/Screenshot%202022-09-26%20101218.png)

Signup: 


![Singup](./screenshots/Screenshot%202022-09-26%20101236.png)


### Bookmarks.

A user can bookmark any post. 

Bookmarks: 
![Bookmark Page](./screenshots/Screenshot%20(266).png)

### Comment Page

![Comment Page](./screenshots/Screenshot%20(264).png)

### User Profile
A user can view any profile and check their post, following and followers etc. 

Profile :
![User Profile](./screenshots/Screenshot%202022-09-26%20101650.png)


### Edit Profile

User can change profile details. Add bio, portfolio etc..., and change the profile picture from default by providing an image link.

Edit Profile: 
![Edit profile](./screenshots//Screenshot%202022-09-26%20101236.png)

### Single Post page

This page displays the comments and users who have liked the post 

Single Post: 

![single post](./screenshots/Screenshot%202022-09-26%20102540.png)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
