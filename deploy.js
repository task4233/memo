var master = require("master");

master.publish("./docs", {
    user: {
        name: "task4233",
        email: "tks.m1205@gmail.com"
    }
}, function (err) {
    if (err) {
        console.log(err);
        process.exit(1);
    } else {
        console.log("Successfully Delployed!");
    }
});
