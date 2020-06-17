const moment = require('moment-timezone');
module.exports = function(timezone=null) {

    // Getting original console.log
    var originalLog = console.log;

    // Fn that returns a nicely formated current timestamp
    function getCurrentDate() {
        if (timezone) {
            return moment.tz(timezone).format('YYYY-MM-DD HH:mm:ss.SSSS')
        }
        return moment.tz('Europe/London').format('YYYY-MM-DD HH:mm:ss.SSSS') + ' ==>';
    };

    // Manipulating originalLog via apply
    console.log = function () {
        var args = [].slice.call(arguments);
        originalLog.apply(console.log, [getCurrentDate()].concat(args));
    };

};