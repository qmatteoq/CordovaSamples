// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
module TypescriptSample {
    "use strict";

    export module Application {
        export function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }

        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);

            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
            var element = document.getElementById("deviceready");
            element.innerHTML = 'Device Ready';
            element.className += ' ready';

            var button = document.getElementById("getPosition");
            button.onclick = () => {
                getUserPosition();
            }
        }

        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }

        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }

    }

    window.onload = function () {
        Application.initialize();
    }

    export function getUserPosition() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    function onSuccess(position) {
        var pos = new Position(position.coords.latitude, position.coords.longitude);
        var result = pos.convertToString();
        navigator.notification.alert(result, null);
    }

    function onError(error) {
        console.log(error.message);
    }


    export class Position {
        latitude: number;
        longitude: number;

        constructor(public lat, public long) {
            this.latitude = lat;
            this.longitude = long;
        }

        public convertToString() {
            var result = "Latitude: " + this.latitude + " - Longitude: " + this.longitude;
            return result;
        }
    }
}
