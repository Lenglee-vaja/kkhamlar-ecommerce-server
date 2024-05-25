import Bcrypt from "bcrypt"
import CryptoJS from "crypto-js"
import { SECRET_KEY } from "../config/app.config.js";
import { ErrorMessage } from "../services/message.js";
export const hashPassword = (password) => {
    if (!password) throw new Error(ErrorMessage.REQUIRED_PASSWORD_TO_HASH)
    const hash = Bcrypt.hash(_encrypt(password), 10);
    return hash
}

export const comparePassword = (password, hash) => {
    if (!password || !hash) throw new Error(ErrorMessage.REQUIRED_PASSWORD_TO_COMPARE)
    const compare = Bcrypt.compare(_decrypt(password), hash);
    return compare
}

export const _encrypt = (password) => {
    const encryptPassword = CryptoJS.AES.encrypt(password.toString(), SECRET_KEY).toString()
    return encryptPassword
}

export const _decrypt = (password) => {
    const decryptPassword = CryptoJS.AES.decrypt(password, SECRET_KEY).toString(CryptoJS.enc.Utf8)
    return decryptPassword
}