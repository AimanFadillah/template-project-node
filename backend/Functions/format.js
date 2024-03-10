const format = {
    mb: function (mb = 1) {
        return angka * 1000000;
    },
    jam : function(jam = 1) {
        return `${1000 * 60 * 60 * jam}`;
    }
}

module.exports = format