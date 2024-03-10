const format = {
    /**
     * 
     * @param {number} mb 
     * @returns 
     */
    
    mb: function (mb = 1) {
        return angka * 1000000;
    },

    /**
     * 
     * @param {number} jam 
     * @returns 
     */

    jam : function(jam = 1) {
        return `${1000 * 60 * 60 * jam}`;
    }
}

module.exports = format