chrome.runtime.onInstalled.addListener(() => {
  console.log("Installed!");
});

chrome.tabs.onCreated.addListener(() => {
  console.log("New Tab's been created!");
});
