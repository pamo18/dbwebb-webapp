// js/utils.js

"use strict";

const utils = {
    backButton: function(navigate) {
        let button = document.createElement("button");

        button.className = "button back";
        button.addEventListener("click", navigate);

        let icon = document.createElement("i");

        icon.className = "material-icons";
        icon.textContent = "arrow_back";
        button.appendChild(icon);

        return button;
    }
};

export default utils;
