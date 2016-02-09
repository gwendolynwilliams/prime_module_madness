var numberToCurrency = function(amount) {

    var thousandsSeparator = ","
    var currencyNum = "";
    var amountString = amount.toString();
    var digits = amountString.split("");

    var countDigits = digits.length;
    var revDigits = digits.reverse();

    for(var i=0; i<countDigits; i++) {
        if ((i%3 == 0) && (i !=0)) {
            currencyNum += thousandsSeparator+revDigits[i];
        } else {
            currencyNum += digits[i];
        }
    };

    var revCurrency = currencyNum.split("").reverse().join("");

    var finalCurrency = "$"+revCurrency;

    return finalCurrency;
}

module.exports = numberToCurrency;