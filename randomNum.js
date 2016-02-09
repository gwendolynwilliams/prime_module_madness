var randomNum = function(min, max) {
    var number = Math.floor(Math.random() * (1 + max - min) + min);
    return number;
};

module.exports = randomNum;