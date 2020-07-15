/* global cordova */
/*eslint max-len: ["error", { "code": 140 }]*/
"use strict";

import m from "mithril";
import { connection } from "../models/connection.js";
import { errorHandler } from "../models/errorhandler.js";

let regions = {
    current: { data: [] },
    file: 'regions.json',
    show: [],
    load: function() {
        if (regions.current.data.length === 0) {
            regions.readFromFile(regions.file, function(data) {
                regions.current.data = data;
            });
        }
        if (connection.online()) {
            regions.loadRegions();
        }
    },
    loadRegions: function() {
        return m.request({
            method: "GET",
            url: `https://catalog.skl.se/rowstore/dataset/8621fe21-0120-407e-a81f-705ef45f76d2/json?_offset=0&_limit=100`
        }).then(function(result) {
            regions.current.data = regions.current.data.concat(result.results);
            return m.request({
                method: "GET",
                url: `https://catalog.skl.se/rowstore/dataset/8621fe21-0120-407e-a81f-705ef45f76d2/json?_offset=100&_limit=100`
            }).then(function(result) {
                regions.current.data = regions.current.data.concat(result.results);
                return m.request({
                    method: "GET",
                    url: `https://catalog.skl.se/rowstore/dataset/8621fe21-0120-407e-a81f-705ef45f76d2/json?_offset=200&_limit=100`
                }).then(function(result) {
                    regions.current.data = regions.current.data.concat(result.results);
                    console.log(regions.current.data);
                    regions.writeToFile(regions.file, regions.current.data);
                });
            });
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
                        regions.readFromFile(fileName, function(data) {
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

export { regions };
