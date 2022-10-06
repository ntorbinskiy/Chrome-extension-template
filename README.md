# Chrome-extension-template

This is a **Chrome extension template** for @1alexvash

## Developing a new extension

_I'll assume that you already read the [Chrome Extension](https://developer.chrome.com/extensions/getstarted) doc._

1. Clone the repository.
2. Install [yarn](https://yarnpkg.com/lang/en/docs/install/).
3. Run `yarn`.
4. Change the package's name and description on `package.json`.
5. Change the name of your extension on `manifest.json`.
6. Run `yarn build`
7. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `dist` folder.
8. Have fun.
