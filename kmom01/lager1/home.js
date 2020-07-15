/* global menu, header */
"use strict";

var home = (function () {
    var showHome = function () {
        window.mainContainer.innerHTML = "";
        header.showHeader();
        menu.showMenu("home");

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Welcome!";

        var greeting = document.createElement("p");
        var timeOfDayGreeting = "Hello";
        var now = new Date();

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Good morning";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "Good evening";
        }

        greeting.textContent = timeOfDayGreeting +
            ", welcome to the Infinity Warehouses app.";
        greeting.className = "center";

        var imageFrame = document.createElement("div");
        var image = document.createElement("img");

        imageFrame.className = "warehouse";
        image.src = "warehouse.jpg";
        image.alt = "warehouse";

        imageFrame.appendChild(image);

        var message = document.createElement("p");

        message.textContent = "Please use this app to keep our warehouse " +
        "stock up to date and correct.";
        message.className = "center";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);
        window.mainContainer.appendChild(imageFrame);
        window.mainContainer.appendChild(message);

        window.rootElement.appendChild(window.mainContainer);
    };

    return {
        showHome: showHome
    };
})(home);
