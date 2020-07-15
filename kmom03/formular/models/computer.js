var m = require("mithril");

var computer = {
    operatingSystems: [
        { id: 1, name: "Windows 10" },
        { id: 2, name: "Windows 7" },
        { id: 3, name: "MacOS" },
        { id: 4, name: "Debian" },
        { id: 4, name: "Ubuntu" }
    ],
    current: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: "www.api-url.com/load/" + id
        }).then(function(result) {
            computer.current = result;
        });
    },
    save: function() {
        return m.request({
            method: "PUT",
            url: "www.api-url.com/save",
            data: computer.current
        }).then(function() {
            m.route.set("/computers");
        });
    }
};

export { computer };
