var reply = require('./../'); // requires reply's index.js

var options = {
    favorite_fruit: { // example using default
        message: "What is your favorite fruit?",
        default: "Watermelon"
    },
    favorite_season: { // example using options
        message: "What is your favorite season in the year?",
        options: ["Winter", "Spring", "Summer", "Fall", "Football"]
    },
    love_snow: { // example using depends_on
        message: "Why do you love snow?",
        depends_on: {
            season: "Winter"
        }
    },
    green_grass: { // example using type and default
        message: "Is your grass green?",
        type: "boolean",
        default: false
    }    
}

var ask = function(questions) {
    reply.get(questions, function(err, results) {
       if (!err) {
           console.log("Results:");
           console.log(results); // displays the user's results/answers
       } else {
           console.log("Error: " + err); // displays the error
       }
    });
}

ask(options); // initializes the asking of questions stored in options