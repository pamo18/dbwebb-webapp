/* global menu */
"use strict";

var home = (function () {
    var showHome = function () {
        window.mainContainer.innerHTML = "";
        menu.showMenu("home");

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Paul Moreland";

        var greeting = document.createElement("p");
        var timeOfDayGreeting = "Hej";
        var now = new Date();

        if (now.getHours() <= 10) {
            timeOfDayGreeting = "Godmorgon";
        } else if (now.getHours() >= 17) {
            timeOfDayGreeting = "Godkväll";
        }

        greeting.textContent = timeOfDayGreeting +
            ", jag heter Paul Moreland och är student i kursen webapp.";

        var image1 = document.createElement("img");
        var image2 = document.createElement("img");
        var imageFigure = document.createElement("figure");
        var imageCaption = document.createElement("figcaption");

        image1.className = "me";
        image1.src = "Paul-Moreland-2.jpg";
        image1.alt = "Paul Moreland";

        image2.className = "manchester";
        image2.src = "Manchester.jpg";
        image2.alt = "Manchester";

        imageCaption.textContent = "St Peter's Square, Manchester";
        imageFigure.appendChild(image2);
        imageFigure.appendChild(imageCaption);

        var me = document.createElement("p");

        me.textContent = `
        Jag är uppväxt i Manchester där mina föräldrar och min andra släkt
        bor kvar. Året 1999 kommer jag starkt ihåg, Manchester United vann
        en Trippel, Premier league, Champions league & FA cupen. Samma år
        träfffade jag min fru som drog mig till Sverige, där jag bor kvar
        idag med två barn, pojkar 15 & 11 år. Vi bor utanför Lidköping i
        Västra Götaland. Jag har jobbat 20 år inom handel men jobbar nu också som
        IT-Tekniker på De La Gardiegymnasiet. Mina hobbys är allt inom
        data och AV samt löpning och styketräning när jag hinner.
        Självklart är fotboll högt prioriterat i mitt liv också.
        Jag har nu börjat att studera Webbprogrammering, vilket jag har
        funderat över länge efter att jag fick smak för programmering
        för några års sedan. På De La Gardiegymnasiet har jag skapat ett
        butikssystem från grunden med självskanning och lager-hantering
        genom MS Excel och VBA programmering. Detta är den mest avancerade
        sak jag har hittills skapat inom programmering men hoppas att kunna
        bygga på detta och utveckla mycket mer framöver.`;

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);
        window.mainContainer.appendChild(image1);
        window.mainContainer.appendChild(me);
        window.mainContainer.appendChild(imageFigure);

        window.rootElement.appendChild(window.mainContainer);
    };

    return {
        showHome: showHome
    };
})(home);
