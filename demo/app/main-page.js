"use strict";

var Observable = require('data/observable').Observable;

var page;
var bc = new Observable({keyboardStatus: 'Hiding'});
var btn;
function onNavigatingTo(args) {
    page = args.object;
    page.bindingContext = bc;
    btn = page.getViewById('btn');
    btn.isEnabled = false;

}
exports.onNavigatingTo = onNavigatingTo;

exports.closeKeyboard = function() {
   var text = page.getViewById('text');
    text.dismissSoftInput();
};

exports.onKeyboard = function(evt) {
    if (evt.showing) {
        bc.set('keyboardStatus', 'Showing');
        if (btn) {
            btn.isEnabled = true;
        }
    } else {
        bc.set('keyboardStatus', 'Hiding');
        if (btn) {
            btn.isEnabled = false;
        }
    }
};