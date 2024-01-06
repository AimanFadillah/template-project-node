import ConfigAxios from "../variabels/ConfigAxios";

/**
 * 
 * @param {function} setUser - Untuk Mengubah data user
 */

export async function getUser(setUser) {
    const response = await ConfigAxios.get(`/api/user`);
    if (checkUser(response,setUser)) {
        setUser(response.data.data);
    }
}

/**
 * 
 * @param {function} setUser - Untuk Mengubah data user
 */

export async function removeUser(setUser) {
    const response = await ConfigAxios.get(`/api/logout`);
    setUser(false);
}

/**
 * 
 * @param {object} response - Hasil dari response
 * @param {function} setUser - Untuk Mengubah data user jika takut ada msg dangerToken
 */

export function checkUser(response,setUser) {
    const msg = response.data.msg;
    if (msg === "dangerToken" && setUser) {
        setUser(false);
        return false;
    };
    if (msg !== "success") {
        alert(msg);
        return false;
    }
    return true;
}