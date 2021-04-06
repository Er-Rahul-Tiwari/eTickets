# Installation Guide

### To update packages follow below steps

    1) go to server folder
    2) run "npm run install-all" command in terminal

### Setup environment files

    1) copy client/.env.example and make client/.env for linux user use this command: cp client/.env.example client/.env
    2) copy server/.env.example and make server/.env for linux user use this command: cp server/.env.example server/.env

### To run server follow below steps

    1) go to server folder
    2) run "npm run devlocal" command in terminal

### configure MongoDB

    1) Create an account on https://cloud.mongodb.com/ and setup a project
    2) Then, Build a cluster
    3) Allow it from IPs. To allow from all use 0.0.0.0/0. To add this, click on "Connect" button, it will ask the IP address.
    4. Then, Create a user for this cluster. It will as on the same screen when you click on "Connect" button.
    5) Choose a connection method "Connect your appllication". You will find a MongoDB URI connecion string in "Connect your application" tab. The Password you need to replace by created recently.
    6) Use this connection string and put in the server/config/default.json(copy server/config/default.json.example to make server/config/default.json) as json object element "mongoURI": <mongodb-connection-string>
