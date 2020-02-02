# cfml-electron
An example of how to run CommandBox (Any CFML Engine) inside of Electron.

## Installation
To install, you first need to install Node/NPM if you haven't already. This method could also be used for any Node.JS app.

## Why CommandBox?
I mainly moved from straight Lucee to CommandBox due to the flexiilty of CommandBox. We can define which CFML engine we want to use, as well as control it much easier. I also hope to have CommandBox be able to run with `.asar` builds, but we will see.

### Clone this repo somewhere.

`git clone https://github.com/fyroc/cfml-electron.git`

`cd cfml-electron`

### Install NPM Modules

`npm install`

### Run electron

`npm start`

## Using Commandbox

- Upload your ColdFusion files to `/cfml`
- Edit the `server.json` file to fit your needs, just be sure the port matches what is in the main.js file
- You can also access CommandBox with http://localhost:8888/ and the systemtray (can be hidden as well)

## Notes

If you want to use electron-builder to build this, make sure `"asar": false` or else CommandBox will not run.
