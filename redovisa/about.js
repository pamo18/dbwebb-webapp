/* global menu */

"use strict";

var about = (function () {
    var showAbout = function () {
        window.mainContainer.innerHTML = "";
        menu.showMenu("free_breakfast");

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Om";

        var greeting = document.createElement("p");

        greeting.textContent = "Detta är kursen webapp, " +
            "där vi skapar tillgängliga och användbara applikationer " +
            "för mobila enheter.  Kursen syftar till att lära ut utveckling " +
            "av webbapplikationer med HTML, CSS och JavaScript och fokuserar " +
            "på mobila enheter och läsplattor.  " +
            "Jag ser fram emot vad jag kommer lära mig under kursen, spännande!";

        var imageFrame = document.createElement("div");
        var imageLink = document.createElement("a");
        var image = document.createElement("img");

        imageLink.href = "https://dbwebb.se/kurser/webapp-v3";
        imageFrame.className = "webapp";
        image.src = "webapp.png";
        image.alt = "webapp";

        imageFrame.appendChild(imageLink);
        imageLink.appendChild(image);
        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);
        window.mainContainer.appendChild(imageFrame);

        window.rootElement.appendChild(window.mainContainer);
    };

    return {
        showAbout: showAbout
    };
})(about);
