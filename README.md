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

API Can be changed as fallows
1. Open src folder, and then environments.
2. change FLCKR_API_KEY in environment.ts for dev enivironment
3. Change FLCKR_API_KEY in environment.prod.ts for prod enivironment