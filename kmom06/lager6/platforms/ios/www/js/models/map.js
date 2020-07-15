"use strict";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { OpenStreetMapProvider } from "leaflet-geosearch";

import position from "../models/position.js";
import locationIcon from "../../location.png";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";

var currentMap;
let map = {
    showMap: function() {
        currentMap = L.map('map').setView([58.50482, 13.14982], 13);

        var customControl =  L.Control.extend({
            options: {
                position: 'topright'
            },
            onAdd: function (currentMap) {
                var container = L.DomUtil.create(
                    "div", "leaflet-bar leaflet-control leaflet-control-custom"
                );

                container.style.cursor = "pointer";
                container.style.backgroundColor = "white";
                container.onmouseover = function() {
                    this.style.backgroundColor = "#eee";
                };
                container.onmouseout = function() {
                    this.style.backgroundColor = "white";
                };
                container.style.backgroundImage = "url(img/current.png)";
                container.style.backgroundSize = "24px 24px";
                container.style.width = "24px";
                container.style.height = "24px";
                container.onclick = function() {
                    var lat = position.currentPosition.latitude;
                    var long = position.currentPosition.longitude;

                    if (lat && long) {
                        currentMap.setView([lat, long], 13);
                    }
                };

                return container;
            }
        });

        currentMap.addControl(new customControl());

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',    {
            attribution: `&copy;
            <a href="https://www.openstreetmap.org/copyright">
            OpenStreetMap</a> contributors`
        }).addTo(currentMap);
    },
    searchMap: function(person) {
        var geocoder = new OpenStreetMapProvider();

        geocoder
            .search({ query: `${person.address}, ${person.city}` })
            .then(function(result) {
                if (result.length > 0) {
                    L.marker(
                        [result[0].y, result[0].x]
                    ).addTo(currentMap).bindPopup(person.name + "<br>" + result[0].label);
                    currentMap.setView([result[0].y, result[0].x], 13);
                }
            });
    },
    showPosition: function() {
        var locationMarker = L.icon({
            iconUrl: locationIcon,
            iconSize:     [24, 24],
            iconAnchor:   [12, 12],
            popupAnchor:  [0, 0]
        });

        if (position.currentPosition.latitude && position.currentPosition.longitude) {
            L.marker(
                [position.currentPosition.latitude, position.currentPosition.longitude],
                {icon: locationMarker}
            ).addTo(currentMap).bindPopup("You are here");
        }
    }
};

export { map };
