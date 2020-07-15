/* global cordova */
/*eslint max-len: ["error", { "code": 140 }]*/
"use strict";

import m from "mithril";
import { connection } from "../models/connection.js";
import { errorHandler } from "../models/errorhandler.js";

let stations = {
    current: { data: [] },
    file: 'stations.json',
    show: [],
    load: function() {
        if (stations.current.data.length === 0) {
            stations.readFromFile(stations.file, function(data) {
                stations.current.data = data;
            });
            if (connection.online()) {
                stations.loadStations();
            }
        }
    },
    loadStations: function() {
        return m.request({
            method: "GET",
            url: `https://polisen.se/api/policestations`
        }).then(function(result) {
            stations.current.data = result;
            console.log(result);
            stations.writeToFile(stations.file, stations.current.data);
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
                        stations.readFromFile(fileName, function(data) {
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

export { stations };
