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

            if(link.indexOf('2017') > -1 && (current.length > 0)){
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

exports.terminalTimes = terminalTimes;
