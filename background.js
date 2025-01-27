chrome.action.onClicked.addListener((tab) => {
  if (tab.url) {
    const index = tab.url.indexOf('?');
    if (index !== -1) {
      const newUrl = tab.url.substring(0, index);
      chrome.tabs.update(tab.id, { url: newUrl });
    }
  }
});
