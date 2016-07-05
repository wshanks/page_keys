Page Keys
=========
Page Keys is a template Firefox WebExtension for adding keyboard shortcuts to a webpage with [Mousetrap](https://craig.is/killing/mice).

To adapt it for a specific site:

1. Edit `content.js` to include the desired keyboard shortcuts.
2. Edit `manifest.json` to change the `name`, `description`, and `id` fields.
3. Edit `options/options.js` to set the default page url regular expression.
4. Update the Makefile if you want to change the xpi name
5. Possibly change the icon in `icons` (and update `manifest.json`).

Acknowledgements
================
Keyboard shortcuts are created using the [Mousetrap](https://craig.is/killing/mice) library.
The keyboard icon was taken from the [Google Design Material Icons set](https://design.google.com/icons/).
