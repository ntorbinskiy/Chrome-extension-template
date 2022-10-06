# Chrome-extension-template

## Developing a new extension

I'll assume that you already read the [Webpack](https://webpack.js.org/) docs and the [Chrome Extension docs](https://developer.chrome.com/docs/extensions/mv3/getstarted/).

**Check if your Node.js version is >= 6.**
1.Clone the repository.
2.Install yarn.
3.Run yarn.
4.Change the package's name and description on package.json.
5.Change the name of your extension on src/manifest.json.
6.Run yarn run start
7.Load your extension on Chrome following:
  -Access chrome://extensions/
  -Check Developer mode
  -Click on Load unpacked extension
  -Select the build folder.
  -Have fun!
