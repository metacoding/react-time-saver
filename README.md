# react-time-saver v1.0.0
##### React, Redux, Firebase, material UI starter kit

The project is an extension based on a simple and nice template:
https://github.com/ndrabins/react-redux-firebase-material-electron-starter

Because that project did not get any update for a long time I have updated it with the latest packages and also added minimal Google authentication plus firebase configuration to the project
I also added a few ready made templates from material-ui project. So it is ready for starting your new Web and/or Electron based projects built upon React, Redux, Firebase and material-ui. 
The original project works well with Yarn but I use to use npm instead. So I recommend you have your Python2.7 installed otherwise you might get some error during npm install.

If you see any issue, I appreciate if you create an issue with steps to reproduce. So that I can check and fix it if possible ASAP.
## Demo
Please check one of these two URLs:
* https://react-time-saver.web.app/
* https://react-time-saver.firebaseapp.com/ 
## Libraries Used
* React Router 5 
* Material UI v4.0
* Redux
* Redux-Pack
* Redux-Persist
* Redux-devtools-extension
* Firebase
* Electron

LICENSE: MIT

Mehran Taherimoud

## Screenshots
- Web app, Home Page
<img src="https://raw.githubusercontent.com/metacoding/react-time-saver/master/public/images/web-home.png" width="700">

- Web app, Dashboard
<img src="https://raw.githubusercontent.com/metacoding/react-time-saver/master/public/images/web-dashboard.png" width="700">

- Electron, Home page
<img src="https://raw.githubusercontent.com/metacoding/react-time-saver/master/public/images/electron-home.png" width="700">

- Electron, Signin by Google
<img src="https://raw.githubusercontent.com/metacoding/react-time-saver/master/public/images/electron-signin.png" width="700">

## How to use this project
- First make sure you have electron and firebase tools installed.
- Clone the project and configure firebase by editing `firebase.config.js` located in `config` folder.
- After configuring correctly, try `npm install` and `npm start` to run the project locally. 
Both browser and electron versions of the app will be launched.
- To build the project run `npm build`. The result will be put in build folder.
- To deploy the project to your firebase hosting, first make sure you have logged in locally into firebase by using `firebase login` command.
Now you can run `firebase deploy`. the contents of the build folder will be deployed to your project hosted on firebase.

## Useful Resources!
#### Parent Project
* https://github.com/ndrabins/react-redux-firebase-material-electron-starter

#### React 
* https://reactjs.org/docs/hello-world.html

#### React Router
* https://reacttraining.com/react-router/web/example/basic

#### Material UI
* https://material-ui-next.com/

#### Firebase
* https://firebase.google.com/docs/web/setup

#### Electron
* https://gist.github.com/matthewjberger/6f42452cb1a2253667942d333ff53404

#### Redux
* http://redux.js.org/docs/basics/UsageWithReact.html
* devtools - https://github.com/zalmoxisus/redux-devtools-extension 
* devtools extension - https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

#### Redux-Pack
* https://github.com/lelandrichardson/redux-pack

#### Redux-Persist
* https://github.com/rt2zz/redux-persist

#### Contribution
if you find any bug or have any suggestion, please feel free to open a new issue for further discussions. 
