# Food-Finder-Front-End
This will be the frontend part of the Food Finder project! This repository contains code for the user interface and client-side logic of the Food Finder web application.

# BackEnd & FrontEnd Connection
For Mac Users:
    Run Backend first with these commands:
        sudo service mongod start
        mongoash
        ./local.sh
    Run Frontend second with these commands:
        ./local.sh

For Window Users:
    Run Backend first with these commands:
        sudo service mongod start
        mongoash
        ./local.sh
    Run Frontend second with these commands:
        ./.local.sh

# Project Overview
Food-Finder is a platform that will lep users discover and explore local restaurants. The frontend part of the project focus on creating a user-friendly interface so the user is able to interact with the features of the application, such as restaurant discovery, menu access, user authentication, and more. Furthermore, there is a Vendor Form for restaurant owners where they are able to create a restaurant for themselves and the customer is able to search up the restaurant in the search button.

# Technologies Used
- HTML/CSS: Used to style the page
- JavaScript: Used for the interaction between the client and the website
- Axios: Being able to make requests to fetch data
- React.js: JavaScript library for building user interfaces

# HomePage
- The homepage of Food Finder will welcome users with a clean and modern design
- Users will see the main navigation menu with options like "Enter Zipcode" and Sign in And Sing Up on the top right corner of the page
- A Search bar for the user to look-up restaurants by zipcode

# Login Page
- Provides user with the ability to login to their accounts or register for a new account if they haven't already done so
- Users will be prompted to enter their email address and password to login
- The login page will have validation to make sure the email address is in the correct format and that the password meets any specified requirements
- Once logged in the users will be able to use all of the tools

# Sign Up Page
- User will enter First Name, Last Name, Email, Password
- Sign up Button to take them back to the home page as a customer

# Vendor Page
- Now in a restaurant owner mode, the ownser is able to create a new restraunt
- The following information is requred to add the restaurant to the page: Name, Address, Zipcode, ImageURl, Phone, Cuisine, Keywords, Category, Opening Hours, Closing Hours
- The ImageUrl of any website can be inserted into the box
- Ability to delete and add a Restaurant menu 

# Restaurant View Page
- Able to create a a menu item after putting in the following information: Name, Description, Price, Category, Image
- All of the information must be entered to move on to the next page
- Once the restaurant is clicked, it goes to the view page and the user is able to leave the restaurant a review
- There is a comment section and the Rating section. The Rating is able to go up till 5.

