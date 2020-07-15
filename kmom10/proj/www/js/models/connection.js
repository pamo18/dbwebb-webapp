/* global Connection */
"use strict";

let connection = {
    check: function() {
        var networkState = navigator.connection.type;
        var states = {};

        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'Offline';

        return 'Connection type: ' + states[networkState];
    },
    online: function() {
        var networkState = navigator.connection.type;

        return (networkState == Connection.NONE) ? false : true;
    },
    offline: function() {
        var networkState = navigator.connection.type;

        return (networkState == Connection.NONE) ? true : false;
    }
};

export { connection };
