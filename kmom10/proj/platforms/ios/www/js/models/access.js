/* global cordova */
"use strict";

import m from "mithril";
import { config } from "../config/config.js";
import { errorHandler } from "../models/errorhandler.js";

let access = {
    current: { data: [] },
    loggedin: { data: [] },
    file: 'session.json',
    load: function() {
        var currentUser = {
            api_key: config.api,
            email: access.current.email,
            password: access.current.pass
        };

        return m.request({
            method: "POST",
            url: "https://lager.emilfolino.se/v2/auth/login",
            data: currentUser
        }).then(function(result) {
            access.loggedin = result;
            access.token.value = access.loggedin.data.token;
            var now = new Date();

            now.setDate(now.getDate() + 1);
            var session = [{
                time: now.toJSON(),
                token: access.loggedin.data.token
            }];

            access.writeToFile(access.file, session);
            m.route.set("/events-view");
        }).catch(function() {
            m.route.set("/register");
        });
    },
    save: function() {
        var newUser = {
            api_key: config.api,
            email: access.current.email,
            password: access.current.pass
        };

        return m.request({
            method: "POST",
            url: "https://lager.emilfolino.se/v2/auth/register",
            data: newUser
        }).then(function(result) {
            console.log(result);
            access.load();
        });
    },
    token: {
        value: null
    },
    session: function() {
        if (!access.token.value) {
            access.readFromFile(access.file, function(data) {
                if (data.length > 0) {
                    var now = new Date;
                    var session = new Date(data[0].time);

                    if (session > now) {
                        access.token.value = data[0].token;
                        m.redraw();
                    } else {
                        m.route.set("/");
                    }
                }
            });
        }
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

export { access };
