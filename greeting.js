var scott = "Scott Bromander";
var rachael = "Rachael Bromander";
var jackson = "Jackson Bromander";

var bromanderFamily = {
    someFamily: [scott, rachael, jackson]
};

var allOfThem = function() {
    return bromanderFamily;
};

var welcomeMessage = function(){
    return scott + " " + finalWelcomeMessage();
};

var anotherWelcomeMessage = function(){
    return rachael;
};

var finalWelcomeMessage = function(){
    return jackson;
};

module.exports = allOfThem;
module.exports.rachael = anotherWelcomeMessage;
