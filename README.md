[![npm](https://img.shields.io/npm/v/nativescript-keyboardshowing.svg)](https://www.npmjs.com/package/nativescript-keyboardshowing)
[![npm](https://img.shields.io/npm/l/nativescript-keyboardshowing.svg)](https://www.npmjs.com/package/nativescript-keyboardshowing)
[![npm](https://img.shields.io/npm/dt/nativescript-keyboardshowing.svg?label=npm%20d%2fls)](https://www.npmjs.com/package/nativescript-keyboardshowing)

# nativescript-keyboardShowing
A NativeScript plugin to deal knowing if the keyboard is showing or hiding.

## License

This is released under the MIT License, meaning you are free to include this in any type of program -- However for entities that need a support contract, changes, enhancements and/or a commercial license please contact me at [http://nativescript.tools](http://nativescript.tools).

I also do contract work; so if you have a module you want built for NativeScript (or any other software projects) feel free to contact me [nathan@master-technology.com](mailto://nathan@master-technology.com).

[![Donate](https://img.shields.io/badge/Donate-PayPal-brightgreen.svg?style=plastic)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=HN8DDMWVGBNQL&lc=US&item_name=Nathanael%20Anderson&item_number=nativescript%2dkeyboardshowing&no_note=1&no_shipping=1&currency_code=USD&bn=PP%2dDonationsBF%3ax%3aNonHosted)
[![Patreon](https://img.shields.io/badge/Pledge-Patreon-brightgreen.svg?style=plastic)](https://www.patreon.com/NathanaelA)

## Sample Snapshot
 

## Installation 

tns plugin add nativescript-keyboardshowing  


## Usage

To use the module you just `require()` it:

 
```js
var keyboard = require( "nativescript-keyboardshowing" );
console.log("keyboard is", keyboard.isShowing() ? "showing" : "hidden");

exports.onKeyboard = function (evt) {
    console.log("Keyboard is now", evt.showing ? 'showing' : 'hidden');
};
```



## You ask, how exactly does this help?
Have you ever needed to know if the Soft-keyboard is showing?   This plugin gives you that information via a event or a function call.


### You can add to any page you need it the following Function:
#### exports.onKeyboard = function(args) { } 
##### args.showing = true | false
##### args.object = the current page


### Additional Helper Method

```js 
var keyboard = require('nativescript-keyboardshowing');
``` 

#### keyboard.isShowing()
##### returns: true or false 
```js
var keyboard = require( "nativescript-keyboardshowing" );
console.log("keyboard is", keyboard.isShowing() ? "showing" : "hidden");
```
 
