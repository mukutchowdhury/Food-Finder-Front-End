#!/bin/sh
#run frontend against local API server
export VITE_URL_PRE="http://127.0.0.1:8000/"
npm run dev