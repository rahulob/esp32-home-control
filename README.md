# Description
This is a  project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [Next.js](https://nextjs.org/) for the front-end of this app 
- [Firebase](https://www.firebase.com) for storing and updating real time data.

This project is basically a small automation project which is used to control the ESP32 microcontroller which in turn will control the Relay modules connected to it.

For this project we only used 4 relay module.
# Creating Front-end of the project
Clone this project and run the following commands
```
npm install
npm run dev
```
If you use yarn then run these commands instead
```
yarn install
yarn run dev
```
After the second command your development server would be up and running on [localhost:3000](https://localhost:3000).
You can easily deploy your front-end on [`Vercel`](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
## Setup Firebase
First create a project on firebase. 
After that create realtime database, add variables to the real time database. For example, my database looks like this

![Firebase database screenshot](https://user-images.githubusercontent.com/61629739/178055789-e18230a2-79f7-4077-8c9d-ec3e806cc18e.png)


Create a web app inside that project. Firbase config values are shown in the firebase console after creating the web app. Paste them inside the `./lib/firebase.ts` file.


## Setting up the ESP32
We can simply do this by uploading the `main.ino` file. First you have to put your Network credentials(Wifi SSID and PASSWORD). Also put the firebase api key and database url in the file. Now install the arduino IDE and also install the `ESP32 board library` and `Firebase Esp client` library. You can now upload the code to the ESP32 and you are good to go.

After uploading the code, connect the circuit according to circuit diagram. When the ESP32 turned on after supplying power, it's blue LED will glow which indicates that it is connected to the WIFI. After that it will work using the front-end of the project.
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
