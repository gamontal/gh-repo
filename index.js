module.exports = exports = function(options, cb) {
    if (typeof require == 'function') {
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var exports = module.exports = {};	
        var httpGet = function(url)
        {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", url, false);
            xmlHttp.send(null);
            return JSON.parse(xmlHttp.responseText);
        }	
    } else {
        var exports = {};
        var httpGet = $.get;
    }
    
    var url = 'https://api.github.com/search/repositories?';
    var username = options.username;
    var repo = options.repo;
    
    var req = httpGet(url + 'q=' + repo + 'user:' + username);
    var res = req.items[0];
    cb(res);
}
