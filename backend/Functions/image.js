import { v4 } from "uuid"; 
import path from "path";

/**
 * 
 * @param {Request} req 
 * @param {NamaFile} file 
 * @returns 
 */

export function uploadImage (req,file){
    let foto;

    try{
        foto = req.files[file]  
    }catch (e) {
        return {msg:"Tidak ada gambar"};
    }

    const allowedType = [".jpg",".jpeg",".png"]
    const size = mb(10);
    const ext = path .extname(foto.name);
    const fileSize = foto.data.length;
    const fileName = v4() + ext;
    const url = `${req.protocol}://${req.get("host")}/img/${fileName}`

    if(!allowedType.includes(ext.toLocaleLowerCase())) return {msg:"Yang diupload bukan gambar"}
    if(fileSize > size) return {msg:"Gambar maksimal 5 mb"}

    foto.mv(`./Public/img/${fileName}/`)

    return {
        msg:"success",
        data:url,
    }
}

/**
 * 
 * @param {UrlFoto} url 
 * @returns 
 */

export function destroyImage (url) {
    try{
        fs.unlinkSync(`./Public/img/${(url.split("/"))[url.split("/").length - 1]}`)
        return {msg:"success"};
    }catch(e){
        return {msg:e};
    }
}

function mb (angka) {
    return angka * 1000000;
}