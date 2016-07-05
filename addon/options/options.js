'use strict'
/* global chrome, document */

function saveOptions(e) {
    chrome.storage.local.set({
        urlmatch: document.querySelector('#urlmatch').value
    });
}

function restoreOptions() {
    chrome.storage.local.get('urlmatch', (res) => {
        document.querySelector('#urlmatch').value = res.urlmatch
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);
