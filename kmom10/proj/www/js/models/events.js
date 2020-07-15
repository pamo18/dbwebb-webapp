/* global cordova */
"use strict";

import m from "mithril";
import { connection } from "../models/connection.js";
import { errorHandler } from "../models/errorhandler.js";
import { stations } from "../models/stations.js";

let events = {
    current: { data: [] },
    file: 'events.json',
    show: [],
    nearby: [],
    load: function() {
        if (events.current.data.length === 0) {
            events.readFromFile(events.file, function(data) {
                events.current.data = data;
            });
            if (connection.online()) {
                events.loadEvents();
            }
        }
    },
    loadEvents: function() {
        return m.request({
            method: "GET",
            url: `https://polisen.se/api/events`
        }).then(function(result) {
            events.current.data = result;
            console.log(result);
            events.writeToFile(events.file, events.current.data);
        });
    },
    nearbyStation: function(id) {
        events.current.data.forEach(function(event) {
            if (event.id == id) {
                events.show = event;
                events.show.station = [];
                events.nearby = [];

                stations.current.data.forEach(function(station) {
                    if (station.name.includes(event.location.name)) {
                        events.nearby.push(station);
                        events.show.station.push({
                            id: station.id,
                            name: station.name
                        });
                    }
                });
            }
        });
    },
    readFromFile: function(fileName, cb) {
        var pathToFile = cordova.file.dataDirectory + fileName;

        window.resolveLocalFileSystemURL(pathToFile, function (fileEntry) {
            fileEntry.file(function (file) {
                var reader = new FileReader();

                reader.onloadend = function () {
                    cb(JSON.parse(this.result));
                };
                reader.readAsText(file);
            }, errorHandler.bind(null, fileName));
        }, errorHandler.bind(null, fileName));
    },
    writeToFile: function(fileName, data) {
        data = JSON.stringify(data);
        window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (directoryEntry) {
            directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {
                fileEntry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function () {
                        console.log('Write of file "' + fileName + '"" completed.');
                        events.readFromFile(fileName, function(data) {
                            console.log(data);
                        });
                    };
                    fileWriter.onerror = function (e) {
                        console.log('Write failed: ' + e.toString());
                    };
                    var blob = new Blob([data], { type: 'text/plain' });

                    fileWriter.write(blob);
                }, errorHandler.bind(null, fileName));
            }, errorHandler.bind(null, fileName));
        }, errorHandler.bind(null, fileName));
    }
};

export { events };
