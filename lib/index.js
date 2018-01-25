'use strict';
var request = require('request')
let cheerio = require('cheerio')


function terminalTimes(){

var reqOptions = {
    url: "https://www.nytimes.com",
    headers: {
        'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"
    }
};

request(reqOptions, function(error, response, body) {
    if (error) {
        console.log("error with http request\n", error);
    } else if (!error && response.statusCode) {
        let $ = cheerio.load(body);
        $('a').each(function(i, elem) {
            var current = $(this).text();
            var link = $(this).attr('href');
            current = current.replace(/  /g, '');
            current = current.replace(/(\r\n|\n|\r)/gm, "");

            if(link.indexOf('2017') > -1 && (current.length > 2)){
                var topLine = '';
                var bottomLine = '';
                for(var i = 0; i < current.length + 5; i++){
                  topLine = topLine + '-';
                }
                for(var i = 0; i < link.length + 4; i++){
                  bottomLine = bottomLine + '-';
                }

                console.log("\n  "+topLine+"\n  |",current, " |\n  "+bottomLine);
                console.log("  |",link, "|\n  "+bottomLine);
            }
        });
    }
});

};

function terminalTimesDEPRECATED(){
var holder = [];
var reqOptions = {
    url: "https://www.nytimes.com",
    headers: {
        'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"
    }
};

request(reqOptions, function(error, response, body) {
    console.log(`
___________                  .__
\\\__    ___/__________  _____ |__| ____   ______  _  ________
  |    |_/ __ \\\_  __ \\\/     \\\|  |/    \\\_/ __ \\\ \\\/ \\\/ /  ___/
  |    |\\\  ___/|  | \\\/  Y Y  \\\  |   |  \\\  ___/\\\     /\\\___ \\\\
  |____| \\\___  >__|  |__|_|  /__|___|  /\\\___  >\\\/\\\_//____  >`);

console.log("  TERMINEWS - RANDOM NEWS IN YOUR TERMINAL");

    if (error) {
        console.log("error with http request n", error);
    } else if (!error && response.statusCode) {
        let $ = cheerio.load(body);
        $('a').each(function(i, elem) {
            var current = $(this).text();
            var link = $(this).attr('href');
            current = current.replace(/  /g, '');
            current = current.replace(/(\r\n|\n|\r)/gm, "");

            if(link.indexOf('2017') > -1 && (current.length > 2)){

                var display = [current, link];
                holder.push([display])

            }
        });
    }

    for(var z = 0; z < holder.length; z++){

      var randomNumber1 = (Math.random() * holder.length).toFixed(0);
      var randomNumber2 = (Math.random() * holder.length).toFixed(0);
      var randomNumber3 = (Math.random() * holder.length).toFixed(0);
      var randomNumber4 = (Math.random() * holder.length).toFixed(0);
      var randomNumber5 = (Math.random() * holder.length).toFixed(0);
      var randomNumber6 = (Math.random() * holder.length).toFixed(0);
      var randomNumber7 = (Math.random() * holder.length).toFixed(0);
      var randomNumber8 = (Math.random() * holder.length).toFixed(0);
      var randomNumber9 = (Math.random() * holder.length).toFixed(0);
      var randomNumber10 = (Math.random() * holder.length).toFixed(0);
      var randomNumber11 = (Math.random() * holder.length).toFixed(0);
      var randomNumber12 = (Math.random() * holder.length).toFixed(0);
      var randomNumber13 = (Math.random() * holder.length).toFixed(0);
      var randomNumber14 = (Math.random() * holder.length).toFixed(0);
      var randomNumber15 = (Math.random() * holder.length).toFixed(0);
      var randomNumber16 = (Math.random() * holder.length).toFixed(0);
      var randomNumber17 = (Math.random() * holder.length).toFixed(0);
      var randomNumber18 = (Math.random() * holder.length).toFixed(0);
      var randomNumber19 = (Math.random() * holder.length).toFixed(0);
      var randomNumber20 = (Math.random() * holder.length).toFixed(0);
      var topLine = '';
      var bottomLine = '';
      // console.log("A: ",holder[z][0][0]);
      // console.log("B: ",holder[z][0][1]);

      for(var i = 0; i < holder[z][0][0].length + 5; i++){
        topLine = topLine + '-';
      }
      for(var i = 0; i < holder[z][0][1].length + 4; i++){
        bottomLine = bottomLine + '-';
      }
      if(z === holder.length - randomNumber1 - randomNumber2){
        console.log("\n  "+topLine+"\n  |",holder[z][0][0], " |\n  "+bottomLine+"\n  |",holder[z][0][1], "|\n  "+bottomLine);
      }
      else if(z === holder.length - randomNumber3  - randomNumber4){
        console.log("\n  "+topLine+"\n  |",holder[z][0][0], " |\n  "+bottomLine+"\n  |",holder[z][0][1], "|\n  "+bottomLine);
      }
      else if(z === holder.length - randomNumber5  - randomNumber6){
        console.log("\n  "+topLine+"\n  |",holder[z][0][0], " |\n  "+bottomLine+"\n  |",holder[z][0][1], "|\n  "+bottomLine);
      }
      else if(z === holder.length - randomNumber7  - randomNumber8){
        console.log("\n  "+topLine+"\n  |",holder[z][0][0], " |\n  "+bottomLine+"\n  |",holder[z][0][1], "|\n  "+bottomLine);
      }
      else if(z === holder.length - randomNumber9 - randomNumber10){
        console.log("\n  "+topLine+"\n  |",holder[z][0][0], " |\n  "+bottomLine+"\n  |",holder[z][0][1], "|\n  "+bottomLine);
      }
      else if(z === holder.length - randomNumber11 - randomNumber12){
        console.log("\n  "+topLine+"\n  |",holder[z][0][0], " |\n  "+bottomLine+"\n  |",holder[z][0][1], "|\n  "+bottomLine);
      }
      else if(z === holder.length - randomNumber13  - randomNumber14){
        console.log("\n  "+topLine+"\n  |",holder[z][0][0], " |\n  "+bottomLine+"\n  |",holder[z][0][1], "|\n  "+bottomLine);
      }
      else if(z === holder.length - randomNumber15  - randomNumber16){
        console.log("\n  "+topLine+"\n  |",holder[z][0][0], " |\n  "+bottomLine+"\n  |",holder[z][0][1], "|\n  "+bottomLine);
      }
      else if(z === holder.length - randomNumber17  - randomNumber18){
        console.log("\n  "+topLine+"\n  |",holder[z][0][0], " |\n  "+bottomLine+"\n  |",holder[z][0][1], "|\n  "+bottomLine);
      }
      else if(z === holder.length - randomNumber19 - randomNumber20){
        console.log("\n  "+topLine+"\n  |",holder[z][0][0], " |\n  "+bottomLine+"\n  |",holder[z][0][1], "|\n  "+bottomLine);
      }
    }
});

};

exports.terminalTimes = terminalTimes;
