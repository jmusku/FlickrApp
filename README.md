Prerequisites to install 
1. Node.js
2. Visual Studio Code

1. Go to https://github.com/jmusku/FlickrApp.git
2. Click "Clone or Download"
3. Choose Download Zip
4. Unzip the downloaded to folder FlickrApp-master
5. Open Visual Studio Code. Then File -> Open Folder -> Choose FlickrApp-master/FlickrApp-master and then click Select Folder
6. Go to Terminal Menu -> Choose New Terminal
7. In Terminal window - type "npm install"
8. In Terminal window - type "ng serve --open"
9. To Stop - Press Cntrl + c and choose Yes(Y) to terminate batch job.
10. Tests can be run using "ng test" command

Configuration can be changed as follows
1. Open src folder, and then environments.
2. To change API Key, FLCKR_API_KEY in environment.ts for dev enivironment and environment.prod.ts for prod enivironment
3. To change max record limit, REC_LIMIT in environment.ts for dev enivironment and environment.prod.ts for prod enivironment
4. To change argument type, SEARCH_ARG in environment.ts for dev enivironment and environment.prod.ts for prod enivironment