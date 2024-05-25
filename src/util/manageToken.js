import CryptoJS from "crypto-js";
import { JWT_EXPIRES_IN, JWT_REFRESH_EXPIRES_IN, JWT_REFRESH_SECRET_KEY, JWT_SECRET_KEY, SECRET_KEY } from "../config/app.config.js";
import { ErrorMessage } from "../services/message.js";
import Jwt from "jsonwebtoken";

export const generateToken = (playLoad) => {
    const _playLoad = {
        id: encrypt(playLoad.id),
        name: encrypt(playLoad.name)
    }
    const accessToken = Jwt.sign(_playLoad, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRES_IN })
    const refreshToken = Jwt.sign(_playLoad, JWT_REFRESH_SECRET_KEY, { expiresIn: JWT_REFRESH_EXPIRES_IN })
    if (!accessToken || !refreshToken) throw new Error(ErrorMessage.GENERATE_TOKEN_FAIL)
    return { accessToken, refreshToken }
}


export const encrypt = (data) => {
    if (!data) throw new Error(ErrorMessage.REQUIRED_DATA_ENCRYPTION)
    const dataEncrypt = CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
    return dataEncrypt
}


export const decrypt = (data) => {
    if (!data) throw new Error(ErrorMessage.REQUIRED_DATA_DECRYPTION)
    const dataDecrypt = CryptoJS.AES.decrypt(data, SECRET_KEY).toString(CryptoJS.enc.Utf8);
    return dataDecrypt
}