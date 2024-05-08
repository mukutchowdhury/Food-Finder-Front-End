# Food-Finder-Front-End
This will be the frontend part of the Food Finder project! This repository contains code for the user interface and client-side logic of the Food Finder web application.

# BackEnd & FrontEnd Connection
For Mac Users:
    Run Backend first with these commands:
        1. sudo service mongod start
        2. mongoash or mongosh
        3. ./local.sh
    Run Frontend second with these commands:
        1. ./local.sh

For Window Users:
    Run Backend first with these commands:
        1. sudo service mongod start
        2. mongoash or mongosh
        3. ./local.sh
    Run Frontend second with these commands:
        1. ./.local.sh

# Project Overview
Food-Finder is a platform that will let users discover and explore local restaurants. The frontend part of the project focus on creating a user-friendly interface so the user is able to interact with the features of the application developed in the backend server, such as restaurant discovery, menu access, user account authentication, leaving reviews, and more. Furthermore, there is a Vendor Form for restaurant owners where they are able to create a restaurant for themselves and the customer is able to search up the restaurant in the search button.

# Technologies Used
- HTML/CSS: Used to style the page
- JavaScript: Used for the interaction between the client and the website
- Axios: Being able to make requests to fetch data
- React.js: JavaScript library for building user interfaces

# HomePage
- The homepage of Food Finder will welcome users with a clean and modern design
- Users will see the main navigation menu with options like "Enter Zipcode" and Sign in And Sing Up on the top right corner of the page
- A Search bar for the user to look-up restaurants by zipcode even without an account


# Login Page
- Provides user with the ability to login to their accounts or register for a new account if they haven't already done so
- Users will be prompted to enter their email address and password to login
- The login page will have validation to make sure the email address is in the correct format and that the password meets any specified requirements
- Once logged in the users will be able to use all of the tools

# Sign Up Page
- User will enter First Name, Last Name, Email, Password
- Sign up Button to take them back to the home page as a customer

# Vendor Page
- The Vendor Page can be accessed from the user drop down in the top right corner
- Now in a restaurant owner mode, an owner is able to create a new restaurant 
- The following information is requred to add the restaurant to the page: Name, Address, Zipcode, ImageURl, Phone, Cuisine, Keywords, Category, Opening Hours, Closing Hours
- The ImageUrl of any website can be inserted into the box
- Ability to delete and add a Restaurant menu 

# Restaurant View Page
- Information about the restaurant like number, address, and hour is displayed along with the average rating
- Able to create a menu item after putting in the following information: Name, Description, Price, Category, Image
- Users can search for items in the menu 
- All of the information must be entered to move on to the next page
- Once the restaurant is clicked, it goes to the view page and the user is able to leave the restaurant a review and see the restaurant image or deals
- There is a Rating section. The Rating is able to go up till 5 and includes a comment.

# Developer Page
    - With a special developer account, the user has control over more of the site
    - 2 special features can be accessed from the top right user drop down and entering the developer page for accounts with developer status
    - One feature is managing categories where you can view active categories, delete them, or insert a new category with a name and description
    - The second feature is searching and retrieving users for the purposes of user management
