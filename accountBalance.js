var randomNum = require('./randomNum');
var convertDollars = require('./convertDollars');

var convertRandomToDollars = function() {
    return convertDollars(randomNum(100, 1000000));
};

var accountBalance = function() {
    return 'Account Balance:\n';
}

exports.convertRandomToDollars = convertRandomToDollars;
exports.accountBalance = accountBalance;