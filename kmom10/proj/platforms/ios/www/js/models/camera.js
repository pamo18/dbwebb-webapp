"use strict";

import m from "mithril";

const camera = {
    currentImage: {},
    currentId: "",
    getPicture: function() {
        if (navigator.camera) {
            navigator.camera.getPicture(
                camera.cameraSuccess,
                camera.cameraError,
                {
                    // eslint-disable-next-line no-undef
                    destinationType: Camera.DestinationType.DATA_URL
                }
            );
        }
    },

    cameraSuccess: function(imageData) {
        camera.currentImage[camera.currentId] = "data:image/jpeg;base64," + imageData;
        camera.showPicture;
        m.redraw();
    },

    cameraError: function(error) {
        console.log('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    },
    showPicture: function() {
        var image;

        if (camera.currentImage[camera.currentId]) {
            image = camera.currentImage[camera.currentId];
        } else {
            image = "img/product.jpg";
        }
        return image;
    }
};

export default camera;
