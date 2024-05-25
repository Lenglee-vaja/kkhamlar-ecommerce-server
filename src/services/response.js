import { ErrorMessage } from "./message.js"

export const Success200 = (res, msg, data) => {
    res.status(200).json({
        success: true,
        message: msg,
        data: data
    })
}

export const Success201 = (res, msg, data) => {
    res.status(201).json({
        success: true,
        message: msg,
        data: data
    })
}

export const Error400 = (res, msg, err) => {
    res.status(400).json({
        success: false,
        message: msg,
        data: err
    })
}

export const Error404 = (res, msg, err) => {
    res.status(404).json({
        success: false,
        message: msg,
        data: err
    })
}

export const Error500 = (res, err) => {
    res.status(500).json({
        success: false,
        message: ErrorMessage.SERVER_ERROR,
        data: err
    })
}