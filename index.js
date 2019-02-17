module.exports = (function() {
    
    // Getting original console.log
    var originalLog = console.log;

    // Fn that returns a nicely formated current timestamp
    function getCurrentDate() {
        return (new Date()).toISOString().replace(/[T|Z]/g, ' ').split('.')[0] + ' ==>';
    };
    
    // Manipulating originalLog via apply
    console.log = function () {
        var args = [].slice.call(arguments);
        originalLog.apply(console.log, [getCurrentDate()].concat(args));
    };

})();