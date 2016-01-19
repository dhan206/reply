var reply = require('./../'); // requires reply's index.js

reply.confirm("Are you happy?",function(err, yes) {
    if (!err && yes) {
        console.log("That is very good to hear. I'm glad that you're happy.\n");
    } else {
        console.log("Cheer up! Happiness is in your control.\n")
    }
});