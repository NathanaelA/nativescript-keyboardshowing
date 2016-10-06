/**********************************************************************************
* (c) 2016, Nathanael Anderson.
* Licensed under the MIT license.
*
* Version 1.0.0                                        nathan@master-technology.com
**********************************************************************************/
'use strict';

/* global android, UIKeyboardDidShowNotification, UIKeyboardDidHideNotification */


var frame = require('ui/frame');

function trackAndroidKeyboard() {
    if (!frame.topmost()) { setTimeout(trackAndroidKeyboard, 100); return; }
    if (!frame.topmost().currentPage) { setTimeout(trackAndroidKeyboard, 100); return; }

    var cv = frame.topmost().currentPage.android;

    cv.getViewTreeObserver().addOnGlobalLayoutListener(new android.view.ViewTreeObserver.OnGlobalLayoutListener({
        onGlobalLayout: function () {
            // Grab the Current Screen Height
            var rect = new android.graphics.Rect();
            cv.getWindowVisibleDisplayFrame(rect);
            var screenHeight = cv.getRootView().getHeight();
            var missingSize = screenHeight-rect.bottom;


            if (missingSize > (screenHeight * 0.15)) {
                notifyKeyboard(true);
            } else {
                notifyKeyboard(false);
            }
        }
    }));
}


function trackiOSKeyboard() {
    var application = require('application');
    application.ios.addNotificationObserver(UIKeyboardDidShowNotification, function() {
        notifyKeyboard(true);
    });
    application.ios.addNotificationObserver(UIKeyboardDidHideNotification, function() {
        notifyKeyboard(false);
    });
}


if (global.android) {
    trackAndroidKeyboard();
} else {
    trackiOSKeyboard();
}


var lastNotification = false;
function notifyKeyboard(isShown) {
    if (isShown === lastNotification) { return; }
    // For a notification to occur, the frame, topmost() and currentPage has to exist; so we won't bother checking again...
    var currentPage = frame.topmost().currentPage;
    lastNotification = isShown;

    if (currentPage.exports && typeof currentPage.exports.onKeyboard === "function") {
        currentPage.exports.onKeyboard({showing: isShown, object: currentPage});
    }

}

function isShowing() {
    return lastNotification;
}

exports.isShowing = isShowing;



