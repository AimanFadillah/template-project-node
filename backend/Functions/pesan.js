const pesan = {
    /**
     * 
     * @param {ResponseExpress} res 
     * @param {Data} data 
     */
    pesanSuccess:function (res,data = null){
        return res.status(200).json({msg:"success",data})
    },

    /**
     * 
     * @param {ResponseExpress} res 
     * @param {PesanError} msg 
     * @param {Data} data 
     */
    pesanError:function (res,msg = "Invalid",data = null){
        return res.status(403).json({msg,data})
    }
}

module.exports = pesan;