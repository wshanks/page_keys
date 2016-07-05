'use strict'
/* global chrome, console */

// Set default option values
chrome.storage.local.get('urlmatch', (res) => {
    if (!res.urlmatch) {
        chrome.storage.local.set({
            urlmatch: '^https?:\/\/www\.wikipedia\.org'
        })
    }
})

function testAndLoad(status, url, matchUrl) {
    var urlRe = new RegExp(matchUrl)
    if (status == 'loading' && urlRe.test(url)) {
        chrome.tabs.executeScript(null,
                                  {file: 'libs/mousetrap/mousetrap.min.js'},
                                  function() {
            chrome.tabs.executeScript(null, {file: 'content.js'})
        })
    }
}


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.storage.local.get('urlmatch', (res) => {
        testAndLoad(changeInfo.status, tab.url, res.urlmatch)
    })
})
