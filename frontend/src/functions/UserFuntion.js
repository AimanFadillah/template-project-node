import ConfigAxios from "../variabels/ConfigAxios";

export default class UserFunction {

    constructor(user, setUser) {
        this.user = user;
        this.setUser = setUser;
    }

    checkStatus(e) {
        const msg = e.response.data.msg;
        const status = e.response.status;
        if (status == 401 && this.setUser) {
            this.setUser(false);
            return false;
        };
        if (status == 403) {
            alert(msg);
            return false;
        }
        return true;
    }

    async get() {
        try {
            const response = await ConfigAxios.get(`/api/user`);
            this.setUser(response.data.data);
            return response.data.data;
        } catch (e) {
            this.checkStatus(e)
        }
    }

    async remove() {
        try{
            const response = await ConfigAxios.get(`/api/logout`);
            this.setUser(false);
            return response.data.data;
        }catch(e){
            this.checkStatus(e);
        }
    }

}