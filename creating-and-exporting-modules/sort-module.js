var list = [];

module.exports = {
    takeANumber: function(x) {
        for (var i = 0; i < 5; i++) {
            list.push(x++);
        }
        return list;
    },
    sortTheNumbers: function() {
        // VVV THIS is VERRRRRRRRY important!!!!!
        // you can DO STUFF to RETURN!!!!!
        // MIND BLOWN!!!!!
        return list.sort(function(a, b) {
            return a - b;
        })
    }
};