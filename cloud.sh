#!/bin/sh
#run frontend against local API server
export REACT_APP_URL_PRE="http://mongodb+srv://jw6680:softpwd6680"
                        + "@food-finder.ltqe7ym.mongodb.net/"
                        + "?retryWrites=true&w=majority&appName=Food-Finder/"
npm run dev