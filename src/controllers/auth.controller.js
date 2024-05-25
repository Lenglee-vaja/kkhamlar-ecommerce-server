import { models } from "../app.js";
import { signUpSchema } from "../schemas/auth.schema.js";
import { ErrorMessage, SuccessMessage } from "../services/message.js";
import { Error400, Error500, Success200 } from "../services/response.js";
import { validateParams } from "../services/validation.js";
import { hashPassword } from "../util/managePassword.js";
import { generateToken } from "../util/manageToken.js";

class AuthController {
    static async signUp(req, res) {
        try {
            const { err, invalidParams } = validateParams(signUpSchema, req.body)
            if (err) {
                return Error400(res, ErrorMessage.REQUIRED_OR_INVALID + invalidParams.join(", "), err)
            }
            const checkExist = await models.user.findFirst({ where: { phone: req.body.phone } })
            if (checkExist) {
                return Error400(res, ErrorMessage.PHONE_ALREADY_EXIST)
            }
            const _password = await hashPassword(req.body.password)
            const newData = {
                ...req.body,
                password: _password
            }
            const data = await models.user.create({ data: newData })
            if (!data) throw new Error(ErrorMessage.SOMETHING_WENT_WRONG_IN_DB)
            const playLoad = {
                id: data.id,
                name: data.name
            }
            const _token = generateToken(playLoad)
            const resData = {
                ...data,
                accessToken: _token.accessToken,
                refreshToken: _token.refreshToken
            }
            delete resData.password
            return Success200(res, SuccessMessage.SUCCESSFUL, resData)
        } catch (error) {
            return Error500(res, error.message)
        }
    }
    static async signIn(req, res) {
        try {

        } catch (error) {

        }
    }
}
export default AuthController